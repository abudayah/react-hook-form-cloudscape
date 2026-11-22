import {
  AttributeEditor,
  AttributeEditorProps,
  NonCancelableCustomEvent,
} from "@cloudscape-design/components";
import { useMemo } from "react";
import {
  Control,
  FieldArray,
  FieldArrayPath,
  FieldValues,
  get,
  Path,
  useFieldArray,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useFormState,
} from "react-hook-form";

/**
 * A field definition for one row in the named field array.
 *
 * `key` is the actual row property name used to locate validation errors.
 * Prefer it to `label`, which is presentation text and may be localized.
 */
export interface Definition<TRow> extends Omit<AttributeEditorProps.FieldDefinition<TRow>, "errorText"> {
  label: string;
  key?: keyof TRow & string;
  errorName?: (item: TRow, index: number) => string;
}

export interface CAttributeEditorProps<
  T extends FieldValues,
  TName extends FieldArrayPath<T> = FieldArrayPath<T>,
> extends Omit<
    AttributeEditorProps<FieldArray<T, TName>>,
    "items" | "onRemoveButtonClick" | "onAddButtonClick"
  > {
  name: TName;
  control: Control<T>;
  definition: Definition<FieldArray<T, TName>>[];
  defaultValue?: FieldArray<T, TName>;
  handleState?: boolean;
  onRemoveButtonClick?: (
    event: NonCancelableCustomEvent<AttributeEditorProps.RemoveButtonClickDetail>,
    remove: UseFieldArrayRemove,
  ) => void;
  onAddButtonClick?: (event: NonCancelableCustomEvent<object>, append: UseFieldArrayAppend<T, TName>) => void;
}

const CAttributeEditor = <
  TFieldValues extends FieldValues,
  TName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
>({
  name,
  control,
  definition,
  defaultValue,
  handleState = true,
  onAddButtonClick,
  onRemoveButtonClick,
  ...props
}: CAttributeEditorProps<TFieldValues, TName>) => {
  const { errors } = useFormState({ control, name: name as Path<TFieldValues> });
  const { fields, append, remove } = useFieldArray<TFieldValues, TName>({
    name,
    control,
  });

  const definitionWithError = useMemo(
    () =>
      definition.map(({ key, ...def }) => ({
        ...def,
        errorText: (item: FieldArray<TFieldValues, TName>, index: number) => {
          const fieldName = def.errorName?.(item, index) ?? (key ? `${name}.${index}.${key}` : undefined);
          if (
            (globalThis as { process?: { env?: { NODE_ENV?: string } } }).process?.env?.NODE_ENV !==
              "production" &&
            !fieldName
          ) {
            console.warn(
              `CAttributeEditor "${name}" needs a "key" or "errorName" on every definition to display validation errors.`,
            );
          }
          return fieldName ? (get(errors, `${fieldName}.message`) as string | undefined) : undefined;
        },
      })),
    [definition, errors, name],
  );

  return (
    <AttributeEditor
      {...props}
      definition={definitionWithError}
      items={fields as unknown as FieldArray<TFieldValues, TName>[]}
      onAddButtonClick={(event) => {
        if (handleState) {
          if (defaultValue === undefined) {
            console.warn(
              `CAttributeEditor "${name}" requires defaultValue when handleState is enabled; provide a row template or set handleState={false}.`,
            );
          } else {
            append(defaultValue);
          }
        }
        onAddButtonClick?.(event, append);
      }}
      onRemoveButtonClick={(event) => {
        if (handleState) {
          remove(event.detail.itemIndex);
        }
        onRemoveButtonClick?.(event, remove);
      }}
    />
  );
};

export default CAttributeEditor;
