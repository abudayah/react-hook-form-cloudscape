import {
  DateRangePicker,
  DateRangePickerProps,
  NonCancelableCustomEvent,
} from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

export interface CDateRangePickerProps<T extends FieldValues>
  extends Omit<DateRangePickerProps, "value"> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  shouldUnregister?: boolean;
}

const CDateRangePicker = <TFieldValues extends FieldValues>({
  name,
  control,
  onBlur,
  onChange,
  defaultValue,
  rules,
  shouldUnregister = false,
  ...props
}: CDateRangePickerProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (event: NonCancelableCustomEvent<null>) => {
      onBlur?.(event);
    },
    [onBlur],
  );

  const handleOnChange = useCallback(
    (event: NonCancelableCustomEvent<DateRangePickerProps.ChangeDetail>) => {
      onChange?.(event);
    },
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { ref, onBlur: formOnBlur, onChange: formOnChange, value } }) => (
        <DateRangePicker
          ref={ref}
          value={value as DateRangePickerProps.Value}
          onBlur={(e) => {
            formOnBlur();
            handleOnBlur(e);
          }}
          onChange={(e) => {
            formOnChange(e.detail.value);
            handleOnChange(e);
          }}
          {...props}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CDateRangePicker;
