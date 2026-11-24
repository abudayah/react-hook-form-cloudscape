import React from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Form,
  FormField,
  SpaceBetween,
  Container,
  ContentLayout,
  Header,
} from "@cloudscape-design/components";
import type { PropertyFilterProps } from "@cloudscape-design/components/property-filter";
import { CPropertyFilter } from "react-hook-form-cloudscape";

interface FormValues {
  query: PropertyFilterProps.Query;
}

const defaultValues: FormValues = {
  query: {
    tokens: [],
    operation: "and",
  },
};

interface Props {
  onSubmit: (data: unknown) => void;
}

const PropertyFilterDemo: React.FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues,
  });

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="PropertyFilter component usage example">
          Property Filter
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
              <FormField label="Filter resources">
                <CPropertyFilter
                  control={control}
                  name="query"
                  filteringPlaceholder="Find resources"
                  filteringProperties={[
                    {
                      key: "instanceid",
                      operators: ["=", "!=", ":", "!:"],
                      propertyLabel: "Instance ID",
                      groupValuesLabel: "Instance ID values",
                    },
                    {
                      key: "state",
                      operators: ["=", "!="],
                      propertyLabel: "State",
                      groupValuesLabel: "State values",
                    },
                  ]}
                  filteringOptions={[
                    { propertyKey: "state", value: "Running" },
                    { propertyKey: "state", value: "Stopped" },
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

export default PropertyFilterDemo;
