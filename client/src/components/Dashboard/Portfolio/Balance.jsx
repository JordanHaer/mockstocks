export default function Balance({ mockStocksUser }) {
  //   const { name, balance } = mockStockUser;
  return (
    <div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 mx-auto">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {mockStocksUser.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Balance:{" "}
        {mockStocksUser.balance.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        })}
      </p>
    </div>
  );
}
