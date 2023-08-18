export default function PortfolioTransactionsTable({ mockStocksUser }) {
  const tableHeadings = ["Type", "Stock Code", "Price", "Quantity", "Date"];
  const { transactions } = mockStocksUser;
  const sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return (
    <div className="flex h-full flex-col">
      <h5 className="mb-1 text-white">Transactions</h5>
      <div className="flex-grow bg-white">
        <div className=" relative  max-h-[410.5px] overflow-x-auto overflow-y-auto  ">
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
              {sortedTransactions.map((transaction, index) => (
                <tr key={index} className="border-b bg-white ">
                  <td className="px-6 py-4">{transaction.type}</td>
                  <td className="px-6 py-4">{transaction.stockCode}</td>
                  <td className="px-6 py-4">
                    {transaction.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                  </td>
                  <td className="px-6 py-4">{transaction.quantity}</td>
                  <td className="px-6 py-4">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
