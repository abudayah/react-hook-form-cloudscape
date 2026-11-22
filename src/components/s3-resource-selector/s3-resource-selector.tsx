import {
  NonCancelableCustomEvent,
  S3ResourceSelector,
  S3ResourceSelectorProps,
} from "@cloudscape-design/components";
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

export interface CS3ResourceSelectorProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<S3ResourceSelectorProps, "resource"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

export const CS3ResourceSelector = <
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
}: CS3ResourceSelectorProps<TFieldValues, TName>) => {
  const handleOnChange = useCallback(
    (
      formOnChange: (resource: S3ResourceSelectorProps.Resource) => void,
      e: NonCancelableCustomEvent<S3ResourceSelectorProps.ChangeDetail>,
    ) => {
      formOnChange(e.detail.resource);
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
          <S3ResourceSelector
            {...props}
            ref={ref}
            resource={value ?? { uri: "" }}
            onChange={(e) => handleOnChange(onChange, e)}
          />
        </FocusBoundary>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CS3ResourceSelector;
