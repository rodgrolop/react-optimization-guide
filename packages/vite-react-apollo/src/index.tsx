import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import Main from "./main/Main";

import "./i18n/i18nProvider";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
