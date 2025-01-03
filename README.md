## React-hook-form wrapper for Cloudscape Design System

A React library that simplifies the integration of [`react-hook-form`](https://github.com/react-hook-form/react-hook-form) with [`Cloudscape Design System`](https://github.com/cloudscape-design/components).  It provides a set of pre-built, controlled input components that handle validation, allowing you to focus on building complex form logic with minimal effort.

[![npmjs](https://img.shields.io/npm/v/react-hook-form-cloudscape)](https://www.npmjs.com/package/react-hook-form-cloudscape)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/abudayah/react-hook-form-cloudscape/badge)](https://securityscorecards.dev/viewer/?uri=github.com/abudayah/react-hook-form-cloudscape)
[![OpenSSF Scorecard](https://github.com/abudayah/react-hook-form-cloudscape/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/abudayah/react-hook-form-cloudscape/actions/workflows/dependabot/dependabot-updates)
[![GitHub Repo stars](https://img.shields.io/github/stars/abudayah/react-hook-form-cloudscape)](https://github.com/abudayah/react-hook-form-cloudscape)

### Installation

```
npm install react-hook-form @cloudscape-design/components @cloudscape-design/global-styles react-hook-form-cloudscape
```

#### Important

Required dependencies:

- React >= 16.8 || >= 17 || >= 18
- react-dom >= 16.8 || >= 17 || >= 18
- react-hook-form >= 7
- @cloudscape-design/components

### How to use it

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

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/bold-river-tjmd2l?workspaceId=ws_EKwBkPzNLsUrLTfF7Xr7MH)

## Demo

![](https://raw.githubusercontent.com/abudayah/react-hook-form-cloudscape/refs/heads/dev/demo.gif)

## Getting help

You can [create bug reports or feature requests](https://github.com/abudayah/react-hook-form-cloudscape/issues/new/choose), or [start a discussion](https://github.com/abudayah/react-hook-form-cloudscape/discussions) to ask a question. To minimize duplicates, we recommend that you search for existing bug reports, feature requests, or discussions before initiating a new thread.

## License

This project is licensed under the [MIT License](/LICENSE).
