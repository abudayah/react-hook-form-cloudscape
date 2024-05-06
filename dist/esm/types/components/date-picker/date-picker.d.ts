import { Control, FieldValues, FieldPathValue, RegisterOptions, FieldPath } from 'react-hook-form';
import { DatePickerProps } from '@cloudscape-design/components';
export interface CDatePickerProps<T extends FieldValues> extends Omit<DatePickerProps, 'value'> {
    name: FieldPath<T>;
    control?: Control<T>;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}
declare const CDatePicker: <TFieldValues extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onBlur, onChange, ...props }: CDatePickerProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CDatePicker;
