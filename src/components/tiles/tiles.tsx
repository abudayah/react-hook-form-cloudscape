import { useCallback } from 'react';
import { Control, Controller, FieldPath, FieldPathValue, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { NonCancelableCustomEvent, Tiles, TilesProps } from '@cloudscape-design/components';

export interface CTilesProps<T extends FieldValues> extends Omit<TilesProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CTiles = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  defaultValue,
  rules,
  shouldUnregister = false,
  ...props
}: CTilesProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: (value: string) => void, e: NonCancelableCustomEvent<TilesProps.ChangeDetail>) => {
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
        <Tiles items={props.items} value={value} onChange={handleOnChange.bind(null, onChange)} {...props} />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CTiles;
