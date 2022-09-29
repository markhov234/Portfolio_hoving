import Header from "../Header.js";
import AccueilNews from "./AccueilNews";
import Footer from "./../Organism/Footer";
import React from "react";
import useViewport from "./../ReactHook/UseViewport.js";
const Accueil = (props) => {
  // Définis la function on Click ici

  const nbrArticle = Math.round(8 / 2 / 2);
  //NbrArticle divise le nombre d'article recu en deux et par la suite le redivise en deux pour donner les nombre de copie dans le background !

  const { screenWidth } = useViewport();
  return (
    <div className="p-accueil">
      <Header
        className="o-header margin"
        title="Mon Portfolio"
        screenWidth={screenWidth}
      />
      <div className="p-accueil-content">
        <AccueilNews screenWidth={screenWidth} intArticle={nbrArticle} />
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
