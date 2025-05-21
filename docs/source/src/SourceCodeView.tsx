import { useMemo } from "react";
import CodeView from "@cloudscape-design/code-view/code-view";
import CopyToClipboard from "@cloudscape-design/components/copy-to-clipboard";
import typescriptHighlight from "@cloudscape-design/code-view/highlight/typescript";
import { useLocation } from "react-router-dom";

// Code sources
import * as FormBasicCode from "./components/forms/form-basic?raw";
import * as FormWizardCode from "./components/forms/form-wizard?raw";

import * as AttributeEditor from "./components/AttributeEditor?raw";
import * as Autosuggest from "./components/Autosuggest?raw";
import * as Cards from "./components/Cards?raw";
import * as Checkbox from "./components/Checkbox?raw";
import * as CodeEditor from "./components/CodeEditor?raw";
import * as DatePicker from "./components/DatePicker?raw";
import * as DateRangePicker from "./components/DateRangePicker?raw";
import * as FileUpload from "./components/FileUpload?raw";
import * as Input from "./components/Input?raw";
import * as Multiselect from "./components/Multiselect?raw";
// import * as PropertyFilter from './components/PropertyFilter?raw';
import * as RadioGroup from "./components/RadioGroup?raw";
// import * as S3ResourceSelector from './components/S3ResourceSelector?raw';
import * as Select from "./components/Select?raw";
import * as Slider from "./components/Slider?raw";
import * as TagEditor from "./components/TagEditor?raw";
import * as Textarea from "./components/Textarea?raw";
import * as TextFilter from "./components/TextFilter?raw";
import * as Tiles from "./components/Tiles?raw";
import * as TimeInput from "./components/TimeInput?raw";
import * as Toggle from "./components/Toggle?raw";

const SourceCodeView: React.FC = () => {
  const location = useLocation();

  const sourceCode = useMemo(() => {
    switch (location.pathname) {
      case "/form-basic":
        return FormBasicCode.default;
      case "/form-wizard":
        return FormWizardCode.default;
      case "/AttributeEditor":
        return AttributeEditor.default;
      case "/Autosuggest":
        return Autosuggest.default;
      case "/Cards":
        return Cards.default;
      case "/Checkbox":
        return Checkbox.default;
      case "/CodeEditor":
        return CodeEditor.default;
      case "/DatePicker":
        return DatePicker.default;
      case "/DateRangePicker":
        return DateRangePicker.default;
      case "/FileUpload":
        return FileUpload.default;
      case "/Input":
        return Input.default;
      case "/Multiselect":
        return Multiselect.default;
      // case '/PropertyFilter':
      //   return PropertyFilter.default;
      case "/RadioGroup":
        return RadioGroup.default;
      // case '/S3ResourceSelector':
      //   return S3ResourceSelector.default;
      case "/Select":
        return Select.default;
      case "/Slider":
        return Slider.default;
      case "/TagEditor":
        return TagEditor.default;
      case "/Textarea":
        return Textarea.default;
      case "/TextFilter":
        return TextFilter.default;
      case "/Tiles":
        return Tiles.default;
      case "/TimeInput":
        return TimeInput.default;
      case "/Toggle":
        return Toggle.default;
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
