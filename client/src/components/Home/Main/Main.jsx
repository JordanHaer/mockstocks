import "./Main.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import FAQ from "./FAQ/FAQ";

export default function Main() {
  return (
    <div className="Main-container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <FAQ />
    </div>
  );
}
