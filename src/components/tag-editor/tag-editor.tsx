import { NonCancelableCustomEvent, TagEditor, TagEditorProps } from "@cloudscape-design/components";
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

export interface CTagEditorProps<T extends FieldValues> extends Omit<TagEditorProps, "tags"> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  shouldUnregister?: boolean;
}

const CTagEditor = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  defaultValue,
  rules,
  shouldUnregister = false,
  ...props
}: CTagEditorProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (
      formOnChange: (tags: TagEditorProps.Tag[]) => void,
      e: NonCancelableCustomEvent<TagEditorProps.ChangeDetail>,
    ) => {
      formOnChange([...e.detail.tags]);
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
        <TagEditor
          ref={ref}
          tags={(value as TagEditorProps.Tag[]) || []}
          onChange={(e) => {
            handleOnChange(onChange, e);
            onBlur();
          }}
          {...props}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CTagEditor;
