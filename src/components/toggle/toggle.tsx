import { NonCancelableCustomEvent, Toggle, ToggleProps } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPathByValue,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export interface CToggleProps<
  T extends FieldValues,
  TName extends FieldPathByValue<T, boolean | undefined> = FieldPathByValue<T, boolean | undefined>,
> extends Omit<ToggleProps, "checked"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CToggle = <
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, boolean | undefined> = FieldPathByValue<
    TFieldValues,
    boolean | undefined
  >,
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onChange,
  onBlur,
  disabled,
  ...props
}: CToggleProps<TFieldValues, TName>) => {
  const handleOnChange = useCallback(
    (formOnChange: (value: boolean) => void, e: NonCancelableCustomEvent<ToggleProps.ChangeDetail>) => {
      formOnChange(e.detail.checked);
      onChange?.(e);
    },
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { ref, onChange, onBlur: formOnBlur, value = false, disabled: fieldDisabled } }) => (
        <Toggle
          ref={ref}
          checked={value}
          disabled={disabled || fieldDisabled}
          name={name}
          onBlur={(e) => {
            formOnBlur();
            onBlur?.(e);
          }}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CToggle;
