import { Control, FieldValues, Path } from 'react-hook-form';
import { TilesProps } from '@cloudscape-design/components';
export interface CTilesProps<T extends FieldValues> extends Omit<TilesProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}
declare const CTiles: <TFieldValues extends FieldValues>({ name, control, onChange, ...props }: CTilesProps<TFieldValues>) => import("@emotion/react/jsx-runtime").JSX.Element;
export default CTiles;
