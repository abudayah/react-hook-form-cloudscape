import { useMemo } from 'react';
import CodeView from '@cloudscape-design/code-view/code-view';
import CopyToClipboard from '@cloudscape-design/components/copy-to-clipboard';
import typescriptHighlight from '@cloudscape-design/code-view/highlight/typescript';
import { useLocation } from 'react-router-dom';

// Code sources
import * as FormBasicCode from './components/forms/form-basic?raw';
import * as FormWizardCode from './components/forms/form-wizard?raw';

import * as AttributeEditor from './components/AttributeEditor?raw';
import * as Autosuggest from './components/Autosuggest?raw';
import * as Cards from './components/Cards?raw';
import * as Checkbox from './components/Checkbox?raw';
import * as CodeEditor from './components/CodeEditor?raw';
import * as Input from './components/Input?raw';
import * as Textarea from './components/Textarea?raw';

const SourceCodeView: React.FC = () => {
  const location = useLocation();

  const sourceCode = useMemo(() => {
    console.log(location);
    switch (location.pathname) {
      case '/form-basic':
        return FormBasicCode.default;
      case '/form-wizard':
        return FormWizardCode.default;
      case '/AttributeEditor':
        return AttributeEditor.default;
      case '/Autosuggest':
        return Autosuggest.default;
      case '/Cards':
        return Cards.default;
      case '/Checkbox':
        return Checkbox.default;
      case '/CodeEditor':
        return CodeEditor.default;
      case '/Input':
        return Input.default;
      case '/Textarea':
        return Textarea.default;
      default:
        return FormBasicCode.default;
    }
  }, [location]);

  return (
    <CodeView
      wrapLines
      content={sourceCode}
      highlight={typescriptHighlight}
      actions={
        <CopyToClipboard
          copyButtonAriaLabel="Copy code"
          copyErrorText="Code failed to copy"
          copySuccessText="Code copied"
          textToCopy={sourceCode}
        />
      }
    />
  );
};

export default SourceCodeView;
