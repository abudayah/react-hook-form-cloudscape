import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { NonCancelableCustomEvent, RadioGroup, RadioGroupProps } from '@cloudscape-design/components';

export interface CRadioGroupProps<T extends FieldValues> extends Omit<RadioGroupProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
}

const CRadioGroup = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  ...props
}: CRadioGroupProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<RadioGroupProps.ChangeDetail>) => {
      formOnChange(e.detail.value);
      onChange?.(e);
    },
    [onChange]
  );
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup onChange={handleOnChange.bind(null, onChange)} value={value} items={props.items} {...props} />
      )}
    />
  );
};

export default CRadioGroup;
