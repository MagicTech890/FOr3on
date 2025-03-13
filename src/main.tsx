import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./i18n/i18n";

import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

// إضافة كود لتمكين التمرير
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "auto";
  document.body.style.height = "auto";
  document.documentElement.style.overflow = "auto";
  document.documentElement.style.height = "auto";
});

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
