import React from 'react';
import { useForm, get } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Form, FormField, SpaceBetween, Container, ContentLayout, Header } from '@cloudscape-design/components';
import { CTimeInput } from 'react-hook-form-cloudscape';

const schema = yup.object({
  fieldName: yup.string().required('Time is required').matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (hh:mm)'),
}).required();

const defaultValues = {
  fieldName: '',
};

interface Props {
  onSubmit: (data: any) => void;
}

const TimeInput: React.FC<Props> = ({ onSubmit }) => {
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
        <Header variant="h1" description="Time Input component usage example">
          Time Input
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
              <FormField label="Time" errorText={get(errors, `fieldName.message`)}>
                <CTimeInput
                  name="fieldName"
                  control={control}
                  format="hh:mm"
                  placeholder="hh:mm"
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default TimeInput;
