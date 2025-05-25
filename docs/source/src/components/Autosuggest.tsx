import React from "react";
import { useForm, get } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Button,
  Form,
  FormField,
  SpaceBetween,
  Container,
  ContentLayout,
  Header,
} from "@cloudscape-design/components";
import { CAutosuggest } from "react-hook-form-cloudscape";

const schema = yup
  .object({
    fieldName: yup.string().required(),
  })
  .required();

interface Props {
  onSubmit: (data: any) => void;
}

const Autosuggest: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      fieldName: "",
    },
  });

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Autosuggest component usage example">
          Autosuggest
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
              <Button variant="primary">Submit</Button>
            </SpaceBetween>
          }
        >
          <Container>
            <SpaceBetween size="s">
              <FormField label="Autosuggest" errorText={get(errors, `fieldName.message`)}>
                <CAutosuggest
                  name="fieldName"
                  control={control}
                  options={[
                    { value: "Suggestion 1" },
                    { value: "Suggestion 2" },
                    { value: "Suggestion 3" },
                    { value: "Suggestion 4" },
                  ]}
                  placeholder="Enter value"
                  empty="No matches found"
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default Autosuggest;
