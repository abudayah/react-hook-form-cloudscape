import { useCallback } from 'react';
import { Controller, Control, FieldValues, Path, FieldPath, FieldPathValue, RegisterOptions } from 'react-hook-form';
import { CodeEditor, CodeEditorProps, NonCancelableCustomEvent } from '@cloudscape-design/components';

export interface CCodeEditorProps<T extends FieldValues> extends Omit<CodeEditorProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
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
    [onChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value } }) => (
        <CodeEditor value={value || ''} onChange={handleOnChange.bind(null, onChange)} {...props} />
      )}
    />
  );
};

export default CCodeEditor;
