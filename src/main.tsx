import { CssVarsProvider } from "@mui/joy";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { useCustomTheme } from "./hooks/useCustomTheme.hook";
import "./index.css";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <CssVarsProvider theme={useCustomTheme()}>
      <App />
    </CssVarsProvider>
  </Provider>
);
