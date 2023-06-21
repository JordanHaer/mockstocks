import { useEffect, useState } from "react";
import axios from "axios";
import "./CompanyInfo.css";
import LineChart from "../LineChart/LineChart";
import { useAuth0 } from "@auth0/auth0-react";

export default function CompanyInfo({ companyInfoID }) {
  const { user } = useAuth0();
  const [companyInfo, setCompanyInfo] = useState({});
  const [graphTime, setGraphTime] = useState("1m");
  const [quantity, setQuantity] = useState(0);
  const buyStock = async () => {
    try {
      const params = { email: user.email };
      const existingAccountRes = await axios.get(`https://mockstocks.onrender.com/user`, { params: params });
      const res = await axios.put(`https://mockstocks.onrender.com/user/buy/${existingAccountRes.data._id}`, {
        stockCode: companyInfo.stockCode,
        quantity: quantity,
      });
      console.log(res.data);
      console.log('transaction complete')
      // Handle successful purchase
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };
  const getCompanyInfo = async (ID) => {
    const res = await axios.get(`https://mockstocks.onrender.com/company/${ID}`);
    setCompanyInfo(res.data);
  };
  const percentageChange = (previousValue, currentValue) => {
    const change = currentValue - previousValue;
    const percentageChange = (change / previousValue) * 100;
    const plusMinus = change > 0 ? "+" : change < 0 ? "-" : "";
    return [`${plusMinus} ${Math.abs(percentageChange).toFixed(2)}`, percentageChange];
  };
  const handleGraphTime = (time) => setGraphTime(time);
  useEffect(() => {
    getCompanyInfo(companyInfoID);
  }, [companyInfoID]);

  if (Object.keys(companyInfo).length === 0) {
    return <div className="CompanyInfo-container"></div>;
  } else {
    return (
      <div className="CompanyInfo-container">
        <div className="info-container">
          <div className="title-container">
            <div className="name-container">
              <h2>{companyInfo.companyName}</h2>
              <p>{companyInfo.stockCode}</p>
            </div>
            <div className="current-price-container">
              <p>
                {companyInfo.currentPrices[companyInfo.currentPrices.length - 1].closePrice.toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}
              </p>
              <p>
                {
                  percentageChange(
                    companyInfo.currentPrices[companyInfo.currentPrices.length - 2].closePrice,
                    companyInfo.currentPrices[companyInfo.currentPrices.length - 1].closePrice
                  )[0]
                }
              </p>
            </div>
          </div>
          <div className="address">
            <p>Company HQ Address</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                companyInfo.address.address1
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{companyInfo.address.address1}</p>
            </a>
            <p>{companyInfo.address.city}</p>
            <p>{companyInfo.address.postal_code}</p>
            <p>{companyInfo.address.state}</p>
          </div>
          <p>{companyInfo.description}</p>
          <p>Number of employees: {companyInfo.total_employees}</p>
          <p>Company list date: {companyInfo.list_date}</p>
          <p>
            Company website:&nbsp;
            <a rel="noopener noreferrer" href={companyInfo.homepage_url} target="_blank">
              {companyInfo.homepage_url}
            </a>
          </p>
          <button onClick={() => handleGraphTime("1m")}>1 Month</button>
          <button onClick={() => handleGraphTime("6m")}>6 Months</button>
          <button onClick={() => handleGraphTime("1y")}>1 Year</button>
          <button onClick={() => handleGraphTime("5y")}>5 Years</button>
          <button onClick={() => handleGraphTime("max")}>Max</button>
          <form>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button type="button" onClick={buyStock}>
              Buy Stock
            </button>
          </form>
        </div>
        <div className="chart-container">
          <LineChart graphTime={graphTime} companyInfo={companyInfo} />
        </div>
      </div>
    );
  }
}
