import { useCallback } from 'react';
import { Control, Controller, FieldPath, FieldPathValue, FieldValues, RegisterOptions } from 'react-hook-form';
import { NonCancelableCustomEvent, PropertyFilter, PropertyFilterProps } from '@cloudscape-design/components';

export interface ControlledPropertyFilterProps<T extends FieldValues>
  extends Omit<PropertyFilterProps, 'query' | 'onChange'> {
  name: FieldPath<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

export const CPropertyFilter = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  ...props
}: ControlledPropertyFilterProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (
      formOnChange: (query: PropertyFilterProps.Query) => void,
      e: NonCancelableCustomEvent<PropertyFilterProps.Query>
    ) => {
      formOnChange(e.detail);
    },
    []
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange, value } }) => {
        return <PropertyFilter query={value} onChange={handleOnChange.bind(null, onChange)} {...props} />;
      }}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CPropertyFilter;
