import { Cards, CardsProps, NonCancelableCustomEvent } from "@cloudscape-design/components";
import { useCallback } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

import { FocusBoundary } from "../../utils/focus-boundary";

export interface CCardsProps<T extends FieldValues, TName extends FieldPath<T> = FieldPath<T>>
  extends Omit<
    Required<Pick<CardsProps, "trackBy">> & Required<Pick<CardsProps, "selectionType">> & CardsProps,
    "value" | "selectedItems"
  > {
  name: TName;
  control?: Control<T>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}

export const CCards = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onSelectionChange,
  ...props
}: CCardsProps<TFieldValues, TName>) => {
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
      render={({ field: { onChange, onBlur, value } }) => (
        <FocusBoundary onBlur={onBlur}>
          <Cards
            {...props}
            selectedItems={value ?? []}
            onSelectionChange={(e) => handleOnChange(onChange, e)}
          />
        </FocusBoundary>
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};

export default CCards;
