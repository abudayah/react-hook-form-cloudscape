import { CodeEditor, CodeEditorProps, NonCancelableCustomEvent } from "@cloudscape-design/components";
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

export interface CCodeEditorProps<T extends FieldValues> extends Omit<CodeEditorProps, "value"> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CCodeEditor = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  defaultValue,
  rules,
  shouldUnregister = false,
  ...props
}: CCodeEditorProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: (value: string) => void, e: NonCancelableCustomEvent<CodeEditorProps.ChangeDetail>) => {
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
      render={({ field: { onChange, value } }) => (
        <CodeEditor value={value || ""} onChange={handleOnChange.bind(null, onChange)} {...props} />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CCodeEditor;
