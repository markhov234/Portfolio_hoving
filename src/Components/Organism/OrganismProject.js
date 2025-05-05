import ProjectsData from "./../../BackEnd/data.json";
import { useState } from "react";
import UpwardArrow from "../../Images/upward-arrow.png";

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
