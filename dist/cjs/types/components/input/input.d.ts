import React from 'react';
import { Control, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { InputProps } from '@cloudscape-design/components';
export interface CInputProps<T extends FieldValues> extends Omit<InputProps, 'value'> {
    name: FieldPath<T>;
    control?: Control<T>;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
}
declare const CInput: <TFieldValues extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onBlur, onChange, ...props }: CInputProps<TFieldValues>) => React.ReactElement;
export default CInput;
