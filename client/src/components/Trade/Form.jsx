export default function Form({ handleAction, handleStockQuantity, handleTrade }) {
  return (
    <div>
      <div className="mt-4 flex items-center gap-12">
        <div className="w-1/4">
          <label htmlFor="countries" className="mb-2 block">
            Action
          </label>
          <select
            onChange={handleAction}
            required
            id="countries"
            className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none"
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div className="w-1/4">
          <div>
            <label htmlFor="numberStocks" className="mb-2 block ">
              Stock Quantity
            </label>
            <input
              type="number"
              id="numberStocks"
              className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none "
              placeholder="0"
              required
              min={0}
              max={999}
              onChange={handleStockQuantity}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={handleTrade}
          className="border border-blue-700 bg-blue-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
