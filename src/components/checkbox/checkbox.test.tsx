// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import CCheckbox from "./checkbox";

vi.mock("@cloudscape-design/components", () => ({
  Checkbox: forwardRef<HTMLInputElement, {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
  }>(({ checked, disabled, name, onBlur, onChange }, ref) => (
    <input
      ref={ref}
      aria-label="checkbox"
      type="checkbox"
      checked={checked}
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
    />
  )),
}));

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
          <CCheckbox control={control} name="enabled" onBlur={externalOnBlur} />
          <output>{formState.touchedFields.enabled ? "touched" : "untouched"}</output>
        </>
      );
    };

    render(<Form />);

    fireEvent.blur(screen.getByLabelText("checkbox"));

    expect(externalOnBlur).toHaveBeenCalledTimes(1);
    expect(screen.getByText("touched")).toBeInTheDocument();
  });

  it("forwards name and disabled state to the rendered checkbox", () => {
    const Form = () => {
      const { control } = useForm<{ enabled: boolean }>({
        defaultValues: { enabled: false },
      });

      return <CCheckbox control={control} name="enabled" disabled />;
    };

    render(<Form />);

    const checkbox = screen.getByLabelText("checkbox");
    expect(checkbox).toHaveAttribute("name", "enabled");
    expect(checkbox).toBeDisabled();
  });
});
