import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function LogoutButton() {
  const { logout } = useAuth0();
  return <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</p>;
}
