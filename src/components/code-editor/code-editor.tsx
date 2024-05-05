import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { CodeEditor, CodeEditorProps, NonCancelableCustomEvent } from '@cloudscape-design/components';

export interface CCodeEditorProps<T extends FieldValues> extends Omit<CodeEditorProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
}

const CCodeEditor = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  ...props
}: CCodeEditorProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<CodeEditorProps.ChangeDetail>) => {
      formOnChange(e.detail.value);
      onChange?.(e);
    },
    [onChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <CodeEditor value={value || ''} onChange={handleOnChange.bind(null, onChange)} {...props} />
      )}
    />
  );
};

export default CCodeEditor;
