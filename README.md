## React-hook-form wrapper for Cloudscape Design System

A React library that simplifies the integration of [`react-hook-form`](https://github.com/react-hook-form/react-hook-form) with [`Cloudscape Design System`](https://github.com/cloudscape-design/components). It provides a set of pre-built, controlled input components that handle validation, allowing you to focus on building complex form logic with minimal effort.

[![npmjs](https://img.shields.io/npm/v/react-hook-form-cloudscape)](https://www.npmjs.com/package/react-hook-form-cloudscape)
![Bundle size](https://pkg-size.dev/badge/bundle/9430)
[![OpenSSF Scorecard](https://github.com/abudayah/react-hook-form-cloudscape/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/abudayah/react-hook-form-cloudscape/actions/workflows/dependabot/dependabot-updates)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/abudayah/react-hook-form-cloudscape/badge)](https://securityscorecards.dev/viewer/?uri=github.com/abudayah/react-hook-form-cloudscape)
[![GitHub Repo stars](https://img.shields.io/github/stars/abudayah/react-hook-form-cloudscape)](https://github.com/abudayah/react-hook-form-cloudscape)

## Installation

```
npm install react-hook-form @cloudscape-design/components react-hook-form-cloudscape
```

## How to use it

```
import { Form, FormField } from '@cloudscape-design/components';
import { CInput } from 'react-hook-form-cloudscape';

function App {
  return (
      <Form>
        <FormField>
          <CInput name="email" ... />
        </FormField>
      </Form>
  );
};

```

✨ Demos and usage: https://abudayah.github.io/react-hook-form-cloudscape

## Getting help

You can [create bug reports or feature requests](https://github.com/abudayah/react-hook-form-cloudscape/issues/new/choose), or [start a discussion](https://github.com/abudayah/react-hook-form-cloudscape/discussions) to ask a question. To minimize duplicates, we recommend that you search for existing bug reports, feature requests, or discussions before initiating a new thread.

## Articles and guides

- [Cloudscape Form Validation Made Easy: A Step-by-Step Guide with React-hook-form-cloudscape](https://medium.com/@abudayah/cloudscape-form-validation-made-easy-a-step-by-step-guide-with-react-hook-form-cloudscape-f2238225f125)

## License

This project is licensed under the [MIT License](/LICENSE).
