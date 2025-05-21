import { NonCancelableCustomEvent, TextFilter, TextFilterProps } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

export interface CTextFilterProps<T extends FieldValues> extends Omit<TextFilterProps, "filteringText"> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
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
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { ref, onChange, value } }) => (
        <TextFilter
          ref={ref}
          filteringText={value as string}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CTextFilter;
