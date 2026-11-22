import { CCheckbox, CInput, CToggle } from "../index";
import { useForm } from "react-hook-form";

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
