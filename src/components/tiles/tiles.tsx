import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, Path, FieldPath, FieldPathValue, RegisterOptions } from 'react-hook-form';
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
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value } }) => (
        <Tiles onChange={handleOnChange.bind(null, onChange)} value={value} items={props.items} {...props} />
      )}
    />
  );
};

export default CTiles;
