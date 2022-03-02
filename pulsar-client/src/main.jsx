import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./components/AppRouter";
import "./index.css";

import * as socket from "./services/socket.service";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
