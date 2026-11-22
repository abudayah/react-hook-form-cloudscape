import type { ReactNode } from "react";

export interface FocusBoundaryProps {
  onBlur: () => void;
  children: ReactNode;
}

/**
 * Supplies blur/touched semantics for Cloudscape controls that do not expose
 * a native onBlur callback. Moving focus between descendants does not mark the
 * field touched; leaving the boundary does.
 */
export const FocusBoundary = ({ onBlur, children }: FocusBoundaryProps) => (
  <div
    style={{ display: "contents" }}
    onBlur={(event) => {
      const nextTarget = event.relatedTarget as Node | null;
      if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
        onBlur();
      }
    }}
  >
    {children}
  </div>
);
