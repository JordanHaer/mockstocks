export default function PortfolioTransactionsTable({ mockStocksUser }) {
  const { transactions } = mockStocksUser;
  const tableHeadings = ["Type", "Stock Code", "Price", "Quantity", "Date"];
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-4 text-2xl font-extrabold text-white pl-1">Transactions</h2>
      <div className="relative  max-h-105  overflow-x-auto overflow-y-auto rounded-xl border border-gray-700">
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
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
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
  );
}
