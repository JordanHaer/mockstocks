import { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Main from "./Main/Main";
import Footer from "./Footer";

export default function Home() {
  const startServer = async () => {
    await axios.get(`https://mockstocks.onrender.com/`);
  };
  useEffect(() => {
    startServer();
  }, []);

  return (
    <div className="flex-col font-sans">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
