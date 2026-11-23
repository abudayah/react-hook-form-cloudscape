## React Hook Form wrapper for Cloudscape Design System

A React library that simplifies the integration of [React Hook Form](https://github.com/react-hook-form/react-hook-form) with the [Cloudscape Design System](https://github.com/cloudscape-design/components). It provides pre-built controlled components and an optional form-field adapter that connects React Hook Form validation errors to Cloudscape's accessible error presentation.

[![npmjs](https://img.shields.io/npm/v/react-hook-form-cloudscape)](https://www.npmjs.com/package/react-hook-form-cloudscape)
[![GitHub Repo stars](https://img.shields.io/github/stars/abudayah/react-hook-form-cloudscape)](https://github.com/abudayah/react-hook-form-cloudscape)

## Installation

```sh
npm install react-hook-form @cloudscape-design/components react-hook-form-cloudscape
```

## Module format

This package is published as an ES module. Use ESM imports in your application or a bundler that supports package `exports`. A CommonJS build is not published. The declared Node.js engine floor is 22.12.0.

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

## Additional Cloudscape controls

Three additional wrappers are available through component subpath imports:

- `CDateInput` binds the free-form date input value (a string).
- `COptionList` binds the selected option objects (an array, for single or multiple selection).
- `CSegmentedControl` binds the selected segment ID (a string).

These controls are exposed as subpath imports so applications using older Cloudscape 3.x releases can continue importing the original package entry point without resolving newer Cloudscape components. Use a Cloudscape release that includes the corresponding component before importing its wrapper.

```tsx
import CDateInput from "react-hook-form-cloudscape/components/date-input";
import COptionList from "react-hook-form-cloudscape/components/option-list";
import CSegmentedControl from "react-hook-form-cloudscape/components/segmented-control";
```

Each wrapper supports the same `control`, `name`, `defaultValue`, `rules`, and `shouldUnregister` props as the existing wrappers. Consumer `onChange` callbacks receive the original Cloudscape event after the React Hook Form value is updated.

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

## Focus management

The wrappers forward React Hook Form's field ref to Cloudscape controls that expose a focusable ref, so `setFocus()` and focus-on-error work as expected. `CSlider`, `CCards`, and `CAttributeEditor` do not expose a focusable Cloudscape ref and cannot be focused programmatically. The wrappers also keep their internal ref, so consumer `ref` props are not forwarded; use React Hook Form's `setFocus()` instead.

## Touched and blur behavior

Fields become touched only when focus leaves the control, never on a change or selection event. Wrappers whose Cloudscape control exposes a native blur callback forward it and compose any consumer `onBlur`. Controls without a native blur callback use a focus boundary, so moving focus between the control's own elements does not mark the field touched. This applies consistently to radio groups, tiles, sliders, tag editors, text filters, file uploads, S3 resource selectors, cards, the property filter, and the code editor.

## Compatibility

The current release is tested with React 19, React Hook Form 7.9x, and Cloudscape Design System 3.x. The declared peer floors are the minimum APIs used by the published build: React `>=16.14`, React Hook Form `>=7.26`, and Cloudscape `>=3.0.622`. `@types/react >=17` is an optional peer. CI runs on Node 22 and 24. A scheduled workflow also checks the wrappers against the latest Cloudscape release.

## AttributeEditor error paths

Each `definition` entry must provide a `key` (the row property name) or a custom `errorName` callback. The key is used to resolve per-row validation messages. Definitions without either cannot display row-level errors.

## FormProvider

Passing `control` explicitly is recommended because it preserves field-name typing. `FormProvider` is supported, but TypeScript cannot infer the form type from context, so any string may compile as a field name.

## Demos and usage

See the [interactive demos](https://abudayah.github.io/react-hook-form-cloudscape).

## Getting help

You can [create bug reports or feature requests](https://github.com/abudayah/react-hook-form-cloudscape/issues/new/choose), or [start a discussion](https://github.com/abudayah/react-hook-form-cloudscape/discussions). Search existing reports before opening a duplicate.

## Articles and guides

- [Cloudscape Form Validation Made Easy: A Step-by-Step Guide with React-hook-form-cloudscape](https://medium.com/@abudayah/cloudscape-form-validation-made-easy-a-step-by-step-guide-with-react-hook-form-cloudscape-f2238225f125)

## License

This project is licensed under the [MIT License](/LICENSE).
