import { useCallback } from 'react';
import { Controller, Control, FieldValues, Path, FieldPath, FieldPathValue, RegisterOptions } from 'react-hook-form';
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
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value } }) => (
        <RadioGroup onChange={handleOnChange.bind(null, onChange)} value={value} items={props.items} {...props} />
      )}
    />
  );
};

export default CRadioGroup;
