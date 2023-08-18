import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Balance from "../../../components/Trade/Balance";
import FormContainer from "../../../components/Trade/FormContainer";

export default function Trade() {
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
    if (!isLoading) {
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
    const USDBalance = mockStocksUser.balance.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return (
      <div className="container mx-auto px-8 py-4">
        <Balance USDBalance={USDBalance} />
        <FormContainer mockStocksUser={mockStocksUser}/>
      </div>
    );
  }
}
