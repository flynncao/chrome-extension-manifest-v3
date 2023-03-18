import React from "react";

import { createRoot } from "react-dom/client";
import Dashboard from "./dashboard";

function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error("Can not found AppContainer");
  }
  const root = createRoot(appContainer);
  root.render(<Dashboard />);
}

init();
