import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import PortfolioTransactionsTable from "../../../components/Portfolio/PortfolioTransactionsTable";
import BalanceCard from "../../../components/Portfolio/BalanceCard";
import PortfolioTable from "../../../components/Portfolio/PortfolioTable";
import LoadingSpinner from "../../../components/LoadingSpinner";

export default function Portfolio() {
  const { user, isLoading } = useAuth0();
  const [mockStocksUser, setMockStocksUser] = useState({});
  useEffect(() => {
    const getUserAccount = async () => {
      const params = { email: user.email };
      const existingAccountRes = await axios.get(`https://mockstocks.onrender.com/user`, { params: params });
      if (existingAccountRes.data === "no user with this email") {
        const requestBody = { email: user.email, name: user.name };
        const newAccountRes = await axios.post(`https://mockstocks.onrender.com/user`, requestBody);
        setMockStocksUser(newAccountRes.data);
      } else {
        setMockStocksUser(existingAccountRes.data);
      }
    };
    if (!isLoading && user) {
      getUserAccount();
    }
  }, [user, isLoading]);
  if (Object.keys(mockStocksUser).length === 0) {
    return (
      <div className="flex items-center justify-center pt-16">
        <LoadingSpinner />
      </div>
    );
  } else {
    return (
      <div className="container mx-auto px-8 py-4">
        <div className="grid grid-cols-3  gap-4">
          <div className="col-span-1 row-span-1">
            <BalanceCard mockStocksUser={mockStocksUser} />
          </div>
          <div className="col-span-2 row-span-3">
            <PortfolioTransactionsTable mockStocksUser={mockStocksUser} />
          </div>
          <div className="col-span-1 row-span-2">
            <PortfolioTable mockStocksUser={mockStocksUser} />
          </div>
          <div className="col-span-3 row-span-1">
            <PortfolioTransactionsTable mockStocksUser={mockStocksUser} />
          </div>
        </div>
      </div>
    );
  }
}
