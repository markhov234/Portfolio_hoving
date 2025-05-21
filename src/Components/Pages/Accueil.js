import AccueilNews from "../Organism/AccueilNews.js";
import React from "react";
import Menu from "../Menu/Menu.js";

const Accueil = () => {
  return (
    <div className="p-accueil">
      <Menu className="p-accueil-menu" />
      <div className="p-accueil-content">
        <AccueilNews />
      </div>
    </div>
  );
};

export default Accueil;
