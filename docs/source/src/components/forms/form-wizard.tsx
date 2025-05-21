import React from "react";
import { useForm, get } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Button,
  FormField,
  SpaceBetween,
  Container,
  ContentLayout,
  Header,
  Wizard,
  Link,
  KeyValuePairs,
} from "@cloudscape-design/components";
import { CInput } from "react-hook-form-cloudscape";

// Validation schema
const schema = yup.object({
  step1: yup
    .object()
    .shape({
      field1: yup.string().required().label("First field"),
      field2: yup.string().label("Second field"),
    })
    .required(),
  step2: yup
    .object()
    .shape({
      field3: yup.string().required().label("First field"),
      field4: yup.string().label("Second field"),
    })
    .required(),
  step3: yup
    .object()
    .shape({
      field5: yup.string().required().label("First field"),
      field6: yup.string().label("Second field"),
    })
    .optional(),
});

// Form default values
const defaultValues = {
  step1: {
    field1: "",
    field2: "",
  },
  step2: {
    field3: "",
    field4: "",
  },
  step3: {
    field5: "",
    field6: "",
  },
};

interface Props {
  onSubmit: (data: any) => void;
}

const FormWizard: React.FC<Props> = ({ onSubmit }) => {
  const [activeStepIndex, setActiveStepIndex] = React.useState(0);
  const [isLoadingNextStep, setIsLoadingNextStep] = React.useState(false);

  const {
    control,
    getValues,
    reset,
    trigger,
    getFieldState,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onWizardSubmit = () => onSubmit(getValues());

  const onValidateWizardStep = async (stepIndex: number) => {
    setIsLoadingNextStep(true);
    await trigger(`step${stepIndex}` as keyof typeof defaultValues);
    const { error } = getFieldState(`step${stepIndex}` as keyof typeof defaultValues);
    if (!error) setActiveStepIndex(stepIndex);
    setIsLoadingNextStep(false);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Wizard form with validation example">
          Wizard form
        </Header>
      }
    >
      <Container>
        <Wizard
          onSubmit={onWizardSubmit}
          onNavigate={({ detail }) => onValidateWizardStep(detail.requestedStepIndex)}
          onCancel={() => {
            setActiveStepIndex(0);
            reset();
          }}
          isLoadingNextStep={isLoadingNextStep}
          activeStepIndex={activeStepIndex}
          submitButtonText="Launch instance"
          steps={[
            {
              title: "Choose instance type",
              info: <Link variant="info">Info</Link>,
              description:
                "Each instance type includes one or more instance sizes, allowing you to scale your resources to the requirements of your target workload.",
              content: (
                <Container header={<Header variant="h2">Form container header</Header>}>
                  <SpaceBetween direction="vertical" size="l">
                    <FormField label="First field" errorText={get(errors, "step1.field1.message")}>
                      <CInput control={control} name="step1.field1" />
                    </FormField>
                    <FormField
                      label={
                        <>
                          Second field <i>- optional</i>
                        </>
                      }
                      errorText={get(errors, "step1.field2.message")}
                    >
                      <CInput control={control} name="step1.field2" />
                    </FormField>
                  </SpaceBetween>
                </Container>
              ),
            },
            {
              title: "Add storage",
              content: (
                <Container header={<Header variant="h2">Form container header</Header>}>
                  <SpaceBetween direction="vertical" size="l">
                    <FormField label="First field" errorText={get(errors, "step2.field3.message")}>
                      <CInput control={control} name="step2.field3" />
                    </FormField>
                    <FormField
                      label={
                        <>
                          Second field <i>- optional</i>
                        </>
                      }
                      errorText={get(errors, "step2.field4.message")}
                    >
                      <CInput control={control} name="step2.field4" />
                    </FormField>
                  </SpaceBetween>
                </Container>
              ),
              isOptional: true,
            },
            {
              title: "Configure security group",
              content: (
                <Container header={<Header variant="h2">Form container header</Header>}>
                  <SpaceBetween direction="vertical" size="l">
                    <FormField label="First field" errorText={get(errors, "step3.field5.message")}>
                      <CInput control={control} name="step3.field5" />
                    </FormField>
                    <FormField
                      label={
                        <>
                          Second field <i>- optional</i>
                        </>
                      }
                      errorText={get(errors, "step3.field6.message")}
                    >
                      <CInput control={control} name="step3.field6" />
                    </FormField>
                  </SpaceBetween>
                </Container>
              ),
              isOptional: true,
            },
            {
              title: "Review and launch",
              content: (
                <SpaceBetween size="xs">
                  <Header variant="h3" actions={<Button onClick={() => setActiveStepIndex(0)}>Edit</Button>}>
                    Step 1: Instance type
                  </Header>
                  <Container header={<Header variant="h2">Container title</Header>}>
                    <KeyValuePairs
                      columns={2}
                      items={[
                        {
                          label: "First field",
                          value: getValues("step1.field1"),
                        },
                        {
                          label: "Second Field",
                          value: getValues("step1.field2"),
                        },
                      ]}
                    />
                  </Container>
                </SpaceBetween>
              ),
            },
          ]}
          i18nStrings={{
            stepNumberLabel: (stepNumber) => `Step ${stepNumber}`,
            collapsedStepsLabel: (stepNumber, stepsCount) => `Step ${stepNumber} of ${stepsCount}`,
            navigationAriaLabel: "Steps",
            cancelButton: "Reset",
            previousButton: "Previous",
            nextButton: "Next",
            optional: "optional",
          }}
        />
      </Container>
    </ContentLayout>
  );
};

export default FormWizard;
