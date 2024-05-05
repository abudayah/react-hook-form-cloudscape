import React, { ReactElement } from 'react';
import Input, { InputProps } from '@cloudscape-design/components/input';
import { Controller, Control, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';

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
  rules,
  defaultValue,
  shouldUnregister = false,
  ...props
}: CInputProps<TFieldValues>): ReactElement => {
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
          onBlur={onBlur}
          onChange={(e: any) => onChange(e.detail.value)}
          {...props}
        />
      )}
    />
  );
};

export default CInput;
