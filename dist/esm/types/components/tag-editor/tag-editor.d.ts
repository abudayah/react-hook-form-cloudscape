import { Control, Path, FieldValues } from 'react-hook-form';
import { TagEditorProps } from '@cloudscape-design/components';
export interface CTagEditorProps<T extends FieldValues> extends Omit<TagEditorProps, 'tags'> {
    name: Path<T>;
    control?: Control<T>;
}
declare const CTagEditor: <TFieldValues extends FieldValues>({ name, control, onChange, ...props }: CTagEditorProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CTagEditor;
