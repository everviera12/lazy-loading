import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App.jsx";

// styles
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
  </>
);
