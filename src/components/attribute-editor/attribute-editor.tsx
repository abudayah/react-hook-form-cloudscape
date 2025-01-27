import React, { useMemo } from 'react';
import { AttributeEditor, AttributeEditorProps, NonCancelableCustomEvent } from '@cloudscape-design/components';
import {
  Control,
  FieldArray,
  FieldArrayPath,
  useFieldArray,
  useFormState,
  get,
  FieldValues,
  UseFieldArrayRemove,
  UseFieldArrayAppend,
  ArrayPath,
} from 'react-hook-form';

export interface Definition<T> extends Omit<AttributeEditorProps.FieldDefinition<T>, 'errorText'> {
  // Label is mandatory to find the error path
  label: string;
  errorName?: (item: T, index: number) => string;
}

export interface CAttributeEditorProps<T extends FieldValues>
  extends Omit<AttributeEditorProps<T>, 'items' | 'onRemoveButtonClick' | 'onAddButtonClick'> {
  name: FieldArrayPath<T>;
  control: Control<T>;
  definition: Definition<T>[];
  defaultValue: FieldArray<T>;
  handleState?: boolean;
  onRemoveButtonClick?: (
    event: NonCancelableCustomEvent<AttributeEditorProps.RemoveButtonClickDetail>,
    remove: UseFieldArrayRemove
  ) => void;
  onAddButtonClick?: (event: NonCancelableCustomEvent<object>, append: UseFieldArrayAppend<T, ArrayPath<T>>) => void;
}

const CAttributeEditor = <TFieldValues extends FieldValues>({
  name,
  control,
  onRemoveButtonClick,
  onAddButtonClick,
  definition,
  defaultValue,
  handleState = true,
  ...props
}: CAttributeEditorProps<TFieldValues>) => {
  const { errors } = useFormState({ control });
  const { fields, append, remove } = useFieldArray<TFieldValues>({
    name,
    control,
  });

  const definitionWithError = useMemo(
    () =>
      definition.map((def) => ({
        errorText: (_item: TFieldValues, index: number) =>
          def.label &&
          (get(errors, `${name}.${index}.${def.label.toString().toLowerCase()}.message`) as string | undefined),
        ...def,
      })),
    [definition, errors, name]
  );

  return (
    <AttributeEditor
      definition={definitionWithError}
      items={(fields as TFieldValues[]) || []}
      onRemoveButtonClick={(e) => {
        if (handleState) {
          remove(e.detail.itemIndex);
        }
        onRemoveButtonClick?.(e, remove);
      }}
      onAddButtonClick={(e) => {
        if (handleState) {
          append(defaultValue);
        }
        onAddButtonClick?.(e, append);
      }}
      {...props}
    />
  );
};

export default CAttributeEditor;
