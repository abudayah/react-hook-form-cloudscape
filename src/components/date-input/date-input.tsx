import DateInput, { DateInputProps } from "@cloudscape-design/components/date-input";
import { InputProps } from "@cloudscape-design/components/input";
import { NonCancelableCustomEvent } from "@cloudscape-design/components/interfaces";
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

export interface CDateInputProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<DateInputProps, "value"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CDateInput = <
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
}: CDateInputProps<TFieldValues, TName>) => {
  const handleOnChange = useCallback(
    (formOnChange: (value: string) => void, event: NonCancelableCustomEvent<InputProps.ChangeDetail>) => {
      formOnChange(event.detail.value);
      onChange?.(event);
    },
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { ref, onChange: formOnChange, onBlur, value } }) => (
        <FocusBoundary onBlur={onBlur}>
          <DateInput
            {...props}
            ref={ref}
            name={name}
            value={value ?? ""}
            onChange={(event) => handleOnChange(formOnChange, event)}
          />
        </FocusBoundary>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CDateInput;
