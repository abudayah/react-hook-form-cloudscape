import { default as React } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';
import { CheckboxProps } from '@cloudscape-design/components';
export interface CCheckboxProps<T extends FieldValues> extends Omit<CheckboxProps, 'checked'> {
    name: Path<T>;
    control: Control<T>;
}
declare const CCheckbox: <TFieldValues extends FieldValues>({ name, control, onChange, ...props }: CCheckboxProps<TFieldValues>) => React.JSX.Element;
export default CCheckbox;
