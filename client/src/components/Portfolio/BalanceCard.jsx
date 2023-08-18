export default function BalanceCard({ mockStocksUser }) {
  //   const { name, balance } = mockStockUser;
  return (
    <div className="flex h-full flex-col">
      <h5 className="mb-1 text-white">Overview</h5>
      <div className="flex-grow  bg-white p-4  ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{mockStocksUser.name}</h5>
        <p className="font-normal text-gray-700 ">
          Balance:{" "}
          {mockStocksUser.balance.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </div>
  );
}
