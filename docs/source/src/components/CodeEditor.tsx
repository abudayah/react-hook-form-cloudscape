import React, { useEffect, useState } from "react";
import { useForm, get } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CodeEditorI18nStrings } from "../i18n";
import * as yup from "yup";

import {
  Button,
  Form,
  FormField,
  SpaceBetween,
  Container,
  ContentLayout,
  Header,
  NonCancelableCustomEvent,
  CodeEditorProps,
} from "@cloudscape-design/components";
import { CCodeEditor } from "react-hook-form-cloudscape";

import "ace-builds/css/ace.css";
import "ace-builds/css/theme/cloud_editor.css";
import "ace-builds/css/theme/cloud_editor_dark.css";

import jsonWorkerUrl from "ace-builds/src-noconflict/worker-json?url";

const schema = yup.object({
  fieldName: yup.string().required("This field is required"),
});

const defaultValues = {
  fieldName: "",
};

interface Props {
  onSubmit: (data: any) => void;
}

const CodeEditor: React.FC<Props> = ({ onSubmit }) => {
  const [isCodeEditorValid, setIsCodeEditorValid] = useState(true);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues,
  });

  const [preferences, setPreferences] = useState({});
  const [loading, setLoading] = useState(true);
  const [ace, setAce] = useState<any>();

  useEffect(() => {
    async function loadAce() {
      const ace = await import("ace-builds");
      await import("ace-builds/esm-resolver");
      ace.config.set("useStrictCSP", true);
      ace.config.setModuleUrl("ace/mode/json_worker", jsonWorkerUrl);

      return ace;
    }

    loadAce()
      .then((ace) => setAce(ace))
      .finally(() => setLoading(false));
  }, []);

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Code Editor component usage example">
          Code Editor
        </Header>
      }
    >
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button formAction="none" onClick={() => reset()}>
                Reset
              </Button>
              <Button disabled={!isCodeEditorValid} variant="primary">
                Submit
              </Button>
            </SpaceBetween>
          }
        >
          <Container>
            <SpaceBetween size="s">
              <FormField label="Code Editor" errorText={get(errors, `fieldName.message`)}>
                <CCodeEditor
                  ace={ace}
                  name="fieldName"
                  control={control}
                  language="json"
                  onValidate={(event: NonCancelableCustomEvent<CodeEditorProps.ValidateDetail>) => {
                    setIsCodeEditorValid(
                      !event.detail.annotations.some((annotation) => annotation.type === "error"),
                    );
                  }}
                  preferences={preferences}
                  onPreferencesChange={(event) => setPreferences(event.detail)}
                  loading={loading}
                  i18nStrings={CodeEditorI18nStrings}
                  themes={{ light: ["cloud_editor"], dark: ["cloud_editor_dark"] }}
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default CodeEditor;
