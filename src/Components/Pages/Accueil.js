import Header from "../Header.js";
import AccueilNews from "./AccueilNews";
// import AccueilBackInteractive from "./../Organism/AccueilBackInteractive";

import Footer from "./../Organism/Footer";
import React from "react";
import useViewport from "./../ReactHook/UseViewport.js";
const Accueil = (props) => {
  const { screenWidth } = useViewport();
  return (
    <div className="p-accueil">
      <Header
        className="o-header margin"
        title="Mon Portfolio"
        screenWidth={screenWidth}
      />
      <div className="p-accueil-content">
        <AccueilNews screenWidth={screenWidth} />
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
