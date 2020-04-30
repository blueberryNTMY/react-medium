import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/currentUser";
import CurrentUserChecker from "./components/CurrentUserChecker/CurrentUserChecker";

const app = (
  <CurrentUserProvider>
    <CurrentUserChecker>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrentUserChecker>
  </CurrentUserProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
