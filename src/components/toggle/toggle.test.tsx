import { fireEvent, render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import CToggle from "./toggle";

describe("CToggle", () => {
  it("preserves the React Hook Form blur handler when an external onBlur is provided", () => {
    const externalOnBlur = vi.fn();

    const Form = () => {
      const { control, formState } = useForm<{ enabled: boolean }>({
        defaultValues: { enabled: false },
        mode: "onBlur",
      });

      return (
        <>
          <CToggle control={control} name="enabled" onBlur={externalOnBlur}>
            Enabled
          </CToggle>
          <output>{formState.touchedFields.enabled ? "touched" : "untouched"}</output>
        </>
      );
    };

    render(<Form />);

    fireEvent.blur(screen.getByRole("checkbox", { name: "Enabled" }));

    expect(externalOnBlur).toHaveBeenCalledTimes(1);
    expect(screen.getByText("touched")).toBeInTheDocument();
  });

  it("forwards the RHF disabled state to the rendered toggle", () => {
    const Form = () => {
      const { control } = useForm<{ enabled: boolean }>({
        defaultValues: { enabled: false },
      });

      return (
        <CToggle control={control} name="enabled" disabled>
          Enabled
        </CToggle>
      );
    };

    render(<Form />);

    expect(screen.getByRole("checkbox", { name: "Enabled" })).toBeDisabled();
  });
});
