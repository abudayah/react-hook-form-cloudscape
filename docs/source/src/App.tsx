import { useLayoutEffect, useState } from "react";
import "./App.css";
import {
  AppLayout,
  SideNavigation,
  HelpPanel,
  SplitPanel,
  TopNavigation,
  Flashbar,
  Icon,
  Link,
} from "@cloudscape-design/components";
import jsonHighlight from "@cloudscape-design/code-view/highlight/json";
import { CodeView } from "@cloudscape-design/code-view";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import SourceCodeView from "./SourceCodeView";
import { useLocalStorage } from "./hooks/useLocalStorage";

import FormBasic from "./components/forms/form-basic";
import FormWizard from "./components/forms/form-wizard";

import AttributeEditor from "./components/AttributeEditor";
import Autosuggest from "./components/Autosuggest";
import Cards from "./components/Cards";
import Checkbox from "./components/Checkbox";
import CodeEditor from "./components/CodeEditor";
import DatePicker from "./components/DatePicker";
import DateRangePicker from "./components/DateRangePicker";
import FileUpload from "./components/FileUpload";
import Input from "./components/Input";
import Multiselect from "./components/Multiselect";
// import PropertyFilter from './components/PropertyFilter';
import RadioGroup from "./components/RadioGroup";
// import S3ResourceSelector from './components/S3ResourceSelector';
import Select from "./components/Select";
import Slider from "./components/Slider";
import TagEditor from "./components/TagEditor";
import Textarea from "./components/Textarea";
import TextFilter from "./components/TextFilter";
import Tiles from "./components/Tiles";
import TimeInput from "./components/TimeInput";
import Toggle from "./components/Toggle";

