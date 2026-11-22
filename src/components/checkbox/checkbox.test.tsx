import { fireEvent, render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import CCheckbox from "./checkbox";

describe("CCheckbox", () => {
  it("preserves the React Hook Form blur handler when an external onBlur is provided", () => {
    const externalOnBlur = vi.fn();

    const Form = () => {
      const { control, formState } = useForm<{ enabled: boolean }>({
        defaultValues: { enabled: false },
        mode: "onBlur",
      });

      return (
        <>
          <CCheckbox control={control} name="enabled" onBlur={externalOnBlur}>
            Enabled
          </CCheckbox>
          <output>{formState.touchedFields.enabled ? "touched" : "untouched"}</output>
        </>
      );
    };

    render(<Form />);

    fireEvent.blur(screen.getByRole("checkbox", { name: "Enabled" }));

    expect(externalOnBlur).toHaveBeenCalledTimes(1);
    expect(screen.getByText("touched")).toBeInTheDocument();
  });

  it("forwards name and disabled state to the rendered checkbox", () => {
    const Form = () => {
      const { control } = useForm<{ enabled: boolean }>({
        defaultValues: { enabled: false },
      });

      return (
        <CCheckbox control={control} name="enabled" disabled>
          Enabled
        </CCheckbox>
      );
    };

    render(<Form />);

    const checkbox = screen.getByRole("checkbox", { name: "Enabled" });
    expect(checkbox).toHaveAttribute("name", "enabled");
    expect(checkbox).toBeDisabled();
  });
});
