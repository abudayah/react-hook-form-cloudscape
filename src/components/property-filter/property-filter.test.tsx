import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";

import { CPropertyFilter } from "./property-filter";

const UnseededPropertyFilter = () => {
  const { control } = useForm<{ filter: unknown }>();
  return <CPropertyFilter control={control} name="filter" filteringProperties={[]} />;
};

describe("CPropertyFilter", () => {
  it("mounts when the field is not present in defaultValues", () => {
    expect(() => render(<UnseededPropertyFilter />)).not.toThrow();
  });
});
