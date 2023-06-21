import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./Portfolio.css";

export default function Portfolio() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [mockStocksUser, setMockStocksUser] = useState({});
  const [selectedStockCode, setSelectedStockCode] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const getUserAccount = async () => {
      const params = { email: user.email };
      const existingAccountRes = await axios.get(`https://mockstocks.onrender.com/user`, { params: params });
      console.log(existingAccountRes.data);
      if (existingAccountRes.data === "no user with this email") {
        const requestBody = { email: user.email, name: user.name };
        const newAccountRes = await axios.post(`https://mockstocks.onrender.com/user`, requestBody);
        console.log(newAccountRes.data);
        setMockStocksUser(newAccountRes.data);
      } else {
        setMockStocksUser(existingAccountRes.data);
      }
    };

    if (isAuthenticated && user) {
      getUserAccount();
    }
  }, [isAuthenticated, user]);

  const handleStockCodeChange = (e) => {
    setSelectedStockCode(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSellStock = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`https://mockstocks.onrender.com/user/sell/${mockStocksUser._id}`, {
        stockCode: selectedStockCode,
        quantity: quantity,
      });
      console.log(res.data);
      console.log("stock sold");
      // Handle successful sale
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  if (isLoading || Object.keys(mockStocksUser).length === 0) {
    return <div className="Portfolio-container">Loading ...</div>;
  }

  return (
    isAuthenticated &&
    Object.keys(mockStocksUser).length > 0 && (
      <div className="Portfolio-container">
        <h2>{mockStocksUser.name}</h2>
        <p>{mockStocksUser.email}</p>
        <p>
          Current Balance: {mockStocksUser.balance.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        </p>

        <div>
          <h3>Portfolio:</h3>
          <table>
            <thead>
              <tr>
                <th>Stock Code</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {mockStocksUser.portfolio.map((item, index) => (
                <tr key={index}>
                  <td>{item.stockCode}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSellStock}>
          <div>
            <label htmlFor="stockCode">Stock Code:</label>
            <select id="stockCode" value={selectedStockCode} onChange={handleStockCodeChange}>
              <option value="">Select Stock Code</option>
              {mockStocksUser.portfolio.map((item) => (
                <option key={item.stockCode} value={item.stockCode}>
                  {item.stockCode}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} />
          </div>
          <button type="submit">Sell Stock</button>
        </form>

        <div className="trans">
          <h3>Transactions:</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Stock Code</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {mockStocksUser.transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.type}</td>
                  <td>{transaction.stockCode}</td>
                  <td>{transaction.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
                  <td>{transaction.quantity}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
}
