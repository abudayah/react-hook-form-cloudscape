import { Control, FieldValues, Path } from 'react-hook-form';
import { TextFilterProps } from '@cloudscape-design/components';
export interface CTextFilterProps<T extends FieldValues> extends Omit<TextFilterProps, 'filteringText'> {
    name: Path<T>;
    control?: Control<T>;
}
declare const CTextFilter: <TFieldValues extends FieldValues>({ name, control, onChange, ...props }: CTextFilterProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CTextFilter;
