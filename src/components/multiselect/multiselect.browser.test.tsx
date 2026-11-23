import { useForm } from "react-hook-form";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import CMultiselect from "./multiselect";

test("selects multiple options and writes them into form state", async () => {
  const Form = () => {
    const { control, watch } = useForm<{ choices: string[] }>({
      defaultValues: { choices: [] },
    });

    return (
      <>
        <CMultiselect
          control={control}
          name="choices"
          options={[
            { label: "One", value: "1" },
            { label: "Two", value: "2" },
          ]}
        />
        <output>{JSON.stringify(watch("choices"))}</output>
      </>
    );
  };

  const screen = await render(<Form />);

  await screen.getByRole("button").first().click();
  await screen.getByRole("option", { name: "One" }).click();
  await screen.getByRole("option", { name: "Two" }).click();
  await expect.element(screen.getByText('["1","2"]')).toBeVisible();
});
