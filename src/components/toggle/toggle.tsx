import { useCallback } from 'react';
import { Control, Controller, FieldPath, FieldPathValue, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { NonCancelableCustomEvent, Toggle, ToggleProps } from '@cloudscape-design/components';

export interface CToggleProps<T extends FieldValues> extends Omit<ToggleProps, 'checked'> {
  name: Path<T>;
  control: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CToggle = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onChange,
  ...props
}: CToggleProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: (value: boolean) => void, e: NonCancelableCustomEvent<ToggleProps.ChangeDetail>) => {
      formOnChange(e.detail.checked);
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
      render={({ field: { ref, onChange, value = false } }) => (
        <Toggle ref={ref} name={name} checked={value} onChange={handleOnChange.bind(null, onChange)} {...props} />
      )}
    />
  );
};

export default CToggle;
