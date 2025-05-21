import { Link } from "react-router-dom";
import allIcons from "../ReactHook/importIconsImg";

const AccueilRealisationSection = ({ project }) => {
  // Définis la function on Click ici

  console.log("Je suis dans le Accueil Realisation Section", project);

  return (
    <div className="realisation-section">
      <div className="realisation-section-header">
        <div className="img">
          <img src={`${project.image.couverture}`} alt={project.name} />
        </div>
        <div className="realisation-section-description">
          <h3 className="realisation-title">{project.name}</h3>
          <p>{project.descriptionShort}</p>
          <Link
            className="realisation-section-button"
            to={`/project/${project.id}`}
          >
            <span className="realisation-section-button-text">
              Voir le projet !
            </span>
          </Link>
        </div>
      </div>
      <div className="realisation-section-details">
        <div className="realisation-section-techno">
          <p className="h4">Stacks Utilisées</p>
          <ul className="o-accueil-realisation-project-techno-list .realisation">
            {project.technologie.map((technologie, indexTechno) => (
              <li
                className="o-accueil-presentation-technos-item"
                key={indexTechno}
              >
                <span className="o-accueil-presentation-technos-icon">
                  <img draggable="false" src={allIcons[technologie]} alt="" />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="realisation-section-function">
          <p className="h4">Fonctionnaités clés</p>
          <ul className="">
            {project.function.map((functions, indexFunction) => (
              <li className="" key={indexFunction}>
                {functions}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccueilRealisationSection;