function App() {
  const [activeHref, setActiveHref] = useState("");
  const [flashMessageContent, setFlashMessageContent] = useState<string | null>(null);

  const [navigationOpen, setNavigationOpen] = useLocalStorage("navigationOpen", true);
  const [toolsOpen, setToolsOpen] = useLocalStorage("toolsOpen", false);
  const [SplitPanelOpen, setSplitPanelOpen] = useLocalStorage("SplitPanelOpen", true);
  const [splitPanelPreferences, setSplitPanelPreferences] = useLocalStorage("splitPanelPreferences", {
    position: "side",
  });

  useLayoutEffect(() => {
    setActiveHref(window.location.hash);
  }, []);

  const handleFormSubmit = (data: any) => {
    setFlashMessageContent(JSON.stringify(data, null, 2));
  };

  return (
    <HashRouter>
      <TopNavigation
        identity={{
          href: "#",
          title: "React-hook-form-cloudscape demos",
        }}
        utilities={[
          {
            type: "button",
            text: "GitHub",
            href: "https://github.com/abudayah/react-hook-form-cloudscape",
            external: true,
            externalIconAriaLabel: "GitHub (opens in a new tab)",
          },
        ]}
      />
      <AppLayout
        contentType="form"
        toolsHide
        toolsOpen={toolsOpen}
        onToolsChange={() => setToolsOpen(!toolsOpen)}
        navigationOpen={navigationOpen}
        onNavigationChange={() => setNavigationOpen(!navigationOpen)}
        navigation={
          <SideNavigation
            activeHref={activeHref}
            onFollow={(event) => {
              if (!event.detail.external) {
                setActiveHref(event.detail.href);
              }
            }}
            items={[
              {
                type: "section-group",
                title: "Forms",
                items: [
                  {
                    type: "link",
                    text: "📝 Basic",
                    href: "#/form-basic",
                  },
                  // {
                  //   type: "link",
                  //   text: "🌀 Dynamic",
                  //   href: "#/form-dynamic"
                  // },
                  {
                    type: "link",
                    text: "🪄 Wizard",
                    href: "#/form-wizard",
                  },
                ],
              },
              { type: "divider" },
              {
                type: "section-group",
                title: "Components",
                items: [
                  {
                    type: "link",
                    text: "Attribute Editor",
                    href: "#/AttributeEditor",
                  },
                  {
                    type: "link",
                    text: "Autosuggest",
                    href: "#/Autosuggest",
                  },
                  {
                    type: "link",
                    text: "Cards",
                    href: "#/Cards",
                  },
                  {
                    type: "link",
                    text: "Checkbox",
                    href: "#/Checkbox",
                  },
                  {
                    type: "link",
                    text: "Code Editor",
                    href: "#/CodeEditor",
                  },
                  {
                    type: "link",
                    text: "Date Picker",
                    href: "#/DatePicker",
                  },
                  {
                    type: "link",
                    text: "Date Range Picker",
                    href: "#/DateRangePicker",
                  },
                  {
                    type: "link",
                    text: "File Upload",
                    href: "#/FileUpload",
                  },
                  {
                    type: "link",
                    text: "Input",
                    href: "#/Input",
                  },
                  {
                    type: "link",
                    text: "Multiselect",
                    href: "#/Multiselect",
                  },
                  // {
                  //   type: "link",
                  //   text: "Property Filter",
                  //   href: "#/PropertyFilter"
                  // },
                  {
                    type: "link",
                    text: "Radio Group",
                    href: "#/RadioGroup",
                  },
                  // {
                  //   type: "link",
                  //   text: "S3 Resource Selector",
                  //   href: "#/S3ResourceSelector"
                  // },
                  {
                    type: "link",
                    text: "Select",
                    href: "#/Select",
                  },
                  {
                    type: "link",
                    text: "Slider",
                    href: "#/Slider",
                  },
                  {
                    type: "link",
                    text: "Tag Editor",
                    href: "#/TagEditor",
                  },
                  {
                    type: "link",
                    text: "Text Area",
                    href: "#/Textarea",
                  },
                  {
                    type: "link",
                    text: "Text Filter",
                    href: "#/TextFilter",
                  },
                  {
                    type: "link",
                    text: "Tiles",
                    href: "#/Tiles",
                  },
                  {
                    type: "link",
                    text: "Time Input",
                    href: "#/TimeInput",
                  },
                  {
                    type: "link",
                    text: "Toggle",
                    href: "#/Toggle",
                  },
                ],
              },
            ]}
          />
        }
        notifications={
          flashMessageContent && (
            <Flashbar
              items={[
                {
                  type: "success",
                  dismissible: true,
                  onDismiss: () => setFlashMessageContent(null),
                  header: "The form submitted data was valid!",
                  content: (
                    <div className="awsui-dark-mode">
                      <p>Submitted date:</p>
                      <CodeView content={flashMessageContent} highlight={jsonHighlight} />
                    </div>
                  ),
                },
              ]}
            />
          )
        }
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content={
          <Routes>
            <Route path="/form-basic" element={<FormBasic onSubmit={handleFormSubmit} />} />
            <Route path="/form-wizard" element={<FormWizard onSubmit={handleFormSubmit} />} />
            <Route path="/AttributeEditor" element={<AttributeEditor onSubmit={handleFormSubmit} />} />
            <Route path="/Autosuggest" element={<Autosuggest onSubmit={handleFormSubmit} />} />
            <Route path="/Cards" element={<Cards onSubmit={handleFormSubmit} />} />
            <Route path="/Checkbox" element={<Checkbox onSubmit={handleFormSubmit} />} />
            <Route path="/CodeEditor" element={<CodeEditor onSubmit={handleFormSubmit} />} />
            <Route path="/DatePicker" element={<DatePicker onSubmit={handleFormSubmit} />} />
            <Route path="/DateRangePicker" element={<DateRangePicker onSubmit={handleFormSubmit} />} />
            <Route path="/FileUpload" element={<FileUpload onSubmit={handleFormSubmit} />} />
            <Route path="/Input" element={<Input onSubmit={handleFormSubmit} />} />
            <Route path="/Multiselect" element={<Multiselect onSubmit={handleFormSubmit} />} />
            {/* <Route path="/PropertyFilter" element={<PropertyFilter onSubmit={handleFormSubmit} />} /> */}
            <Route path="/RadioGroup" element={<RadioGroup onSubmit={handleFormSubmit} />} />
            {/* <Route path="/S3ResourceSelector" element={<S3ResourceSelector onSubmit={handleFormSubmit} />} /> */}
            <Route path="/Select" element={<Select onSubmit={handleFormSubmit} />} />
            <Route path="/Slider" element={<Slider onSubmit={handleFormSubmit} />} />
            <Route path="/TagEditor" element={<TagEditor onSubmit={handleFormSubmit} />} />
            <Route path="/Textarea" element={<Textarea onSubmit={handleFormSubmit} />} />
            <Route path="/TextFilter" element={<TextFilter onSubmit={handleFormSubmit} />} />
            <Route path="/Tiles" element={<Tiles onSubmit={handleFormSubmit} />} />
            <Route path="/TimeInput" element={<TimeInput onSubmit={handleFormSubmit} />} />
            <Route path="/Toggle" element={<Toggle onSubmit={handleFormSubmit} />} />
            <Route path="/" element={<Navigate to="/form-basic" />} />
          </Routes>
        }
        splitPanelPreferences={splitPanelPreferences}
        onSplitPanelPreferencesChange={(event) => setSplitPanelPreferences(event.detail)}
        splitPanelOpen={SplitPanelOpen}
        onSplitPanelToggle={() => setSplitPanelOpen(!SplitPanelOpen)}
        splitPanel={
          <SplitPanel header="Source code" i18nStrings={{ preferencesConfirm: "Set" }}>
            <SourceCodeView />
            <br />
            <Link
              href="https://github.com/abudayah/react-hook-form-cloudscape/tree/main/docs/source/src/components"
              external
              target="_blank"
            >
              <Icon name="script" /> View demos source code on github
            </Link>
            <br />
          </SplitPanel>
        }
      />
    </HashRouter>
  );
}

export default App;
