import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Form, SpaceBetween, Container, ContentLayout, Header } from "@cloudscape-design/components";
import { CFormField, CInput } from "react-hook-form-cloudscape";

const schema = yup
  .object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    displayName: yup.string().min(2, "At least 2 characters").required("Display name is required"),
  })
  .required();

const defaultValues = {
  email: "",
  displayName: "",
};

interface Props {
  onSubmit: (data: unknown) => void;
}

const FormFieldDemo: React.FC<Props> = ({ onSubmit }) => {
  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues,
  });
  const { control, handleSubmit, reset } = methods;

  return (
    <ContentLayout
      header={
        <Header
          variant="h1"
          description="CFormField automatically binds React Hook Form errors to Cloudscape FormField errorText"
        >
          Form Field
        </Header>
      }
    >
      <FormProvider {...methods}>
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
              <SpaceBetween size="m">
                <CFormField control={control} name="displayName" label="Display name (explicit control)">
                  <CInput control={control} name="displayName" placeholder="Jane Doe" />
                </CFormField>

                <CFormField name="email" label="Email (via FormProvider context)">
                  <CInput name="email" placeholder="jane@example.com" />
                </CFormField>
              </SpaceBetween>
            </Container>
          </Form>
        </form>
      </FormProvider>
    </ContentLayout>
  );
};

export default FormFieldDemo;
