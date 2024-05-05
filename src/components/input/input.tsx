import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { Input, InputProps, NonCancelableCustomEvent } from '@cloudscape-design/components';

export interface CInputProps<T extends FieldValues> extends Omit<InputProps, 'value'> {
  name: FieldPath<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CInput = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CInputProps<TFieldValues>): React.ReactElement => {
  const handleOnBlur = useCallback(
    (formOnBlur: Function, e: NonCancelableCustomEvent<any>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<InputProps.ChangeDetail>) => {
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
        <Input
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

export default CInput;
