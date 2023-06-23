export default function DashboardSidebarLink({ tabLink, logoLink, handleTab }) {
  return (
    <li>
      <button
        onClick={() => handleTab(tabLink)}
        className="flex w-full items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        {logoLink}
        <span className="ml-6">{tabLink}</span>
      </button>
    </li>
  );
}
