import { DateRangePickerProps } from '@cloudscape-design/components';
import { Control, Path, FieldValues } from 'react-hook-form';
export interface CDateRangePickerProps<T extends FieldValues> extends Omit<DateRangePickerProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}
declare const CDateRangePicker: <TFieldValues extends FieldValues>({ name, control, onBlur, onChange, ...props }: CDateRangePickerProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CDateRangePicker;
