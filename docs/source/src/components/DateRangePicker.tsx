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
import { CDateRangePicker } from "react-hook-form-cloudscape";
import { DateRangePickerI18nStrings } from "../i18n";

const schema = yup.object({
  fieldName: yup.object().required(),
});

interface Props {
  onSubmit: (data: any) => void;
}

const DateRangePicker: React.FC<Props> = ({ onSubmit }) => {
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
        <Header variant="h1" description="Date Range Picker component usage example">
          Date Range Picker
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
              <FormField label="Date Range" errorText={get(errors, `fieldName.message`)}>
                <CDateRangePicker
                  name="fieldName"
                  control={control}
                  relativeOptions={[
                    {
                      key: "previous-5-minutes",
                      amount: 5,
                      unit: "minute",
                      type: "relative",
                    },
                    {
                      key: "previous-30-minutes",
                      amount: 30,
                      unit: "minute",
                      type: "relative",
                    },
                    {
                      key: "previous-1-hour",
                      amount: 1,
                      unit: "hour",
                      type: "relative",
                    },
                    {
                      key: "previous-6-hours",
                      amount: 6,
                      unit: "hour",
                      type: "relative",
                    },
                  ]}
                  i18nStrings={DateRangePickerI18nStrings}
                  isValidRange={(range) => {
                    if (range) {
                      if (range.type === "absolute") {
                        const [startDateWithoutTime] = range.startDate.split("T");
                        const [endDateWithoutTime] = range.endDate.split("T");
                        if (!startDateWithoutTime || !endDateWithoutTime) {
                          return {
                            valid: false,
                            errorMessage:
                              "The selected date range is incomplete. Select a start and end date for the date range.",
                          };
                        }
                        if (new Date(range.startDate).getTime() - new Date(range.endDate).getTime() > 0) {
                          return {
                            valid: false,
                            errorMessage:
                              "The selected date range is invalid. The start date must be before the end date.",
                          };
                        }
                      }
                      return { valid: true };
                    } else {
                      return { valid: true };
                    }
                  }}
                  placeholder="Filter by a date and time range"
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default DateRangePicker;
