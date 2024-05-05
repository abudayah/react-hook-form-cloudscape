import React, { useCallback } from 'react';
import { NonCancelableCustomEvent, Textarea, TextareaProps } from '@cloudscape-design/components';
import { Controller, Control, Path, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';

export interface CTextareaProps<T extends FieldValues> extends Omit<TextareaProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CTextarea = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CTextareaProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (formOnBlur: Function, e: NonCancelableCustomEvent<any>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<TextareaProps.ChangeDetail>) => {
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
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Textarea
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

export default CTextarea;
