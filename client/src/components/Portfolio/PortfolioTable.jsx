export default function PortfolioTable({ mockStocksUser }) {
  const { portfolio } = mockStocksUser;
  const tableHeadings = ["Stock Code", "Quantity"];
  return (
    <div className="flex h-full flex-col">
      <h5 className="mb-1 text-white">Holdings</h5>
      <div className="flex-grow bg-white">
        <div className="relative  overflow-x-auto overflow-y-auto  ">
          <table className="w-full text-left text-sm text-gray-900 ">
            <thead className="sticky top-0 bg-gray-200 text-xs  uppercase text-gray-700">
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
                <tr key={index} className="border-b bg-white">
                  <td className="px-6 py-4">{stock.stockCode}</td>
                  <td className="px-6 py-4">{stock.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
