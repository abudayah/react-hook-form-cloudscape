import { useCallback } from 'react';
import { Control, Controller, FieldPath, FieldPathValue, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { NonCancelableCustomEvent, RadioGroup, RadioGroupProps } from '@cloudscape-design/components';

export interface CRadioGroupProps<T extends FieldValues> extends Omit<RadioGroupProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CRadioGroup = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  rules,
  defaultValue,
  shouldUnregister = false,
  ...props
}: CRadioGroupProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: (value: string) => void, e: NonCancelableCustomEvent<RadioGroupProps.ChangeDetail>) => {
      formOnChange(e.detail.value);
      onChange?.(e);
    },
    [onChange]
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange, value } }) => (
        <RadioGroup items={props.items} value={value} onChange={handleOnChange.bind(null, onChange)} {...props} />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CRadioGroup;
