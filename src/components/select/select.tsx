import { NonCancelableCustomEvent, Select, SelectProps } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

import SelectUtils from "./utils";

export interface CSelectProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<SelectProps, "selectedOption"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CSelectProps<TFieldValues, TName>) => {
  const handleOnBlur = useCallback(
    (formOnBlur: () => void, e: NonCancelableCustomEvent<object>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur],
  );

  const handleOnChange = useCallback(
    (formOnChange: (value?: string) => void, e: NonCancelableCustomEvent<SelectProps.ChangeDetail>) => {
      formOnChange(e.detail.selectedOption.value ?? undefined);
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
        <Select
          ref={ref}
          selectedOption={SelectUtils.mapSelectedOptionWithOptions(props.options, value)}
          onBlur={handleOnBlur.bind(null, onBlur)}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CSelect;
