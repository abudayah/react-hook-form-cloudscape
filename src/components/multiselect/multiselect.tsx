import { NonCancelableCustomEvent } from "@cloudscape-design/components/interfaces";
import Multiselect, { MultiselectProps } from "@cloudscape-design/components/multiselect";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

import { mapSelectedOptionsWithOptions, transformMultiselectOptionsToArray } from "./utils.js";

export interface CMultiselectProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<MultiselectProps, "selectedOptions"> {
  name: TName;
  control?: Control<T>;
  options?: MultiselectProps.Options;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CMultiselect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  options,
  defaultValue,
  rules,
  onBlur,
  onChange,
  shouldUnregister = false,
  ...props
}: CMultiselectProps<TFieldValues, TName>) => {
  const handleOnBlur = useCallback(
    (formOnBlur: () => void, e: NonCancelableCustomEvent<object>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur],
  );

  const handleOnChange = useCallback(
    (
      formOnChange: (value: unknown) => void,
      e: NonCancelableCustomEvent<MultiselectProps.MultiselectChangeDetail>,
    ) => {
      formOnChange(transformMultiselectOptionsToArray(e.detail.selectedOptions));
      onChange?.(e);
    },
    [onChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { ref, onChange, onBlur, value } }) => {
        return (
          <Multiselect
            {...props}
            ref={ref}
            options={options}
            selectedOptions={mapSelectedOptionsWithOptions(options, value)}
            onBlur={handleOnBlur.bind(null, onBlur)}
            onChange={handleOnChange.bind(null, onChange)}
          />
        );
      }}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CMultiselect;
