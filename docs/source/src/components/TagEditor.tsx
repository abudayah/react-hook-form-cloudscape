import React from 'react';
import { useForm, get } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Form, FormField, SpaceBetween, Container, ContentLayout, Header } from '@cloudscape-design/components';
import { CTagEditor } from 'react-hook-form-cloudscape';
import tagEditorI18nStrings from '../i18n';

const schema = yup.object({
  fieldName: yup.array().of(
    yup.object().shape({
      key: yup.string().required("Key is required"),
      value: yup.string().required("Value is required"),
    })
  ).min(1, "At least one tag is required")
  .max(50, "You can't add more than 50 tags")
}).required();

const defaultValues = {
  fieldName: []
};

interface Props {
  onSubmit: (data: any) => void;
}

const TagEditor: React.FC<Props> = ({ onSubmit }) => {
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
        <Header variant="h1" description="Tag Editor component usage example">
          Tag Editor
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
              <FormField label="Tag Editor" errorText={get(errors, `fieldName.message`)}>
                <CTagEditor
                  name="fieldName"
                  control={control}
                  keysRequest={() =>
                    Promise.resolve([
                      "some-existing-key-3",
                      "some-existing-key-4",
                      "some-existing-key-5"
                    ])
                  }
                  valuesRequest={(key) =>
                    key
                      ? Promise.resolve([
                        "value 1",
                        "value-2",
                        "value-3"
                      ])
                      : Promise.reject()
                  }
                  i18nStrings={tagEditorI18nStrings}
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default TagEditor;
