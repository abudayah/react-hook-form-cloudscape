import { NonCancelableCustomEvent } from "@cloudscape-design/components/interfaces";
import SegmentedControl, { SegmentedControlProps } from "@cloudscape-design/components/segmented-control";
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

export interface CSegmentedControlProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<SegmentedControlProps, "selectedId"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CSegmentedControl = <
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
}: CSegmentedControlProps<TFieldValues, TName>) => {
  const handleOnChange = useCallback(
    (
      formOnChange: (value: string) => void,
      event: NonCancelableCustomEvent<SegmentedControlProps.ChangeDetail>,
    ) => {
      formOnChange(event.detail.selectedId);
      onChange?.(event);
    },
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange: formOnChange, onBlur, value } }) => (
        <FocusBoundary onBlur={onBlur}>
          <SegmentedControl
            {...props}
            selectedId={value}
            onChange={(event) => handleOnChange(formOnChange, event)}
          />
        </FocusBoundary>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CSegmentedControl;
