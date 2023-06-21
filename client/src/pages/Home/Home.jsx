import { useEffect } from "react";
import axios from "axios";
import Header from "../../components/Home/Header/Header";
import Main from "../../components/Home/Main/Main";
import Footer from "../../components/Home/Footer/Footer";
import "./Home.css";

export default function Home() {
  const startServer = async () => {
    await axios.get(`https://mockstocks.onrender.com/`);
  };
  useEffect(() => {
    startServer();
  }, []);

  return (
    <div className="Home-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
