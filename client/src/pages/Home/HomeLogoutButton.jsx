import { useAuth0 } from "@auth0/auth0-react";

export default function HomeLogoutButton() {
  const { logout } = useAuth0();
  return (
    <button
      className="inline-block rounded bg-blue-800 px-6 py-2 font-bold text-white duration-200 hover:bg-blue-600"
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      Log Out
    </button>
  );
}
