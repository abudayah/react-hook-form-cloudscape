import { NonCancelableCustomEvent, PropertyFilter, PropertyFilterProps } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export interface CPropertyFilterProps<T extends FieldValues> extends Omit<PropertyFilterProps, "query"> {
  name: FieldPath<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

export const CPropertyFilter = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onChange,
  ...props
}: CPropertyFilterProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (
      formOnChange: (query: PropertyFilterProps.Query) => void,
      e: NonCancelableCustomEvent<PropertyFilterProps.Query>,
    ) => {
      formOnChange(e.detail);
      onChange?.(e);
    },
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { ref, onChange, onBlur, value } }) => (
        <div
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              onBlur();
            }
          }}
        >
          <PropertyFilter
            ref={ref}
            query={value ?? { tokens: [], operation: "and" }}
            onChange={handleOnChange.bind(null, onChange)}
            {...props}
          />
        </div>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CPropertyFilter;
