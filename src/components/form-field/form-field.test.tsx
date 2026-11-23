import { render } from "@testing-library/react";
import { expect, it } from "vitest";

import CFormField from "./form-field";

it("throws an actionable error when neither control nor FormProvider is supplied", () => {
  expect(() =>
    render(
      <CFormField name="email" label="Email">
        <input aria-label="Email" />
      </CFormField>,
    ),
  ).toThrow(
    'CFormField "email" requires a React Hook Form control. Pass the control prop or wrap the component in FormProvider.',
  );
});
