import React, { useCallback } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { NonCancelableCustomEvent, Toggle, ToggleProps } from '@cloudscape-design/components';

export interface CToggleProps<T extends FieldValues> extends Omit<ToggleProps, 'checked'> {
  name: Path<T>;
  control: Control<T>;
}

const CToggle = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  ...props
}: CToggleProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<ToggleProps.ChangeDetail>) => {
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
        <Toggle ref={ref} name={name} checked={value} onChange={handleOnChange.bind(null, onChange)} {...props} />
      )}
    />
  );
};

export default CToggle;
