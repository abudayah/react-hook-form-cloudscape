import { DateRangePickerProps, DateRangePicker, NonCancelableCustomEvent } from '@cloudscape-design/components';
import React, { useCallback } from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';

export interface CDateRangePickerProps<T extends FieldValues> extends Omit<DateRangePickerProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
}

const CDateRangePicker = <TFieldValues extends FieldValues>({
  name,
  control,
  onBlur,
  onChange,
  ...props
}: CDateRangePickerProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (formOnBlur: Function, e: NonCancelableCustomEvent<any>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<DateRangePickerProps.ChangeDetail>) => {
      formOnChange(e.detail.value);
      onChange?.(e);
    },
    [onChange]
  );
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, onChange, onBlur, value } }) => (
        <DateRangePicker
          ref={ref}
          value={value as DateRangePickerProps.Value}
          onBlur={handleOnBlur.bind(null, onBlur)}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
    />
  );
};

export default CDateRangePicker;
