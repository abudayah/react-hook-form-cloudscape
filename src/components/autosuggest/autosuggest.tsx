import Autosuggest, { AutosuggestProps } from "@cloudscape-design/components/autosuggest";
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

export interface CAutosuggestProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<AutosuggestProps, "value"> {
  name: TName;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

export const CAutosuggest = <T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CAutosuggestProps<T, TName>) => {
  const handleOnBlur = useCallback(
    (formOnBlur: () => void, event: NonCancelableCustomEvent<null>) => {
      formOnBlur();
      onBlur?.(event);
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
          {...props}
          ref={ref}
          name={name}
          value={(value as string) || ""}
          onBlur={handleOnBlur.bind(null, onBlur)}
          onChange={handleOnChange.bind(null, onChange)}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CAutosuggest;
