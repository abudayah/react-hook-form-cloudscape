import {
  AttributeEditor,
  AttributeEditorProps,
  NonCancelableCustomEvent,
} from "@cloudscape-design/components";
import { useMemo } from "react";
import {
  ArrayPath,
  Control,
  FieldArray,
  FieldArrayPath,
  FieldValues,
  get,
  useFieldArray,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useFormState,
} from "react-hook-form";

export interface Definition<T> extends Omit<AttributeEditorProps.FieldDefinition<T>, "errorText"> {
  label: string;
  errorName?: (item: T, index: number) => string;
}

export interface CAttributeEditorProps<T extends FieldValues>
  extends Omit<AttributeEditorProps<T>, "items" | "onRemoveButtonClick" | "onAddButtonClick"> {
  name: FieldArrayPath<T>;
  control: Control<T>;
  definition: Definition<T>[];
  defaultValue?: FieldArray<T>;
  handleState?: boolean;
  onRemoveButtonClick?: (
    event: NonCancelableCustomEvent<AttributeEditorProps.RemoveButtonClickDetail>,
    remove: UseFieldArrayRemove,
  ) => void;
  onAddButtonClick?: (
    event: NonCancelableCustomEvent<object>,
    append: UseFieldArrayAppend<T, ArrayPath<T>>,
  ) => void;
}

const CAttributeEditor = <TFieldValues extends FieldValues>({
  name,
  control,
  definition,
  defaultValue,
  handleState = true,
  onAddButtonClick,
  onRemoveButtonClick,
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
        ...def,
        errorText: (item: TFieldValues, index: number) => {
          if (def.errorName) {
            const fieldName = def.errorName(item, index);
            return get(errors, `${fieldName}.message`) as string | undefined;
          }
          return def.label
            ? (get(errors, `${name}.${index}.${def.label.toString().toLowerCase()}.message`) as
                | string
                | undefined)
            : undefined;
        },
      })),
    [definition, errors, name],
  );

  return (
    <AttributeEditor
      definition={definitionWithError}
      items={(fields as TFieldValues[]) || []}
      onAddButtonClick={(e) => {
        if (handleState && defaultValue !== undefined) {
          append(defaultValue);
        }
        onAddButtonClick?.(e, append);
      }}
      onRemoveButtonClick={(e) => {
        if (handleState) {
          remove(e.detail.itemIndex);
        }
        onRemoveButtonClick?.(e, remove);
      }}
      {...props}
    />
  );
};

export default CAttributeEditor;
