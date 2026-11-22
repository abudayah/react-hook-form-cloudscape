import { useState } from "react";
import { useForm } from "react-hook-form";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import CCheckbox from "./checkbox";

test("writes real Cloudscape checkbox changes into form state", async () => {
  const Form = () => {
    const { control, watch } = useForm<{ enabled: boolean }>({
      defaultValues: { enabled: false },
    });

    return (
      <>
        <CCheckbox control={control} name="enabled">
          Enabled
        </CCheckbox>
        <output>{String(watch("enabled"))}</output>
      </>
    );
  };

  const screen = await render(<Form />);

  await screen.getByRole("checkbox", { name: "Enabled" }).click();
  await expect.element(screen.getByText("true")).toBeVisible();
});

test("keeps disabled field values in the submit payload", async () => {
  const Form = () => {
    const [submitted, setSubmitted] = useState("");
    const { control, handleSubmit } = useForm<{ enabled: boolean }>({
      defaultValues: { enabled: true },
    });

    return (
      <form onSubmit={handleSubmit((values) => setSubmitted(JSON.stringify(values)))}>
        <CCheckbox control={control} name="enabled" disabled>
          Enabled
        </CCheckbox>
        <button type="submit">Submit</button>
        <output>{submitted}</output>
      </form>
    );
  };

  const screen = await render(<Form />);
  await screen.getByRole("button", { name: "Submit" }).click();
  await expect.element(screen.getByText('{"enabled":true}')).toBeVisible();
});
