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

export interface CInputProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<InputProps, "value"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CInput = <
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
}: CInputProps<TFieldValues, TName>) => {
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
          {...props}
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
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CInput;
