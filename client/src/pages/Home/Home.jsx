import { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import FAQ from "./FAQ";

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
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <FAQ />
      <Footer />
    </div>
  );
}
