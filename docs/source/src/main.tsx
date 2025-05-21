import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "@cloudscape-design/global-styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>,
);
