import LogoutButton from "../LogoutButton/LogoutButton";
import "./NavBar.css";

export default function NavBar({ tab, handleTab }) {
  const tabOptions = ["Portfolio", "Leaderboard", "Companies"];
  return (
    <div className="NavBar-container">
      <h1>MockStocks</h1>
      <ul>
        {tabOptions.map((tabOption) => (
          <li key={tabOption} onClick={() => handleTab(tabOption)} className={tab === tabOption ? "selected" : ""}>
            {tabOption}
          </li>
        ))}
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}
