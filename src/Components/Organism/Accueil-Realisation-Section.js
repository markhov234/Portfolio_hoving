import allIcons from "../ReactHook/importIconsImg";

const AccueilRealisationSection = ({ project }) => {
  // Définis la function on Click ici

  console.log("Je suis dans le Accueil Realisation Section", project);

  return (
    <div class="realisation-section">
      <div className="realisation-section-header">
        <div className="img">
          <img src={`${project.image.couverture}`} alt={project.name} />
        </div>
        <div className="realisation-section-description">
          <h3 className="realisation-title">{project.name}</h3>
          <p>{project.descriptionShort}</p>
        </div>
      </div>
      <div className="realisation-section-details">
        <div className="realisation-section-techno">
          <p className="h4">Stacks Utilisées</p>
          <ul className="o-accueil-realisation-project-techno-list">
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
          <div className="o-accueil-presentation-button">
            <a href="https://github.com/markhov234">En savoir plus sur moi !</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccueilRealisationSection;
