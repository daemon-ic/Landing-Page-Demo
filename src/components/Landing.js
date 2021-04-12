import "../App.css";
import React from "react";
import Header from "./Header";
import HeroImage from "./HeroImage";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();

  const pageChange = (path) => {
    history.push(path);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Header pageChange={pageChange} />
      <HeroImage />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default Landing;
