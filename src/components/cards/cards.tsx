import { Cards, CardsProps, NonCancelableCustomEvent } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

export interface ControlledCardsProps<T extends FieldValues>
  extends Omit<
    Required<Pick<CardsProps, "trackBy">> & Required<Pick<CardsProps, "selectionType">> & CardsProps,
    "value"
  > {
  name: Path<T>;
  control?: Control<T>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
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
      e: NonCancelableCustomEvent<CardsProps.SelectionChangeDetail<TFieldValues>>,
    ) => {
      formOnChange(e.detail.selectedItems);
      onSelectionChange?.(e);
    },
    [onSelectionChange],
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Cards selectedItems={value} onSelectionChange={handleOnChange.bind(null, onChange)} {...props} />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CCards;
