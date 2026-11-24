import { NonCancelableCustomEvent } from "@cloudscape-design/components/interfaces";
import RadioGroup, { RadioGroupProps } from "@cloudscape-design/components/radio-group";
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

export interface CRadioGroupProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<RadioGroupProps, "value"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CRadioGroup = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  onChange,
  rules,
  defaultValue,
  shouldUnregister = false,
  ...props
}: CRadioGroupProps<TFieldValues, TName>) => {
  const handleOnChange = useCallback(
    (formOnChange: (value: string) => void, e: NonCancelableCustomEvent<RadioGroupProps.ChangeDetail>) => {
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
        <FocusBoundary onBlur={onBlur}>
          <RadioGroup {...props} ref={ref} value={value} onChange={(e) => handleOnChange(onChange, e)} />
        </FocusBoundary>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CRadioGroup;
