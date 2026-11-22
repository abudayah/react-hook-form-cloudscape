import { NonCancelableCustomEvent, Slider, SliderProps } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export interface CSliderProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<SliderProps, "value" | "onChange"> {
  name: TName;
  control?: Control<T>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  defaultValue?: FieldPathValue<T, TName>;
  shouldUnregister?: boolean;
  onChange?: (event: NonCancelableCustomEvent<SliderProps.ChangeDetail>) => void;
}

const CSlider = <
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
}: CSliderProps<TFieldValues, TName>) => {
  const handleOnChange = useCallback(
    (event: NonCancelableCustomEvent<SliderProps.ChangeDetail>) => {
      onChange?.(event);
    },
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange: formOnChange, onBlur: formOnBlur, value } }) => (
        <Slider
          value={value}
          onChange={(e) => {
            formOnChange(e.detail.value);
            handleOnChange(e);
            formOnBlur();
          }}
          {...props}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CSlider;
