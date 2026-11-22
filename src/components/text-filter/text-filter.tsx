import { NonCancelableCustomEvent, TextFilter, TextFilterProps } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

import { FocusBoundary } from "../../utils/focus-boundary";

export interface CTextFilterProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<TextFilterProps, "filteringText"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CTextFilter = <
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
}: CTextFilterProps<TFieldValues, TName>) => {
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
      render={({ field: { ref, onChange, onBlur, value } }) => (
        <FocusBoundary onBlur={onBlur}>
          <TextFilter
            ref={ref}
            filteringText={value as string}
            onChange={(e) => handleOnChange(onChange, e)}
            {...props}
          />
        </FocusBoundary>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CTextFilter;
