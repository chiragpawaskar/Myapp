import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { _encatch } from "@encatch/web-sdk";

_encatch.init(process.env.REACT_APP_ENCATCH_API_KEY,{apiBaseUrl: "https://app.uat.encatch.com"});
_encatch.startSession();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);