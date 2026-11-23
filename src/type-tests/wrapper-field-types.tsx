import { useForm } from "react-hook-form";

import CDateInput from "../components/date-input";
import COptionList from "../components/option-list";
import CSegmentedControl from "../components/segmented-control";
import { CCheckbox, CCards, CInput, CToggle } from "../index";

type FormValues = {
  age: number;
  email: string;
  enabled?: boolean;
  active: boolean;
  date: string;
  segment: string;
  choices: { label: string; value: string }[];
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
      <CDateInput control={control} name="date" defaultValue="2026/11/22" />
      {/* @ts-expect-error Date input fields must resolve to strings. */}
      <CDateInput control={control} name="date" defaultValue={42} />
      <CSegmentedControl
        control={control}
        name="segment"
        defaultValue="one"
        label="View"
        options={[{ text: "One", id: "one" }]}
      />
      {/* @ts-expect-error Segmented control fields must resolve to strings. */}
      <CSegmentedControl control={control} name="segment" defaultValue={42} label="View" options={[]} />
      <COptionList
        control={control}
        name="choices"
        defaultValue={[]}
        options={[{ label: "One", value: "one" }]}
        selectionType="multi"
        i18nStrings={{ selectedAriaLabel: "Selected" }}
      />
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
