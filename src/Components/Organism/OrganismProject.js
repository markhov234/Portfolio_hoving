import ProjectsData from "./../../BackEnd/data.json";
import allIcons from "../ReactHook/importIconsImg";
import { useState } from "react";
import UpwardArrow from "../../Images/upward-arrow.png";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

const OrganismProject = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [visiblePopup,setVisiblePopup] = useState(false)
  const loadMoreProjects = ()=>{
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  }
    // Use useInView outside the map callback
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
  return (
    <section className="o-accueil-realisation-zone max-width-1600px" ref={ref}>
      <h2 className="o-accueil-realisation-zone-title">Mes projets</h2>

      {ProjectsData.projets.slice(0, visibleProjects).map((project, index) => (
        <div
          key={index}
          className={`o-accueil-realisation-project ${inView ? 'in-view' : ''}`}
        >
        <h3 className="o-accueil-realisation-project-title">
          {project.name}
        </h3>
        <ul className="o-accueil-realisation-project-techno-list">
          {project.technologie.map(
            (technologie, indexTechno) => (
              <li
                className="o-accueil-presentation-technos-item"
                key={indexTechno}
              >
                <span className="o-accueil-presentation-technos-icon">
                  <img
                    draggable="false"
                    src={allIcons[technologie]}
                    alt=""
                  />
                </span>
                <p>{technologie}</p>
              </li>
            )
          )}
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
          <Link
            aria-label={project.name}
            className="o-accueil-realisation-project-button-project"
            to={"projects/" + project.id}
          >
            <p>Consulter le projet</p>
          </Link>
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
    )
)}
      {visibleProjects < ProjectsData.projets.length && (
    <button className="o-accueil-realisation-project-buttonEnd" onClick={loadMoreProjects}><span>  <img alt="arrow upward" src={UpwardArrow}></img></span> </button>
  )}
  </section>
  );
};

export default OrganismProject;
