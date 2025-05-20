import { useCallback } from 'react';
import { Controller, Control, FieldValues, Path, FieldPath, FieldPathValue, RegisterOptions } from 'react-hook-form';
import { NonCancelableCustomEvent, TextFilter, TextFilterProps } from '@cloudscape-design/components';

export interface CTextFilterProps<T extends FieldValues> extends Omit<TextFilterProps, 'filteringText'> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CTextFilter = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  onChange,
  ...props
}: CTextFilterProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: (value: string) => void, e: NonCancelableCustomEvent<TextFilterProps.ChangeDetail>) => {
      formOnChange(e.detail.filteringText);
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
