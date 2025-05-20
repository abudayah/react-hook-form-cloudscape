import React, { useCallback } from 'react';
import { Control, Controller, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { PropertyFilterProps, NonCancelableCustomEvent, PropertyFilter } from '@cloudscape-design/components';

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
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value } }) => {
        return <PropertyFilter onChange={handleOnChange.bind(null, onChange)} query={value} {...props} />;
      }}
    />
  );
};

export default CPropertyFilter;
