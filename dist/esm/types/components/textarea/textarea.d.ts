import { TextareaProps } from '@cloudscape-design/components';
import { Control, Path, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
export interface CTextareaProps<T extends FieldValues> extends Omit<TextareaProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}
declare const CTextarea: <TFieldValues extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onBlur, onChange, ...props }: CTextareaProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CTextarea;
