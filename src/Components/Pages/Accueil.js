import Header from "../Header.js";
import AccueilNews from "./AccueilNews";
import backgroundMauve from "../../Images/background_mauve.svg";
import backgroundJaune from "../../Images/background_jaune.svg";
import { useEffect, useState } from "react";
const Accueil = (props) => {
  // Définis la function on Click ici
  const background_mauve = backgroundMauve;
  const background_jaune = backgroundJaune;
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="p-accueil">
      <Header className="o-header margin" title="Mon Portfolio" />
      <div className="p-accueil-content">
        <AccueilNews />
        <div className="p-accueil-background">
          <img
            style={{ transform: `translateY(${offsetY * 0.35}px)` }}
            className="o-imageBackground--principal"
            src={background_mauve}
            alt=""
          ></img>
          <img
            className="o-imageBackground--principal"
            src={background_jaune}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
