import { useCallback } from 'react';
import { Controller, Control, FieldValues, Path, FieldPath, FieldPathValue, RegisterOptions } from 'react-hook-form';
import { NonCancelableCustomEvent, TimeInput, TimeInputProps } from '@cloudscape-design/components';

export interface CTimeInputProps<T extends FieldValues> extends Omit<TimeInputProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CTimeInput = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CTimeInputProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (formOnBlur: () => void, e: NonCancelableCustomEvent<null>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (formOnChange: (value: string) => void, e: NonCancelableCustomEvent<TimeInputProps.ChangeDetail>) => {
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
        <TimeInput
          name={name}
          ref={ref}
          value={value as string}
          onBlur={handleOnBlur.bind(null, onBlur)}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
    />
  );
};

export default CTimeInput;
