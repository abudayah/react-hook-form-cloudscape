import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, FieldPathValue, RegisterOptions, FieldPath } from 'react-hook-form';
import { DatePicker, DatePickerProps, NonCancelableCustomEvent } from '@cloudscape-design/components';

export interface CDatePickerProps<T extends FieldValues> extends Omit<DatePickerProps, 'value'> {
  name: FieldPath<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
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
    (formOnBlur: Function, e: NonCancelableCustomEvent<any>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<DatePickerProps.ChangeDetail>) => {
      formOnChange(e.detail.value);
      onChange?.(e);
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
      render={({ field: { ref, onChange, onBlur, value } }) => (
        <DatePicker
          ref={ref}
          name={name}
          value={value}
          onBlur={handleOnBlur.bind(null, onBlur)}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
    />
  );
};

export default CDatePicker;
