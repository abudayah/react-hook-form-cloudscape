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
import { CDatePicker } from "react-hook-form-cloudscape";

const schema = yup
  .object({
    fieldName: yup.date().required("Date is required"),
  })
  .required();

interface Props {
  onSubmit: (data: any) => void;
}

const DatePicker: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Date Picker component usage example">
          Date Picker
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
              <FormField label="Date" errorText={get(errors, `fieldName.message`)}>
                <CDatePicker
                  control={control}
                  name="fieldName"
                  openCalendarAriaLabel={(selectedDate) =>
                    "Choose certificate expiry date" +
                    (selectedDate ? `, selected date is ${selectedDate}` : "")
                  }
                  placeholder="YYYY/MM/DD"
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default DatePicker;
