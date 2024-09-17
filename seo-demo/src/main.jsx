import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </HelmetProvider>
);
