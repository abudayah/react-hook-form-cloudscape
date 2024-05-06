import { Control, FieldValues, Path } from 'react-hook-form';
import { TimeInputProps } from '@cloudscape-design/components';
export interface CTimeInputProps<T extends FieldValues> extends Omit<TimeInputProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}
declare const CTimeInput: <TFieldValues extends FieldValues>({ name, control, onBlur, onChange, ...props }: CTimeInputProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CTimeInput;
