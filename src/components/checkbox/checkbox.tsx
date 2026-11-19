import { Checkbox, CheckboxProps, NonCancelableCustomEvent } from "@cloudscape-design/components";
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

export interface CCheckboxProps<T extends FieldValues> extends Omit<CheckboxProps, "checked"> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CCheckbox = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onChange,
  onBlur,
  disabled,
  ...props
}: CCheckboxProps<TFieldValues>) => {
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
            formOnBlur(e);
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
