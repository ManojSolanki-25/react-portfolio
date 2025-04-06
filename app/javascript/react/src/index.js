import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(<Home/>);
  }
});
