import Header from "../Header.js";
const Accueil = (props) => {
  // Définis la function on Click ici
  return (
    <accueil className="p-accueil">
      <Header className="o-header" title="Le Portfolio" />
      {/* TODO- Rajouter la section pour les sites ou mes oeuvres en créant le JS, mes publications */}
    </accueil>
  );
};

export default Accueil;
