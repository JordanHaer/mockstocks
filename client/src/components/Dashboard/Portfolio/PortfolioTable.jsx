export default function PortfolioTable({ mockStocksUser }) {
  const { portfolio } = mockStocksUser;
  const tableHeadings = ["Stock Code", "Quantity"];
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-4 pl-1 text-2xl font-extrabold text-white">Portfolio:</h2>
      <div className="relative  max-h-60  overflow-x-auto overflow-y-auto rounded-xl border border-gray-700">
        <table className="w-full text-left text-sm text-gray-400 ">
          <thead className="sticky top-0 bg-gray-700 text-xs  uppercase text-gray-400">
            <tr>
              {tableHeadings.map((tableHeading, index) => (
                <th key={index} className="px-6 py-3">
                  {tableHeading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {portfolio.map((stock, index) => (
              <tr key={index} className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <td className="px-6 py-4">{stock.stockCode}</td>
                <td className="px-6 py-4">{stock.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
