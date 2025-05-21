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
import { CTiles } from "react-hook-form-cloudscape";

const schema = yup
  .object({
    fieldName: yup.string().required("At least one item must be selected"),
  })
  .required();

interface Props {
  onSubmit: (data: any) => void;
}

const Tiles: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Tiles component usage example">
          Tiles
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
              <FormField label="Tiles" errorText={get(errors, `fieldName.message`)}>
                <CTiles
                  name="fieldName"
                  control={control}
                  items={[
                    { label: "Item 1 label", value: "item1" },
                    { label: "Item 2 label", value: "item2" },
                    { label: "Item 3 label", value: "item3" },
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

export default Tiles;
