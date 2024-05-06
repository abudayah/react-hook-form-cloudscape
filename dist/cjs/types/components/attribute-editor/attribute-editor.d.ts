import { AttributeEditorProps, NonCancelableCustomEvent } from '@cloudscape-design/components';
import { Control, FieldArray, FieldArrayPath, FieldValues, UseFieldArrayRemove, UseFieldArrayAppend, ArrayPath } from 'react-hook-form';
export interface Definition<T> extends Omit<AttributeEditorProps.FieldDefinition<T>, 'errorText'> {
    label: string;
    errorName?: (item: T, index: number) => string;
}
export interface CAttributeEditorProps<T extends FieldValues> extends Omit<AttributeEditorProps<T>, 'items' | 'onRemoveButtonClick' | 'onAddButtonClick'> {
    name: FieldArrayPath<T>;
    control?: Control<T>;
    definition: Definition<T>[];
    defaultValue: FieldArray<T>;
    handleState?: boolean;
    onRemoveButtonClick?: (event: NonCancelableCustomEvent<AttributeEditorProps.RemoveButtonClickDetail>, remove: UseFieldArrayRemove) => void;
    onAddButtonClick?: (event: NonCancelableCustomEvent<{}>, append: UseFieldArrayAppend<T, ArrayPath<T>>) => void;
}
declare const CAttributeEditor: <TFieldValues extends FieldValues>({ name, control, onRemoveButtonClick, onAddButtonClick, definition, defaultValue, handleState, ...props }: CAttributeEditorProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CAttributeEditor;
