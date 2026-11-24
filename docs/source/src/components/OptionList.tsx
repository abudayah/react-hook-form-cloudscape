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
import { COptionList } from "react-hook-form-cloudscape";

const schema = yup
  .object({
    selectedOptions: yup
      .array()
      .of(
        yup.object({
          label: yup.string(),
          value: yup.string(),
        }),
      )
      .min(1, "Select at least one option")
      .required(),
  })
  .required();

const defaultValues = {
  selectedOptions: [] as Array<{ label?: string; value?: string }>,
};

interface Props {
  onSubmit: (data: unknown) => void;
}

const OptionListDemo: React.FC<Props> = ({ onSubmit }) => {
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

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="OptionList component usage example">
          Option List
        </Header>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <FormField label="Select regions" errorText={get(errors, "selectedOptions.message")}>
                <COptionList
                  control={control}
                  name="selectedOptions"
                  selectionType="multi"
                  options={[
                    { label: "Canada (Calgary)", value: "ca-west-1" },
                    { label: "Canada (Central)", value: "ca-central-1" },
                    { label: "US West (Oregon)", value: "us-west-2" },
                  ]}
                  i18nStrings={{
                    selectedAriaLabel: "Selected",
                  }}
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default OptionListDemo;
