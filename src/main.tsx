import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./Context/ThemeContext/ThemeProvider";

import ScrollToTop from "./utils/utils";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider>
        {" "}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
