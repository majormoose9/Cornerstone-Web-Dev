import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import App from "./App";

// Disable browser scroll restoration before React mounts
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// On a hard reload, strip any hash from the URL and reset scroll to top.
// Without this, a URL like /#how-it-works reloads mid-page because
// ScrollToHash sees the hash and scrolls there.
if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
