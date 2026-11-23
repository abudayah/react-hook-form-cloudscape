import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import CInput from "./input";

const renderForm = (onChange = vi.fn(), onBlur = vi.fn()) => {
  const Form = () => {
    const [submitted, setSubmitted] = useState("");
    const {
      control,
      handleSubmit,
      reset,
      formState: { errors, touchedFields },
    } = useForm<{ name: string }>({
      defaultValues: { name: "Ada" },
      mode: "onBlur",
    });

    return (
      <form onSubmit={handleSubmit((values) => setSubmitted(JSON.stringify(values)))}>
        <CInput
          control={control}
          name="name"
          rules={{ required: "Name is required" }}
          onChange={onChange}
          onBlur={onBlur}
        />
        <output>{touchedFields.name ? "touched" : "untouched"}</output>
        <output>{errors.name?.message ?? ""}</output>
        <output>{submitted}</output>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    );
  };

  render(<Form />);
  return screen.getByRole("textbox");
};

describe("CInput behavior", () => {
  it("binds defaultValue, composes callbacks, and submits the current value", async () => {
    const onChange = vi.fn();
    const onBlur = vi.fn();
    const input = renderForm(onChange, onBlur);

    expect(input).toHaveValue("Ada");
    expect(screen.getByText("untouched")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Grace" } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue("Grace");
    expect(screen.getByText("untouched")).toBeInTheDocument();

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.getByText("touched")).toBeInTheDocument());

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    await waitFor(() => expect(screen.getByText('{"name":"Grace"}')).toBeInTheDocument());
  });

  it("resets to the default value", () => {
    const input = renderForm();

    fireEvent.change(input, { target: { value: "Grace" } });
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(input).toHaveValue("Ada");
  });

  it("reports validation errors on submit", async () => {
    const input = renderForm();

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => expect(screen.getByText("Name is required")).toBeInTheDocument());
  });
});
