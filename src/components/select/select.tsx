import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { NonCancelableCustomEvent, Select, SelectProps } from '@cloudscape-design/components';
import SelectUtils from './utils';

export interface CSelectProps<T extends FieldValues> extends Omit<SelectProps, 'selectedOption'> {
  name: FieldPath<T>;
  control: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CSelect = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CSelectProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (formOnBlur: () => void, e: NonCancelableCustomEvent<object>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (formOnChange: (value?: string) => void, e: NonCancelableCustomEvent<SelectProps.ChangeDetail>) => {
      formOnChange(e.detail.selectedOption.value);
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
        <Select
          ref={ref}
          selectedOption={SelectUtils.mapSelectedOptionWithOptions(props.options, value)}
          onBlur={handleOnBlur.bind(null, onBlur)}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
    />
  );
};

export default CSelect;