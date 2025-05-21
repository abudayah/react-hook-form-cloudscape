import { Input, InputProps, NonCancelableCustomEvent } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export interface CInputProps<T extends FieldValues> extends Omit<InputProps, "value"> {
  name: FieldPath<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CInput = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CInputProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (event: NonCancelableCustomEvent<null>) => {
      onBlur?.(event);
    },
    [onBlur],
  );

  const handleOnChange = useCallback(
    (event: NonCancelableCustomEvent<InputProps.ChangeDetail>) => {
      onChange?.(event);
    },
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { ref, onBlur: formOnBlur, onChange: formOnChange, value } }) => (
        <Input
          ref={ref}
          name={name}
          value={value}
          onBlur={(e) => {
            formOnBlur();
            handleOnBlur(e);
          }}
          onChange={(e) => {
            formOnChange(e.detail.value);
            handleOnChange(e);
          }}
          {...props}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CInput;
