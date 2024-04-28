import ProjectsData from "./../../BackEnd/data.json";
import allIcons from "../ReactHook/importIconsImg";
import ImageHoveredProfil from "./ImageHoveredProfil";
const OrganismProfil = () => {
  const listTechno = ProjectsData.profil[0];
  return (
    <div className="o-accueil-presentation max-width-1600px">
      <h2 className="o-accueil-presentation-title">À propos de moi</h2>
      <div className="o-accueil-presentation-description">
        <div className="o-accueil-presentation-technos">
          <ul className="o-accueil-presentation-technos-list">
            {listTechno.technologie.map((technologie, index) => (
              <li key={index} className="o-accueil-presentation-technos-item">
                <span className="o-accueil-presentation-technos-icon">
                  <img
                    draggable="false"
                    src={allIcons[technologie.techno]}
                    alt=""
                  />
                </span>
                <p>{technologie.techno}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="o-accueil-presentation-image">
          <ImageHoveredProfil />
        </div>
        <div className="o-accueil-presentation-text">
          <p className="o-accueil-presentation-text-subtitle">
            <span>Marc-Antoine Hovington</span>, un véritable touche a tout.
          </p>
          <p>
            {" "}
            J'ai une véritable passion pour la nature et les relations humaines.
            En tant que développeur, je suis constamment motivé à améliorer mes
            compétences et à rester à jour avec les dernières technologies et
            tendances du secteur.
          </p>
          <p>
            Je me démarque par ma polyvalence dans les trois sphères principales
            du programme : le design, l’intégration, et la programmation.
            Au-delà de mes compétences dans ces domaines, je suis une personne
            très intéressée par la psychologie et la nature humaine.{" "}
          </p>
          <p>
            J'apprécie également les défis et je suis capable de travailler de
            manière autonome pour atteindre mes objectifs. Si vous êtes à la
            recherche d'une personne passionnée et dévouée, n'hésitez pas à me
            contacter. Je serais ravi de discuter de mes compétences et de voir
            comment je pourrais contribuer à votre entreprise.
          </p>
        </div>
        <div className="o-accueil-presentation-button">
          <a href="https://github.com/markhov234">En savoir plus sur moi !</a>
        </div>
      </div>
    </div>
  );
};

export default OrganismProfil;
