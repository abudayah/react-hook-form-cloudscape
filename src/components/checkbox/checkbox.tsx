import { Checkbox, CheckboxProps, NonCancelableCustomEvent } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathByValue,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export interface CCheckboxProps<T extends FieldValues, TName extends FieldPathByValue<T, boolean | undefined> = FieldPathByValue<T, boolean | undefined>> extends Omit<CheckboxProps, "checked"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CCheckbox = <TFieldValues extends FieldValues, TName extends FieldPathByValue<TFieldValues, boolean | undefined> = FieldPathByValue<TFieldValues, boolean | undefined>>({
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
      disabled={disabled}
      render={({ field: { ref, onChange, onBlur: formOnBlur, value, disabled: fieldDisabled } }) => (
        <Checkbox
          ref={ref}
          checked={value}
          disabled={fieldDisabled}
          onBlur={(e) => {
            formOnBlur();
            onBlur?.(e);
          }}
          onChange={handleOnChange.bind(null, onChange)}
          name={name}
          {...props}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CCheckbox;
