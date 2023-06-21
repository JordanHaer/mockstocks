import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./reset.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-plo6kyrzao6d0wxd.us.auth0.com"
      clientId="GimlhL9MUpwhUtfJbtv6L5CzvFYyUekG"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/dashboard`,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
