import { NonCancelableCustomEvent, OptionList, OptionListProps } from "@cloudscape-design/components";
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

export interface COptionListProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<OptionListProps, "selectedOptions"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const COptionList = <
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
}: COptionListProps<TFieldValues, TName>) => {
  const handleOnChange = useCallback(
    (
      formOnChange: (value: OptionListProps["selectedOptions"]) => void,
      event: NonCancelableCustomEvent<OptionListProps.ChangeDetail>,
    ) => {
      formOnChange(event.detail.selectedOptions);
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
          <OptionList
            {...props}
            ref={ref}
            selectedOptions={value}
            onChange={(event) => handleOnChange(formOnChange, event)}
          />
        </FocusBoundary>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default COptionList;
