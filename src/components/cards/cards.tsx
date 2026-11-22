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

type CardsItem<T extends FieldValues, TName extends FieldPath<T>> =
  FieldPathValue<T, TName> extends ReadonlyArray<infer TItem> ? TItem : never;

export interface CCardsProps<
  T extends FieldValues,
  TName extends FieldPath<T> = FieldPath<T>,
  TItem = CardsItem<T, TName>,
> extends Omit<
    Required<Pick<CardsProps<TItem>, "trackBy">> &
      Required<Pick<CardsProps<TItem>, "selectionType">> &
      CardsProps<TItem>,
    "selectedItems" | "onSelectionChange"
  > {
  name: TName;
  control?: Control<T>;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<T, TName>;
  rules?: Omit<RegisterOptions<T, TName>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  onSelectionChange?: (event: NonCancelableCustomEvent<CardsProps.SelectionChangeDetail<TItem>>) => void;
}

export const CCards = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TItem = CardsItem<TFieldValues, TName>,
>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onSelectionChange,
  ...props
}: CCardsProps<TFieldValues, TName, TItem>) => {
  const handleOnChange = useCallback(
    (
      formOnChange: (selectedItems: TItem[]) => void,
      e: NonCancelableCustomEvent<CardsProps.SelectionChangeDetail<TItem>>,
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
