import { useForm } from "react-hook-form";

import { CCheckbox, CCards, CInput, CToggle } from "../index";

type FormValues = {
  age: number;
  email: string;
  enabled?: boolean;
  active: boolean;
};

export const WrapperFieldTypeChecks = () => {
  const { control } = useForm<FormValues>();

  return (
    <>
      <CInput
        control={control}
        name="age"
        defaultValue={42}
        rules={{ validate: (value) => value.toFixed(0) !== "" }}
      />
      {/* @ts-expect-error The age field is numeric. */}
      <CInput control={control} name="age" defaultValue="not a number" />
      {/* @ts-expect-error Checkbox fields must resolve to booleans. */}
      <CCheckbox control={control} name="age" />
      <CCheckbox control={control} name="enabled" defaultValue />
      <CToggle control={control} name="active" defaultValue={false} />
      {/* @ts-expect-error Toggle fields must resolve to booleans. */}
      <CToggle control={control} name="email" />
    </>
  );
};

type CardItem = { id: string; label: string };
type CardsFormValues = { cards: CardItem[] };

export const CardsFieldTypeChecks = () => {
  const { control } = useForm<CardsFormValues>();

  return (
    <>
      <CCards
        control={control}
        name="cards"
        items={[{ id: "a", label: "A" }]}
        trackBy="id"
        selectionType="single"
        cardDefinition={{ header: (item) => item.label }}
        onSelectionChange={(event) => {
          const first = event.detail.selectedItems[0];
          if (first) first.label.toUpperCase();
        }}
      />
    </>
  );
};
