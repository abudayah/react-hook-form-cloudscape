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
import { CSegmentedControl } from "react-hook-form-cloudscape";

const schema = yup
  .object({
    viewMode: yup.string().required("Select a view mode"),
  })
  .required();

const defaultValues = {
  viewMode: "list",
};

interface Props {
  onSubmit: (data: unknown) => void;
}

const SegmentedControlDemo: React.FC<Props> = ({ onSubmit }) => {
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
        <Header variant="h1" description="SegmentedControl component usage example">
          Segmented Control
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
              <FormField label="View mode" errorText={get(errors, "viewMode.message")}>
                <CSegmentedControl
                  control={control}
                  name="viewMode"
                  label="View mode"
                  options={[
                    { id: "list", text: "List" },
                    { id: "grid", text: "Grid" },
                    { id: "table", text: "Table" },
                  ]}
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default SegmentedControlDemo;
