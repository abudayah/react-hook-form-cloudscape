import React, { useCallback } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Checkbox, CheckboxProps, NonCancelableCustomEvent } from '@cloudscape-design/components';

export interface CCheckboxProps<T extends FieldValues> extends Omit<CheckboxProps, 'checked'> {
  name: Path<T>;
  control: Control<T>;
}

const CCheckbox = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  ...props
}: CCheckboxProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<CheckboxProps.ChangeDetail>) => {
      formOnChange(e.detail.checked);
      onChange?.(e);
    },
    [onChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, onChange, value = false } }) => (
        <Checkbox ref={ref} onChange={handleOnChange.bind(null, onChange)} checked={value} {...props} />
      )}
    />
  );
};

export default CCheckbox;
