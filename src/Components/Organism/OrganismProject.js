import ProjectsData from "./../../BackEnd/data.json";
import { useState } from "react";
import UpwardArrow from "../../Images/upward-arrow.png";
import allIcons from "../ReactHook/importIconsImg";

import AccueilRealisationSection from "./Accueil-Realisation-Section";

const OrganismProject = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };
  return (
    <section className="o-accueil-realisation-zone max-width-1600px">
      <h2 className="o-accueil-realisation-zone-title">Mes projets</h2>

      {ProjectsData.projets.slice(0, visibleProjects).map((project, index) => (
        // <div key={index} className={`o-accueil-realisation-project`}>
        //   <h3 className="o-accueil-realisation-project-title">
        //     {project.name}
        //   </h3>
        //   <ul className="o-accueil-realisation-project-techno-list">
        //     {project.technologie.map((technologie, indexTechno) => (
        //       <li
        //         className="o-accueil-presentation-technos-item"
        //         key={indexTechno}
        //       >
        //         <span className="o-accueil-presentation-technos-icon">
        //           <img draggable="false" src={allIcons[technologie]} alt="" />
        //         </span>
        //         <p>{technologie}</p>
        //       </li>
        //     ))}
        //   </ul>
        //   <div className="o-accueil-realisation-project-description">
        //     <p> {project.descriptionShort}</p>
        //     <figure className="o-accueil-realisation-project-figure">
        //       <img
        //         className="o-accueil-realisation-project-img"
        //         alt={project.name}
        //         src={`${project.image.couverture}`}
        //       ></img>
        //     </figure>
        //   </div>

        //   <div className="o-accueil-realisation-project-button">
        //     <div
        //       onClick={() => console.log("allo")}
        //       className="o-accueil-realisation-project-button-project"
        //       id={project.id}
        //     >
        //       Consulter le projet
        //     </div>
        //     <a
        //       href={`${
        //         project.url_github
        //           ? project.url_github
        //           : "https://github.com/markhov234"
        //       }`}
        //       className="o-accueil-realisation-project-button-github"
        //     >
        //       <p>Consulter le github</p>
        //       <span>
        //         <img alt="arrow-up" src={UpwardArrow}></img>
        //       </span>
        //     </a>
        //   </div>
        // </div>
        <AccueilRealisationSection key={index} project={project} />
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
