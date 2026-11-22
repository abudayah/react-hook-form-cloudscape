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
