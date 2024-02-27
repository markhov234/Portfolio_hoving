import ProjectsData from "./../../BackEnd/data.json";
import allIcons from "../ReactHook/importIconsImg";
import { useState } from "react";
import UpwardArrow from "../../Images/upward-arrow.png";
import { useInView } from "react-intersection-observer";

const OrganismProject = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const loadPopUp = (idProject) => {
    setVisiblePopup(true);
    setCurrentProject(ProjectsData.projets[idProject - 1]);
  };
  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };
  const consoleLog = (idProject) => {
    console.log(idProject);
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section className="o-accueil-realisation-zone max-width-1600px" ref={ref}>
      {visiblePopup && (
        <div className="o-accueil-realisation-popup">
          {currentProject && <p>{currentProject.name}</p>}
        </div>
      )}
      <h2 className="o-accueil-realisation-zone-title">Mes projets</h2>

      {ProjectsData.projets.slice(0, visibleProjects).map((project, index) => (
        <div
          key={index}
          className={`o-accueil-realisation-project ${inView ? "in-view" : ""}`}
        >
          <h3 className="o-accueil-realisation-project-title">
            {project.name}
          </h3>
          <ul className="o-accueil-realisation-project-techno-list">
            {project.technologie.map((technologie, indexTechno) => (
              <li
                className="o-accueil-presentation-technos-item"
                key={indexTechno}
              >
                <span className="o-accueil-presentation-technos-icon">
                  <img draggable="false" src={allIcons[technologie]} alt="" />
                </span>
                <p>{technologie}</p>
              </li>
            ))}
          </ul>
          <div className="o-accueil-realisation-project-description">
            <p> {project.descriptionShort}</p>
            <figure className="o-accueil-realisation-project-figure">
              <img
                className="o-accueil-realisation-project-img"
                alt={project.name}
                src={`${project.image.couverture}`}
              ></img>
            </figure>
          </div>

          <div className="o-accueil-realisation-project-button">
            <div
              onClick={() => loadPopUp(project.id)}
              className="o-accueil-realisation-project-button-project"
              id={project.id}
            >
              Consulter le projet
            </div>
            <a
              href="https://github.com/markhov234"
              className="o-accueil-realisation-project-button-github"
            >
              <p>Consulter le github</p>
              <span>
                <img alt="arrow-up" src={UpwardArrow}></img>
              </span>
            </a>
          </div>
        </div>
      ))}
      {visibleProjects < ProjectsData.projets.length && (
        <button
          className="o-accueil-realisation-project-buttonEnd"
          onClick={loadMoreProjects}
        >
          <span>
            {" "}
            <img alt="arrow upward" src={UpwardArrow}></img>
          </span>{" "}
        </button>
      )}
    </section>
  );
};

export default OrganismProject;
