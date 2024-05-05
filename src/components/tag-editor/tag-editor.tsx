import React, { useCallback } from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';
import { NonCancelableCustomEvent, TagEditor, TagEditorProps } from '@cloudscape-design/components';

export interface CTagEditorProps<T extends FieldValues> extends Omit<TagEditorProps, 'tags'> {
  name: Path<T>;
  control?: Control<T>;
}

const CTagEditor = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  ...props
}: CTagEditorProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: Function, e: NonCancelableCustomEvent<TagEditorProps.ChangeDetail>) => {
      formOnChange(e.detail.tags);
      onChange?.(e);
    },
    [onChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, onChange, value } }) => (
        <TagEditor
          ref={ref}
          tags={(value as TagEditorProps.Tag[]) || []}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
    />
  );
};

export default CTagEditor;
