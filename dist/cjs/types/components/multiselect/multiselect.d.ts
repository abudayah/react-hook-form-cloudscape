import { Control, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { MultiselectProps } from '@cloudscape-design/components';
export interface CMultiselectProps<T extends FieldValues> extends Omit<MultiselectProps, 'selectedOptions'> {
    name: FieldPath<T>;
    control?: Control<T>;
    options?: MultiselectProps.Options;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}
declare const CMultiselect: <TFieldValues extends FieldValues>({ name, control, options, defaultValue, rules, onBlur, onChange, shouldUnregister, ...props }: CMultiselectProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CMultiselect;
