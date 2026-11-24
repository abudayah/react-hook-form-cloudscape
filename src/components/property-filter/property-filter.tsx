import { NonCancelableCustomEvent } from "@cloudscape-design/components/interfaces";
import PropertyFilter, { PropertyFilterProps } from "@cloudscape-design/components/property-filter";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export interface CPropertyFilterProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<PropertyFilterProps, "query" | "onChange"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  onChange?: (event: NonCancelableCustomEvent<PropertyFilterProps.Query>) => void;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

export const CPropertyFilter = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onChange,
  ...props
}: CPropertyFilterProps<TFieldValues, TName>) => {
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
            {...props}
            ref={ref}
            query={value ?? { tokens: [], operation: "and" }}
            onChange={handleOnChange.bind(null, onChange)}
          />
        </div>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CPropertyFilter;
