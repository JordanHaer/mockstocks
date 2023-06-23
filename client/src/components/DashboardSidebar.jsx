import DashboardSidebarLink from "./DashboardSidebarLink";
import LogoutButton from "./LogoutButton";
import CompaniesIcon from "./icons/CompaniesIcon";
import LeaderboardIcon from "./icons/LeaderboardIcon";
import PortfolioIcon from "./icons/PortfolioIcon";

export default function DashboardSidebar({ sidebarVisible, handleTab }) {
  const sidebarLinks = [
    { tabLink: "Portfolio", logoLink: <PortfolioIcon /> },
    { tabLink: "Leaderboard", logoLink: <LeaderboardIcon /> },
    { tabLink: "Companies", logoLink: <CompaniesIcon /> },
  ];
  return (
    <div>
      <aside
        id="logo-sidebar"
        className={`fixed left-0 top-0 z-40 h-screen w-64 pt-20 duration-150 ${
          sidebarVisible ? "translate-x-0" : "-translate-x-full"
        } border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((sidebarLink) => (
              <DashboardSidebarLink
                key={sidebarLink.tabLink}
                tabLink={sidebarLink.tabLink}
                logoLink={sidebarLink.logoLink}
                handleTab={handleTab}
              />
            ))}
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
