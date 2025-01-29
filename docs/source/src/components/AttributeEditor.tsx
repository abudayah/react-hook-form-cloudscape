import React from 'react';
import { useForm, get, FieldValues, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Form, FormField, SpaceBetween, Container, ContentLayout, Header } from '@cloudscape-design/components';
import { CAttributeEditor, CInput } from 'react-hook-form-cloudscape';

const schema = yup.object({
  fieldName: yup.array().of(
    yup.object().shape({
      key: yup.string().required('Key is required'),
      value: yup.string().required('Value is required')
    })
  ).min(1, 'At least one item is required.').required(),
}).required();

interface Props {
  onSubmit: (data: any) => void;
}

const AttributeEditor: React.FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      fieldName: [{ key: '', value: '' }],
    }
  });

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Attribute Editor component usage example">
          Attribute Editor
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
              <FormField label="Input" errorText={get(errors, `fieldName.message`)}>
                <CAttributeEditor
                  name="fieldName"
                  control={control as unknown as Control<FieldValues>}
                  definition={[
                    {
                      label: "Key",
                      control: (field: FieldValues, fieldIndex) => (
                        <CInput
                          key={field.id}
                          control={control}
                          name={`fieldName.${fieldIndex}.key`}
                          placeholder="Enter key" />
                      )
                    },
                    {
                      label: "Value",
                      control: (field: FieldValues, fieldIndex) => (
                        <CInput
                          key={field.id}
                          control={control}
                          name={`fieldName.${fieldIndex}.value`}
                          placeholder="Enter value" />
                      )
                    }
                  ]}
                  defaultValue={[{ key: '', value: '' }]} // Default values are required for the component to work.
                  addButtonText="Add new item"
                  removeButtonText='Remove'
                  empty="No items associated with the resource."
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>

  );
};

export default AttributeEditor;
