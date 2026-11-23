import { useForm } from "react-hook-form";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import CSelect from "./select";

test("renders an option whose value is the empty string", async () => {
  const Form = () => {
    const { control } = useForm<{ choice: string }>({
      defaultValues: { choice: "" },
    });

    return (
      <CSelect
        control={control}
        name="choice"
        options={[
          { label: "None", value: "" },
          { label: "One", value: "1" },
        ]}
      />
    );
  };

  const screen = await render(<Form />);

  await expect.element(screen.getByText("None")).toBeVisible();
});

test("selects an option and writes it into form state", async () => {
  const Form = () => {
    const { control, watch } = useForm<{ choice: string }>({
      defaultValues: { choice: "1" },
    });

    return (
      <>
        <CSelect
          control={control}
          name="choice"
          options={[
            { label: "One", value: "1" },
            { label: "Two", value: "2" },
          ]}
        />
        <output>{watch("choice")}</output>
      </>
    );
  };

  const screen = await render(<Form />);

  await screen.getByRole("button", { name: "One" }).click();
  await screen.getByRole("option", { name: "Two" }).click();
  await expect.element(screen.getByText("2")).toBeVisible();
});

test("does not erase the current form value when a value-less option is selected", async () => {
  const Form = () => {
    const { control, watch } = useForm<{ choice: string }>({
      defaultValues: { choice: "1" },
    });

    return (
      <>
        <CSelect
          control={control}
          name="choice"
          options={[
            { label: "One", value: "1" },
            { label: "Unavailable value" },
          ]}
        />
        <output>{watch("choice")}</output>
      </>
    );
  };

  const screen = await render(<Form />);

  await screen.getByRole("button", { name: "One" }).click();
  await screen.getByRole("option", { name: "Unavailable value" }).click();
  await expect.element(screen.getByText("1")).toBeVisible();
});
