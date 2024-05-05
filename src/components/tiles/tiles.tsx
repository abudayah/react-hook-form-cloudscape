import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { NonCancelableCustomEvent, Tiles, TilesProps } from '@cloudscape-design/components';

export interface CTilesProps<T extends FieldValues> extends Omit<TilesProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
}

const CTiles = <TFieldValues extends FieldValues>({ name, control, onChange, ...props }: CTilesProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<TilesProps.ChangeDetail>) => {
      formOnChange(e.detail.value);
      onChange?.(e);
    },
    [onChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Tiles onChange={handleOnChange.bind(null, onChange)} value={value} items={props.items} {...props} />
      )}
    />
  );
};

export default CTiles;
