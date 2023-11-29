## React-hook-form wrapper for Cloudscape Design System
A React Hook Form wrapper designed for effortless integration of validations into Cloudscape forms and inputs.

For more details about Cloudscape Design System, please visit [cloudscape.design](https://cloudscape.design/).

### Installation

```
npm install react-hook-form react-hook-form-cloudscape
```

#### Important

Required dependencies:
- React >= 16.8 || >= 17 || >= 18
- react-dom >= 16.8 || >= 17 || >= 18
- react-hook-form >= 7.36
- @cloudscape-design/components

### How to use it

```
import { Form, FormField } from '@cloudscape-design/components';
import CInput from 'react-hook-form-cloudscape/components/input';

function App {
  return (
      <Form>
        <FormField>
          <CInput name="name" ... />
        </FormField>
      </Form>
  );
};

```

## Getting help

You can [create bug reports or feature requests](https://github.com/abudayah/react-hook-form-cloudscape/issues/new/choose), or [start a discussion](https://github.com/abudayah/react-hook-form-cloudscape/discussions) to ask a question. To minimize duplicates, we recommend that you search for existing bug reports, feature requests, or discussions before initiating a new thread.

## License

This project is licensed under the [MIT License](/LICENSE).
