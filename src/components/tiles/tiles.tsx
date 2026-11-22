import { NonCancelableCustomEvent, Tiles, TilesProps } from "@cloudscape-design/components";
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

export interface CTilesProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<TilesProps, "value"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CTiles = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  onChange,
  defaultValue,
  rules,
  shouldUnregister = false,
  ...props
}: CTilesProps<TFieldValues, TName>) => {
  const handleOnChange = useCallback(
    (formOnChange: (value: string) => void, e: NonCancelableCustomEvent<TilesProps.ChangeDetail>) => {
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
          <Tiles ref={ref} value={value} onChange={(e) => handleOnChange(onChange, e)} {...props} />
        </FocusBoundary>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CTiles;
