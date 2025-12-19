import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

/* ========== REDUX PROVIDER & STORE IMPORT ========== */
import { Provider } from "react-redux";
import store from "./app/store.js";

/* ========== APP IMPORT ========== */
import App from "./App.jsx";

/* ========== GLOBAL CSS ========== */
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
