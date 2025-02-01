import React from 'react';
import { useForm, get } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Form, FormField, SpaceBetween, Container, ContentLayout, Header } from '@cloudscape-design/components';
import { CSelect } from 'react-hook-form-cloudscape';

const schema = yup.object({
  fieldName: yup.string().required('An option must be selected'),
}).required();

const defaultValues = {
  fieldName: '',
};

interface Props {
  onSubmit: (data: any) => void;
}

const Select: React.FC<Props> = ({ onSubmit }) => {
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
        <Header variant="h1" description="Select component usage example">
          Select
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
              <FormField label="Select" errorText={get(errors, `fieldName.message`)}>
                <CSelect
                  name="fieldName"
                  control={control}
                  options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                    { label: "Option 3", value: "option3" },
                    { label: "Option 4", value: "option4" },
                    { label: "Option 5", value: "option5" }
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

export default Select;
