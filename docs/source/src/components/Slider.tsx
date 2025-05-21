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
import { CSlider } from "react-hook-form-cloudscape";

const schema = yup
  .object({
    fieldName: yup
      .number()
      .required("Value is required")
      .min(25, "Value must be at least 25")
      .max(75, "Value must be at most 75"),
  })
  .required();

const defaultValues = {
  fieldName: 0,
};

interface Props {
  onSubmit: (data: any) => void;
}

const SliderComponent: React.FC<Props> = ({ onSubmit }) => {
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
        <Header variant="h1" description="Slider component usage example">
          Slider
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
              <FormField label="Slider" errorText={get(errors, `fieldName.message`)}>
                <CSlider name="fieldName" control={control} min={0} max={100} />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default SliderComponent;
