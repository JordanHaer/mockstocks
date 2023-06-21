import "./Company.css";

export default function Company({
  company: { stockCode, companyName, stockPrice, _id },
  handleCompanyInfoID,
  handleTab,
}) {
  const percentageChange = (previousValue, currentValue) => {
    const change = currentValue - previousValue;
    const percentageChange = (change / previousValue) * 100;
    const plusMinus = change > 0 ? "+" : change < 0 ? "-" : "";
    return [`${plusMinus} ${Math.abs(percentageChange).toFixed(2)}`, percentageChange];
  };
  return (
    <div
      className="Company-container"
      onClick={() => {
        handleTab("CompanyInfo");
        handleCompanyInfoID(_id);
      }}
    >
      <div className="Company-name">
        <p>{stockCode}</p>
        <p>{companyName}</p>
      </div>
      <div className="Company-price">
        <p>
          {stockPrice[1].closePrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <span
          className={`percentage-change-cell ${
            percentageChange(stockPrice[0].closePrice, stockPrice[1].closePrice)[1] > 0 ? "up" : "down"
          }`}
        >
          {percentageChange(stockPrice[0].closePrice, stockPrice[1].closePrice)[0]}%
        </span>
      </div>
    </div>
  );
}
