import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { _encatch } from "@encatch/web-sdk";

// Initialize Encatch once at app startup
_encatch.init("en_ZpxFYxWB2FqZauaCH7iFvQYjTGddBzMHgQeEg6LMpdceUnLAviRWqpLJUMzXHZhuJfCc0oUgxjIm0Qi_1938ebdf");
_encatch.startSession();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
