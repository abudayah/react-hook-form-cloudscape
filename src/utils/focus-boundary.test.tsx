import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { FocusBoundary } from "./focus-boundary";

describe("FocusBoundary", () => {
  it("marks the field touched only when focus leaves the boundary", () => {
    const onBlur = vi.fn();
    render(
      <FocusBoundary onBlur={onBlur}>
        <button type="button">First</button>
        <button type="button">Second</button>
      </FocusBoundary>,
    );

    const first = screen.getByRole("button", { name: "First" });
    const second = screen.getByRole("button", { name: "Second" });

    fireEvent.focus(first);
    fireEvent.blur(first, { relatedTarget: second });
    expect(onBlur).not.toHaveBeenCalled();

    fireEvent.blur(second, { relatedTarget: null });
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
