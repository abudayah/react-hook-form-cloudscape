import { Control, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { SelectProps } from '@cloudscape-design/components';
export interface CSelectProps<T extends FieldValues> extends Omit<SelectProps, 'selectedOption'> {
    name: FieldPath<T>;
    control: Control<T>;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}
declare const CSelect: <TFieldValues extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onBlur, onChange, ...props }: CSelectProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CSelect;
