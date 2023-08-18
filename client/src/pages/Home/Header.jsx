import { useCookies } from "react-cookie";
import LoginButton from "./LoginButton";
import HomeLogoutButton from "./HomeLogoutButton";
import { Link } from "react-router-dom";

export default function Header() {
  const [cookies] = useCookies([`auth0.${process.env.REACT_APP_AUTH0_CLIENTID}.is.authenticated`]);
  const userLoggedIn = cookies[`auth0.${process.env.REACT_APP_AUTH0_CLIENTID}.is.authenticated`] === "true";
  return (
    <header className="container mx-auto flex max-w-5xl items-center justify-between px-8 py-4">
      <h1 className="text-3xl font-bold leading-tight tracking-tight">MockStocks</h1>
      {userLoggedIn ? (
        <div className="flex items-center gap-6">
          <Link to="/dashboard/portfolio">
            <button className="inline-block rounded  font-bold  duration-150 hover:text-slate-500">
              Dashboard
            </button>
          </Link>
          <HomeLogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </header>
  );
}
