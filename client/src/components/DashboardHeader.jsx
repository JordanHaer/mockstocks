import { Link, useLocation } from "react-router-dom";
import DashboardLogoutButton from "./DashboardLogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function DashboardHeader() {
  const { user } = useAuth0();
  const location = useLocation();
  const headerLinks = ["Portfolio", "Trade", "Leaderboard", "Research"];
  return (
    <div className="border-b-[1px] border-white dark:bg-[#323a56] ">
      <div className="container mx-auto flex-col px-8">
        <div className="flex items-center justify-between">
          <h1 className=" py-4 text-5xl font-bold tracking-tight text-white hover:text-slate-200">
            <Link to="/">Mock$tocks</Link>
          </h1>
          {user ? <img src={user.picture} alt={user.name} className=" h-[40px] rounded-full" /> : <></>}
        </div>
        <div>
          <ul className="flex items-center">
            {headerLinks.map((link) => (
              <Link key={link} to={`/dashboard/${link.toLocaleLowerCase()}`}>
                <li
                  className={`cursor-pointer px-4 py-2 text-xl font-medium text-slate-300  ${
                    location.pathname === `/dashboard/${link.toLocaleLowerCase()}`
                      ? "bg-slate-800"
                      : "hover:bg-slate-600"
                  }`}
                >
                  {link}
                </li>
              </Link>
            ))}
            <DashboardLogoutButton />
          </ul>
        </div>
      </div>
    </div>
  );
}
