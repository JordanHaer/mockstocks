import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function DashboardLogoutButton() {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="cursor-pointer px-4 py-2 text-xl font-medium text-slate-300 hover:bg-slate-600"
    >
      Log Out
    </button>
  );
}
