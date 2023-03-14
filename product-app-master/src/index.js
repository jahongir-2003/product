import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "styles/index.css";
import App from "./App";
import GlobalContextProvider from "context/GlobalContextProvider";
import { BrowserRouter } from "react-router-dom";

const app = (
  <BrowserRouter>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
