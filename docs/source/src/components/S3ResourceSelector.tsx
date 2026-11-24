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
import type { S3ResourceSelectorProps } from "@cloudscape-design/components/s3-resource-selector";
import { CS3ResourceSelector } from "react-hook-form-cloudscape";

const schema = yup
  .object({
    resource: yup
      .object({
        uri: yup.string().required("Select or enter an S3 URI"),
      })
      .required(),
  })
  .required();

const defaultValues: { resource: S3ResourceSelectorProps.Resource } = {
  resource: { uri: "" },
};

const sampleBuckets: S3ResourceSelectorProps.Bucket[] = [
  { Name: "demo-assets-bucket", CreationDate: "2026-01-15T00:00:00Z", Region: "ca-west-1" },
  { Name: "demo-exports-bucket", CreationDate: "2026-02-10T00:00:00Z", Region: "ca-central-1" },
];

const sampleObjects: S3ResourceSelectorProps.Object[] = [
  { Key: "reports/summary.csv", LastModified: "2026-05-01T12:00:00Z", Size: 2048 },
  { Key: "invoices/2026-q1.pdf", LastModified: "2026-05-10T09:30:00Z", Size: 18432 },
];

interface Props {
  onSubmit: (data: unknown) => void;
}

const S3ResourceSelectorDemo: React.FC<Props> = ({ onSubmit }) => {
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
        <Header variant="h1" description="S3ResourceSelector component usage example">
          S3 Resource Selector
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
              <FormField label="S3 URI" errorText={get(errors, "resource.uri.message")}>
                <CS3ResourceSelector
                  control={control}
                  name="resource"
                  selectableItemsTypes={["buckets", "objects"]}
                  fetchBuckets={async () => sampleBuckets}
                  fetchObjects={async () => sampleObjects}
                  fetchVersions={async () => []}
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default S3ResourceSelectorDemo;
