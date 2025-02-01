import React from 'react';
import { useForm, get } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Form, FormField, SpaceBetween, Container, ContentLayout, Header } from '@cloudscape-design/components';
import { CRadioGroup } from 'react-hook-form-cloudscape';

const schema = yup.object({
  fieldName: yup.string().required('A choice is required'),
}).required();

const defaultValues = {
  fieldName: '',
};

interface Props {
  onSubmit: (data: any) => void;
}

const RadioGroup: React.FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Radio Group component usage example">
          Radio Group
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
              <FormField label="Radio Group" errorText={get(errors, `fieldName.message`)}>
                <CRadioGroup
                  name="fieldName"
                  control={control}
                  items={[
                    { value: "first", label: "First choice" },
                    { value: "second", label: "Second choice" },
                    { value: "third", label: "Third choice" }
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

export default RadioGroup;
