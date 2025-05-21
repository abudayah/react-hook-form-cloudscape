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

export interface CSliderProps<T extends FieldValues> extends Omit<SliderProps, "value" | "onChange"> {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  shouldUnregister?: boolean;
  onChange?: (event: NonCancelableCustomEvent<SliderProps.ChangeDetail>) => void;
}

const CSlider = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onChange,
  ...props
}: CSliderProps<TFieldValues>) => {
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
      render={({ field: { onChange: formOnChange, value } }) => (
        <Slider
          value={value}
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

export default CSlider;
