import Portfolio from "./Portfolio/Portfolio";
import Leaderboard from "../../components/Dashboard/Leaderboard/Leaderboard";
import CompanyInfo from "../../components/Dashboard/CompanyInfo/CompanyInfo";
import DashboardHeader from "../../components/DashboardHeader";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useCookies } from "react-cookie";
import Trade from "./Trade/Trade";
import DashboardFooter from "../../components/DashboardFooter";
import Research from "./Research/Research";

export default function Dashboard() {
  const [cookies] = useCookies([`auth0.${process.env.REACT_APP_AUTH0_CLIENTID}.is.authenticated`]);
  const userLoggedIn = cookies[`auth0.${process.env.REACT_APP_AUTH0_CLIENTID}.is.authenticated`] === "true";
  const { loginWithRedirect } = useAuth0();
  setTimeout(() => !userLoggedIn && loginWithRedirect(), 150);
  return (
    userLoggedIn && (
      <main className="flex min-h-screen flex-col">
        <DashboardHeader />
        <div className="flex-grow dark:bg-[#323a56]">
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/research" element={<Research />} />
            <Route path="/company/:id" element={<CompanyInfo />} />
          </Routes>
        </div>
        <DashboardFooter/>
      </main>
    )
  );
}
