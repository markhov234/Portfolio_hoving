import Header from "../Header.js";
import AccueilNews from "./AccueilNews";
const Accueil = (props) => {
  // Définis la function on Click ici
  return (
    <div className="p-accueil">
      <Header className="o-header margin" title="Le Portfolio" />
      <AccueilNews />
      {/* TODO- Rajouter la section pour les sites ou mes oeuvres en créant le JS, mes publications */}
    </div>
  );
};

export default Accueil;
