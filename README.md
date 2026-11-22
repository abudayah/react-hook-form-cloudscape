## React Hook Form wrapper for Cloudscape Design System

A React library that simplifies the integration of [React Hook Form](https://github.com/react-hook-form/react-hook-form) with the [Cloudscape Design System](https://github.com/cloudscape-design/components). It provides pre-built controlled components and an optional form-field adapter that connects React Hook Form validation errors to Cloudscape's accessible error presentation.

[![npmjs](https://img.shields.io/npm/v/react-hook-form-cloudscape)](https://www.npmjs.com/package/react-hook-form-cloudscape)
[![GitHub Repo stars](https://img.shields.io/github/stars/abudayah/react-hook-form-cloudscape)](https://github.com/abudayah/react-hook-form-cloudscape)

## Installation

```sh
npm install react-hook-form @cloudscape-design/components react-hook-form-cloudscape
```

## Quick start

```tsx
import { Button } from "@cloudscape-design/components";
import { useForm } from "react-hook-form";
import { CFormField, CInput } from "react-hook-form-cloudscape";

type FormValues = {
  email: string;
};

export function ExampleForm() {
  const { control, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({
    defaultValues: { email: "" },
  });

  const onSubmit = (values: FormValues) => {
    console.info("Submitted values", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CFormField control={control} name="email" label="Email address">
        <CInput
          control={control}
          name="email"
          type="email"
          rules={{ required: "Enter an email address." }}
        />
      </CFormField>
      <Button formAction="submit" loading={isSubmitting}>
        Save
      </Button>
    </form>
  );
}
```

`CFormField` subscribes to the named field's React Hook Form error and passes its message to Cloudscape's `FormField.errorText`. It also accepts an explicit `errorText` override. When using `FormProvider`, pass the form control to each input as usual and omit the `control` prop from `CFormField`.

## Validation without CFormField

The input wrappers bind values and events; they do not automatically render validation messages. You can also wire the errors yourself:

```tsx
const { control, handleSubmit, formState: { errors } } = useForm<FormValues>();

<FormField label="Email address" errorText={errors.email?.message}>
  <CInput control={control} name="email" rules={{ required: "Enter an email address." }} />
</FormField>
```

## Component state

`CPropertyFilter` and `CTextFilter` are useful for binding transient filtering UI state. `CCards` binds the selected card set. Treat these as view state unless the application explicitly intends to persist the filter or selection as business data.

## Demos and usage

See the [interactive demos](https://abudayah.github.io/react-hook-form-cloudscape).

## Getting help

You can [create bug reports or feature requests](https://github.com/abudayah/react-hook-form-cloudscape/issues/new/choose), or [start a discussion](https://github.com/abudayah/react-hook-form-cloudscape/discussions). Search existing reports before opening a duplicate.

## Articles and guides

- [Cloudscape Form Validation Made Easy: A Step-by-Step Guide with React-hook-form-cloudscape](https://medium.com/@abudayah/cloudscape-form-validation-made-easy-a-step-by-step-guide-with-react-hook-form-cloudscape-f2238225f125)

## License

This project is licensed under the [MIT License](/LICENSE).
