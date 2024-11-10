import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routercustom from "./Router";
import { Provider } from "react-redux";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import accountStore from "./redux/store/account/account";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={accountStore}>
    <GoogleOAuthProvider clientId="1023741548392-5g6gb47tufm1e9e55l0c7vt38eb6j134.apps.googleusercontent.com">
      <BrowserRouter>
        <Routercustom></Routercustom>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);
