import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/context";
import ScrollToTop from "./utils/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
);
