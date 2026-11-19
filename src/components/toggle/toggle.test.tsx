// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import CToggle from "./toggle";

vi.mock("@cloudscape-design/components", () => ({
  Toggle: forwardRef<HTMLInputElement, {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
  }>(({ checked, disabled, name, onBlur, onChange }, ref) => (
    <input
      ref={ref}
      aria-label="toggle"
      type="checkbox"
      checked={checked}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
    />
  )),
}));

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
          <CToggle control={control} name="enabled" onBlur={externalOnBlur} />
          <output>{formState.touchedFields.enabled ? "touched" : "untouched"}</output>
        </>
      );
    };

    render(<Form />);

    fireEvent.blur(screen.getByLabelText("toggle"));

    expect(externalOnBlur).toHaveBeenCalledTimes(1);
    expect(screen.getByText("touched")).toBeInTheDocument();
  });

  it("forwards the RHF disabled state to the rendered toggle", () => {
    const Form = () => {
      const { control } = useForm<{ enabled: boolean }>({
        defaultValues: { enabled: false },
      });

      return <CToggle control={control} name="enabled" disabled />;
    };

    render(<Form />);

    expect(screen.getByLabelText("toggle")).toBeDisabled();
  });
});
