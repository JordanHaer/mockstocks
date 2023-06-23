import { useState } from "react";
import Portfolio from "../components/Dashboard/Portfolio/Portfolio";
import Companies from "../components/Dashboard/Companies/Companies";
import Leaderboard from "../components/Dashboard/Leaderboard/Leaderboard";
import CompanyInfo from "../components/Dashboard/CompanyInfo/CompanyInfo";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

export default function Dashboard() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [tab, setTab] = useState("Portfolio");
  const [companyInfoID, setCompanyInfoID] = useState("");
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const handleTab = (tab) => setTab(tab);
  const handleCompanyInfoID = (companyInfoID) => setCompanyInfoID(companyInfoID);
  return (
    <main>
      <DashboardHeader toggleSidebar={toggleSidebar} />
      <DashboardSidebar sidebarVisible={sidebarVisible} handleTab={handleTab} />
      <div
        className={`fixed mt-16 h-[calc(100vh-4rem)]  overflow-y-auto bg-red-600 duration-150 ${
          sidebarVisible ? "ml-64 w-[calc(100vw-16rem)]" : "ml-0 w-screen"
        }`}
      >
        {tab === "Portfolio" && <Portfolio />}
        {tab === "Leaderboard" && <Leaderboard />}
        {tab === "Companies" && <Companies handleCompanyInfoID={handleCompanyInfoID} handleTab={handleTab} />}
        {tab === "CompanyInfo" && <CompanyInfo companyInfoID={companyInfoID} />}
      </div>
    </main>
  );
}
