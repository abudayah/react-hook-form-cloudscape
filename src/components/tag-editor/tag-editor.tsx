import { useCallback } from 'react';
import { Controller, Control, Path, FieldValues, FieldPath, FieldPathValue, RegisterOptions } from 'react-hook-form';
import { NonCancelableCustomEvent, TagEditor, TagEditorProps } from '@cloudscape-design/components';

export interface CTagEditorProps<T extends FieldValues> extends Omit<TagEditorProps, 'tags'> {
  name: Path<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CTagEditor = <TFieldValues extends FieldValues>({
  name,
  control,
  onChange,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: CTagEditorProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (formOnChange: (tags: TagEditorProps.Tag[]) => void, e: NonCancelableCustomEvent<TagEditorProps.ChangeDetail>) => {
      formOnChange([...e.detail.tags]);
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
