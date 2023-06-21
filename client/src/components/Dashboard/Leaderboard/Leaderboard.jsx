import axios from "axios";
import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    const res = await axios.get(`https://mockstocks.onrender.com/users`);
    console.log(res.data);
    setUsers(res.data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  if (!users) {
    return <div>Loading users...</div>;
  }
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <div>
              <h2>{user.name}</h2>
              <p>{user.balance}</p>
              <div>
                {user.portfolio.map((stock) => (
                  <div key={stock.stockCode}>
                    <p>{stock.stockCode}</p>
                    <p>{stock.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
