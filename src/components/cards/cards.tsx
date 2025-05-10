import { useCallback } from 'react';
import { CardsProps, NonCancelableCustomEvent, Cards } from '@cloudscape-design/components';
import { Controller, Control, FieldValues, Path, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';

export interface ControlledCardsProps<T extends FieldValues>
  extends Omit<
    Required<Pick<CardsProps, 'trackBy'>> & Required<Pick<CardsProps, 'selectionType'>> & CardsProps,
    'value'
  > {
  name: Path<T>;
  control?: Control<T>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

export const CCards = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onSelectionChange,
  ...props
}: ControlledCardsProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (
      formOnChange: (selectedItems: TFieldValues[]) => void,
      e: NonCancelableCustomEvent<CardsProps.SelectionChangeDetail<TFieldValues>>
    ) => {
      formOnChange(e.detail.selectedItems);
      onSelectionChange?.(e);
    },
    [onSelectionChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { onChange, value } }) => (
        <Cards onSelectionChange={handleOnChange.bind(null, onChange)} selectedItems={value} {...props} />
      )}
    />
  );
};

export default CCards;
