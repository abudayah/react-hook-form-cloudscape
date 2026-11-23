import { FormProvider, useForm } from "react-hook-form";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import CFormField from "./form-field";

test("shows a field validation error when control is supplied by FormProvider", async () => {
  const Form = () => {
    const methods = useForm<{ email: string }>({
      defaultValues: { email: "" },
    });

    return (
      <FormProvider {...methods}>
        <CFormField name="email" label="Email">
          <input aria-label="Email" />
        </CFormField>
      </FormProvider>
    );
  };

  const screen = await render(<Form />);
  await expect.element(screen.getByText("Email")).toBeVisible();
});

test("explains how to provide React Hook Form context when control is missing", async () => {
  const MissingProvider = () => (
    <CFormField name="email" label="Email">
      <input aria-label="Email" />
    </CFormField>
  );

  await expect(render(<MissingProvider />)).rejects.toThrow(
    'CFormField "email" requires a React Hook Form control. Pass the control prop or wrap the component in FormProvider.',
  );
});
