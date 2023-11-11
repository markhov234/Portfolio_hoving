// import folks from "../../Images/folks.png";
import AccueilBackInteractive from "./../Organism/AccueilBackInteractive";
import ProjectsData from "./../../BackEnd/data.json";
import { Link } from "react-router-dom";
import OrganismProfil from "../Organism/OrganismProfil";
import OrganismContact from "../Organism/OrganismContact";

const AccueilNews = (props) => {
  // #TODO: Faire du méngage dans cette page
  // #TODO: Réorganiser la structure du projet
  // #TODO:Optimiser les composants pour les mettres plus petits et facile à revenir dedans
  // #TODO: Ajouter un LAZY LOAD pour les images et un LOADING status quand les données chargent
  return (
    <main className="o-accueil-realisation">
      <h1 className="o-header--title">Mon Portfolio</h1>
      <AccueilBackInteractive />
      <section className="o-accueil-realisation-zone">
        <OrganismProfil/>
        {ProjectsData.projets.map((project, index) => (
          <Link
          aria-label={project.name}
            className="o-accueil-realisation-figure"
            to={"projects/" + project.id}
            key={index}
          >
            <figure>
              <img alt={project.name} src={`${project.image.couverture}`}></img>
              <div className="o-accueil-realisation-figcaption">
                Réalisé par
                <span className="o-accueil-realisation-figcaption-span"></span>
                Marc-Antoine Hovington
              </div>
            </figure>
          </Link>
        ))}
        <OrganismContact/>
      </section>
    </main>
  );
};

export default AccueilNews;
