import { useLayoutEffect, useState } from 'react';
import './App.css';
import {
  AppLayout,
  SideNavigation,
  HelpPanel,
  SplitPanel,
  TopNavigation,
  Flashbar,
  Icon,
  Link,
} from '@cloudscape-design/components';
import jsonHighlight from '@cloudscape-design/code-view/highlight/json';
import { CodeView } from '@cloudscape-design/code-view';

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import FormBasic from './forms/form-basic';
import SourceCodeView from './SourceCodeView';
import FormWizard from './forms/form-wizard';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [activeHref, setActiveHref] = useState('');
  const [flashMessageContent, setFlashMessageContent] = useState<string | null>(null);

  const [navigationOpen, setNavigationOpen] = useLocalStorage('navigationOpen', true);
  const [toolsOpen, setToolsOpen] = useLocalStorage('toolsOpen', false);
  const [SplitPanelOpen, setSplitPanelOpen] = useLocalStorage('SplitPanelOpen', true);
  const [splitPanelPreferences, setSplitPanelPreferences] = useLocalStorage('splitPanelPreferences', { position: 'side' });

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
          href: '#',
          title: 'React-hook-form-cloudscape demos',
        }}
        utilities={[
          {
            type: 'button',
            text: 'GitHub',
            href: 'https://github.com/abudayah/react-hook-form-cloudscape',
            external: true,
            externalIconAriaLabel: 'GitHub (opens in a new tab)',
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
              console.log(event.detail.href);
              if (!event.detail.external) {
                // event.preventDefault();
                setActiveHref(event.detail.href);
              }
            }}
            items={[
              {
                type: 'section-group',
                title: 'Forms',
                items: [
                  {
                    type: 'link',
                    text: '📝 Basic',
                    href: '#/form-basic',
                  },
                  // {
                  //   type: "link",
                  //   text: "🌀 Dynamic",
                  //   href: "#/form-dynamic"
                  // },
                  {
                    type: 'link',
                    text: '🪄 Wizard',
                    href: '#/form-wizard',
                  },
                ],
              },
              { type: 'divider' },
              // {
              //   type: "section-group",
              //   title: "Components",
              //   items: [
              //     {
              //       type: "link",
              //       text: "Attribute editor",
              //       href: "#/page4"
              //     },
              //     {
              //       type: "link",
              //       text: "Autosuggest",
              //       href: "#/page4"
              //     },
              //   ]
              // },
            ]}
          />
        }
        notifications={
          flashMessageContent && (
            <Flashbar
              items={[
                {
                  type: 'success',
                  dismissible: true,
                  onDismiss: () => setFlashMessageContent(null),
                  header: 'The form submitted data was valid!',
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
            <Route path="/" element={<Navigate to="/form-basic" />} />
          </Routes>
        }
        splitPanelPreferences={splitPanelPreferences}
        onSplitPanelPreferencesChange={(event) => setSplitPanelPreferences(event.detail)}
        splitPanelOpen={SplitPanelOpen}
        onSplitPanelToggle={() => setSplitPanelOpen(!SplitPanelOpen)}
        splitPanel={
          <SplitPanel header="Source code" i18nStrings={{ preferencesConfirm: 'Set' }}>
            <SourceCodeView />
            <br />
            <Link
              href="https://github.com/abudayah/react-hook-form-cloudscape/tree/main/docs/source/src"
              external
              target="_blank"
            >
              <Icon name="script" />{' '}View demos source code on github
            </Link>
            <br />
          </SplitPanel>
        }
      />
    </HashRouter>
  );
}

export default App;
