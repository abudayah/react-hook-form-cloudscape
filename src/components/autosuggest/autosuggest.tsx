import {
  Autosuggest,
  AutosuggestProps,
  NonCancelableCustomEvent,
} from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

export interface CAutosuggestProps<T extends FieldValues> extends Omit<AutosuggestProps, "value"> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  shouldUnregister?: boolean;
}

export const CAutosuggest = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CAutosuggestProps<T>) => {
  const handleOnBlur = useCallback(
    (
      formOnBlur: (value: string) => void,
      event: NonCancelableCustomEvent<{ value: string } | null>,
    ) => {
      if (event.detail?.value) {
        formOnBlur(event.detail.value);
      }
      onBlur?.(event as NonCancelableCustomEvent<null>);
    },
    [onBlur],
  );

  const handleOnChange = useCallback(
    (
      formOnChange: (value: string) => void,
      event: NonCancelableCustomEvent<AutosuggestProps.ChangeDetail>,
    ) => {
      formOnChange(event.detail.value);
      onChange?.(event as unknown as NonCancelableCustomEvent<AutosuggestProps.ChangeDetail>);
    },
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { ref, onBlur, onChange, value } }) => (
        <Autosuggest
          ref={ref}
          name={name}
          value={(value as string) || ""}
          onBlur={handleOnBlur.bind(null, onBlur)}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CAutosuggest;
