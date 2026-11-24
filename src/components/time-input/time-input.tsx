import { NonCancelableCustomEvent } from "@cloudscape-design/components/interfaces";
import TimeInput, { TimeInputProps } from "@cloudscape-design/components/time-input";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export interface CTimeInputProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<TimeInputProps, "value"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CTimeInput = <
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
}: CTimeInputProps<TFieldValues, TName>) => {
  const handleOnBlur = useCallback(
    (formOnBlur: () => void, e: NonCancelableCustomEvent<null>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur],
  );

  const handleOnChange = useCallback(
    (formOnChange: (value: string) => void, e: NonCancelableCustomEvent<TimeInputProps.ChangeDetail>) => {
      formOnChange(e.detail.value);
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
        <TimeInput
          {...props}
          ref={ref}
          name={name}
          value={(value as string) ?? ""}
          onBlur={handleOnBlur.bind(null, onBlur)}
          onChange={handleOnChange.bind(null, onChange)}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CTimeInput;
