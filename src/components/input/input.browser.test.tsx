import { useForm } from "react-hook-form";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import CInput from "./input";

test("setFocus reaches the real Cloudscape input", async () => {
  const Form = () => {
    const { control, setFocus } = useForm<{ name: string }>();

    return (
      <>
        <button type="button" onClick={() => setFocus("name")}>
          Focus
        </button>
        <CInput control={control} name="name" />
      </>
    );
  };

  const screen = await render(<Form />);

  await screen.getByRole("button", { name: "Focus" }).click();
  await expect.element(screen.getByRole("textbox")).toHaveFocus();
});
