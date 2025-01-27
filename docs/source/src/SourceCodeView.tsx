import { useMemo } from 'react';
import CodeView from '@cloudscape-design/code-view/code-view';
import CopyToClipboard from '@cloudscape-design/components/copy-to-clipboard';
import typescriptHighlight from '@cloudscape-design/code-view/highlight/typescript';
import { useLocation } from 'react-router-dom';

// Code sources
import * as FormBasicCode from './components/forms/form-basic?raw';
import * as FormWizardCode from './components/forms/form-wizard?raw';

import * as AttributeEditor from './components/attribute-editor?raw';
import * as Autosuggest from './components/autosuggest?raw';
import * as InputCode from './components/input?raw';
import * as TextareaCode from './components/textarea?raw';

const SourceCodeView: React.FC = () => {
  const location = useLocation();

  const sourceCode = useMemo(() => {
    console.log(location);
    switch (location.pathname) {
      case '/form-basic':
        return FormBasicCode.default;
      case '/form-wizard':
        return FormWizardCode.default;
      case '/CAttributeEditor':
        return AttributeEditor.default;
      case '/CAutosuggest':
        return Autosuggest.default;
      case '/CInput':
        return InputCode.default;
      case '/CTextarea':
        return TextareaCode.default;
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
