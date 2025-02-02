import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, FieldPathValue, RegisterOptions, FieldPath } from 'react-hook-form';
import { DatePicker, DatePickerProps, NonCancelableCustomEvent } from '@cloudscape-design/components';

export interface CDatePickerProps<T extends FieldValues> extends Omit<DatePickerProps, 'value'> {
  name: FieldPath<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
  onBlur?: DatePickerProps['onBlur'];
  onChange?: DatePickerProps['onChange'];
}

const CDatePicker = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CDatePickerProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (event: NonCancelableCustomEvent<null>) => {
      onBlur?.(event);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (event: NonCancelableCustomEvent<DatePickerProps.ChangeDetail>) => {
      onChange?.(event);
    },
    [onChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { ref, onChange: formOnChange, onBlur: formOnBlur, value } }) => (
        <DatePicker
          ref={ref}
          name={name}
          value={value}
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
    />
  );
};

export default CDatePicker;
