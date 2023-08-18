import axios from "axios";
import { useEffect, useState } from "react";
import "./Leaderboard.css";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const res = await axios.get(`https://mockstocks.onrender.com/users`);
    const sortedUsers = res.data.sort((a, b) => b.balance - a.balance);
    setUsers(sortedUsers);
  };

  useEffect(() => {
    getAllUsers();
    console.log('Leaderboard useEffect')
  }, []);

  if (!users) {
    return <div>Loading users...</div>;
  }

  return (
    <div className="leaderboard-container">
      <ul>
        {users.map((user) => (
          <li key={user._id} className="leaderboard-item">
            <div>
              <h2>{user.name}</h2>
              <p>Balance: {user.balance}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
