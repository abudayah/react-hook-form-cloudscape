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
import { CTextFilter } from "react-hook-form-cloudscape";

const schema = yup
  .object({
    fieldName: yup.string().required(), // Text filter value is a string. No validation by default.
  })
  .required();

const defaultValues = {
  fieldName: "", // Default value is an empty string
};

interface Props {
  onSubmit: (data: any) => void;
}

const TextFilter: React.FC<Props> = ({ onSubmit }) => {
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

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Text Filter component usage example">
          Text Filter
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
              <FormField label="Text Filter" errorText={get(errors, `fieldName.message`)}>
                <CTextFilter
                  name="fieldName"
                  control={control}
                  filteringPlaceholder="Find instances"
                  filteringAriaLabel="Filter instances"
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default TextFilter;
