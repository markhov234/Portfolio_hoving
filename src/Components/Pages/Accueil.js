import Header from "../Header.js";
import AccueilNews from "./AccueilNews";
import AccueilBack from "../Organism/AccueilBack";
const Accueil = (props) => {
  // Définis la function on Click ici

  const nbrArticle = 8 / 2 / 2;
  //NbrArticle divise le nombre d'article recu en deux et par la suite le redivise en deux pour donner les nombre de copie dans le background !

  return (
    <div className="p-accueil">
      <Header className="o-header margin" title="Mon Portfolio" />
      <div className="p-accueil-content">
        <AccueilNews />
        <AccueilBack intArticle={nbrArticle} />
      </div>
    </div>
  );
};

export default Accueil;
