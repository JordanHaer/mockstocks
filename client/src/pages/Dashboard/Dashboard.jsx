import { useState } from "react";
import NavBar from "../../components/Dashboard/NavBar/NavBar";
import Portfolio from "../../components/Dashboard/Portfolio/Portfolio";
import Companies from "../../components/Dashboard/Companies/Companies";
import Leaderboard from "../../components/Dashboard/Leaderboard/Leaderboard";
import "./Dashboard.css";
import CompanyInfo from "../../components/Dashboard/CompanyInfo/CompanyInfo";

export default function Dashboard() {
  const [tab, setTab] = useState("Portfolio");
  const handleTab = (tab) => setTab(tab);
  const [companyInfoID, setCompanyInfoID] = useState("");
  const handleCompanyInfoID = (companyInfoID) => setCompanyInfoID(companyInfoID);
  return (
    <div className="Dashboard-container">
      <NavBar tab={tab} handleTab={handleTab} />
      {tab === "Portfolio" && <Portfolio />}
      {tab === "Leaderboard" && <Leaderboard />}
      {tab === "Companies" && <Companies handleCompanyInfoID={handleCompanyInfoID} handleTab={handleTab} />}
      {tab === "CompanyInfo" && <CompanyInfo companyInfoID={companyInfoID} />}
    </div>
  );
}
