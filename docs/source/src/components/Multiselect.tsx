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
import { CMultiselect } from "react-hook-form-cloudscape";

const schema = yup.object({
  fieldName: yup.array().of(yup.string()).min(1),
});

const defaultValues = {
  fieldName: [],
};

interface Props {
  onSubmit: (data: any) => void;
}

const Multiselect: React.FC<Props> = ({ onSubmit }) => {
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
        <Header variant="h1" description="Multiselect component usage example">
          Multiselect
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
              <FormField label="Multiselect" errorText={get(errors, `fieldName.message`)}>
                <CMultiselect
                  name="fieldName"
                  control={control}
                  options={[
                    {
                      label: "Option 1",
                      value: "option1",
                      description: "This is a description",
                    },
                    {
                      label: "Option 2",
                      value: "option2",
                      iconName: "unlocked",
                      labelTag: "This is a label tag",
                    },
                    {
                      label: "Option 3 (disabled)",
                      value: "option3",
                      iconName: "share",
                      tags: ["Tags go here", "Tag1", "Tag2"],
                    },
                    {
                      label: "Option 4",
                      value: "option4",
                      filteringTags: ["filtering", "tags", "these are filtering tags"],
                    },
                    { label: "Option 5", value: "option5" },
                  ]}
                  placeholder="Choose options"
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default Multiselect;
