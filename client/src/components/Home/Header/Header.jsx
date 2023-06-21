import LoginButton from "../LoginButton/LoginButton";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header-container">
      <div className="Header-content">
        <h1>MockStocks</h1>
        <ul>
          <li>
            <LoginButton />
          </li>
        </ul>
      </div>
    </div>
  );
}
