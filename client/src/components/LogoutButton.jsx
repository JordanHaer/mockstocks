import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="flex w-full items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    >
      <svg
        className="h-6 w-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
        />
      </svg>
      <span className="ml-6">Log Out</span>
    </button>
  );
}
