import React from 'react';
import { useForm, get } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Form, FormField, SpaceBetween, Container, ContentLayout, Header } from '@cloudscape-design/components';
import { CFileUpload } from 'react-hook-form-cloudscape';

const schema = yup.object({
  fieldName: yup.array().of(
    yup.object().shape({
      name: yup.string().required(), // Validate file name (or other relevant properties)
      size: yup.number().required(), // Example: validate file size
      //... other file properties you want to validate
    })
  ).required('At least one file is required'),
}).required();

interface Props {
  onSubmit: (data: any) => void;
}

const FileUpload: React.FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="File Upload component usage example">
          File Upload
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
              <FormField label="File Upload" errorText={get(errors, `fieldName.message`)}>
                <CFileUpload
                  name="fieldName"
                  control={control}
                  i18nStrings={{
                    uploadButtonText: e => (e ? "Choose files" : "Choose file"),
                    dropzoneText: e =>
                      e ? "Drop files to upload" : "Drop file to upload",
                    removeFileAriaLabel: e => `Remove file ${e + 1}`,
                    limitShowFewer: "Show fewer files",
                    limitShowMore: "Show more files",
                    errorIconAriaLabel: "Error",
                    warningIconAriaLabel: "Warning",
                  }}
                  showFileLastModified
                  showFileSize
                  showFileThumbnail
                  tokenLimit={3}
                  constraintText="Hint text for file requirements"
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default FileUpload;
