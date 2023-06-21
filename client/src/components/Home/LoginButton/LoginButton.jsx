import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return <p onClick={() => loginWithRedirect()}>Log In</p>;
}
