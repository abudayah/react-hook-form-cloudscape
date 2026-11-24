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
import { CDateInput } from "react-hook-form-cloudscape";

const schema = yup
  .object({
    dateInput: yup
      .string()
      .matches(/^\d{4}\/\d{2}\/\d{2}$/, "Use YYYY/MM/DD format")
      .required("Date is required"),
  })
  .required();

const defaultValues = {
  dateInput: "",
};

interface Props {
  onSubmit: (data: unknown) => void;
}

const DateInputDemo: React.FC<Props> = ({ onSubmit }) => {
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
        <Header variant="h1" description="DateInput component usage example">
          Date Input
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
              <FormField
                label="Date input"
                constraintText="Use YYYY/MM/DD format."
                errorText={get(errors, "dateInput.message")}
              >
                <CDateInput control={control} name="dateInput" placeholder="YYYY/MM/DD" />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default DateInputDemo;
