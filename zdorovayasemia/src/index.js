import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
// import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <Provider>
    <App store={store} />
  // </Provider>,
  ,document.getElementById("root")
);

serviceWorker.unregister();
