import { Checkbox, CheckboxProps, NonCancelableCustomEvent } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPathByValue,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export interface CCheckboxProps<
  T extends FieldValues,
  TName extends FieldPathByValue<T, boolean | undefined> = FieldPathByValue<T, boolean | undefined>,
> extends Omit<CheckboxProps, "checked"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CCheckbox = <
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
}: CCheckboxProps<TFieldValues, TName>) => {
  const handleOnChange = useCallback(
    (formOnChange: (checked: boolean) => void, e: NonCancelableCustomEvent<CheckboxProps.ChangeDetail>) => {
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
        <Checkbox
          {...props}
          ref={ref}
          checked={value}
          disabled={disabled || fieldDisabled}
          onBlur={(e) => {
            formOnBlur();
            onBlur?.(e);
          }}
          onChange={handleOnChange.bind(null, onChange)}
          name={name}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CCheckbox;
