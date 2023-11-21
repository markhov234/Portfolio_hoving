import ProjectsData from "./../../BackEnd/data.json";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import allIcons from "../ReactHook/importIconsImg";
import UpwardArrow from "../../Images/upward-arrow.png";

const AccueilProject = (props) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [timeVisiblePopup, setTimeVisiblePopup] = useState(false);

  const loadPopUp = (idProject) => {
    setVisiblePopup(true);
    setCurrentProject(ProjectsData.projets[idProject - 1]);
    setTimeVisiblePopup(false)
  };

  const closePopUp = () => {
    setTimeVisiblePopup(true)
    // Add a delay to allow the exit animation to play before removing the "visible" class
    setTimeout(() => {
      setVisiblePopup(false);
      setCurrentProject(null);
    }, 1000); // Adjust the timeout based on your exit animation duration
  };

  return (
    <main className="o-accueil-project">
      <h1>ALLO</h1>
      <button onClick={closePopUp}></button>
      {visiblePopup && currentProject ? (
    <div className={`o-accueil-project-popup ${timeVisiblePopup ? "exit" : "visible"}`}>
          <div className="o-accueil-project-popup-center">
          <h3>{currentProject.name}</h3>
          <ul className="o-accueil-presentation-technos-list">
    {currentProject.technologie.map((technologie, index) => (
      <li key={index} className="o-accueil-presentation-technos-item">
        <span className="o-accueil-presentation-technos-icon">
          <img draggable='false' src={allIcons[technologie]} alt="" />
        </span>
        <p>{technologie}</p>
      </li>
    ))}
  </ul>
          <p>
          {currentProject.description}
          </p>
          <Carousel className="--center" variant="dark">
            {currentProject.image.desktop.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block o-accueil-project-image"
                  src={image}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="o-accueil-realisation-project-button">

<button
  aria-label={currentProject.name}
  className="o-accueil-realisation-project-button-project"
  id={currentProject.id}
>
  <p>Consulter le projet</p>
</button>
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
        </div>
      ) : (""
      )}
      <button onClick={() => loadPopUp(1)}></button>
    </main>
  );
};

export default AccueilProject;
