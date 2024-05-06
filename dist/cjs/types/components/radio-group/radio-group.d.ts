import { Control, FieldValues, Path } from 'react-hook-form';
import { RadioGroupProps } from '@cloudscape-design/components';
export interface CRadioGroupProps<T extends FieldValues> extends Omit<RadioGroupProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}
declare const CRadioGroup: <TFieldValues extends FieldValues>({ name, control, onChange, ...props }: CRadioGroupProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CRadioGroup;
