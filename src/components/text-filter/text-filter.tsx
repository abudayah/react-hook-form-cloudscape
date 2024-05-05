import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { NonCancelableCustomEvent, TextFilter, TextFilterProps } from '@cloudscape-design/components';

export interface CTextFilterProps<T extends FieldValues> extends Omit<TextFilterProps, 'filteringText'> {
  name: Path<T>;
  control?: Control<T>;
}

const CTextFilter = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  ...props
}: CTextFilterProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<TextFilterProps.ChangeDetail>) => {
      formOnChange(e.detail.filteringText);
      onChange?.(e);
    },
    [onChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, onChange, value } }) => (
        <TextFilter
          ref={ref}
          filteringText={value as string}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
    />
  );
};

export default CTextFilter;
