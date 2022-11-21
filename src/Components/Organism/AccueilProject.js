import WaveSvgDesktop from "../../Images/wave_svg_desktop.svg";
import WaveSvgWide from "../../Images/wave_svg_wide.svg";
import WaveSvgMobile from "../../Images/wave_svg_mobile.svg";
import ProjectsData from "./../../BackEnd/data.json";
import { useParams } from "react-router-dom";
import allIcons from "../ReactHook/importIconsImg";
import Carousel from "react-bootstrap/Carousel";

const AccueilProject = (props) => {
  // LE USEPARAMS PERMETS DE RÉCUPÉRER L'ID ENVOYER DANS LE LIEN DE L'URL
  const { id } = useParams();

  // J'UTILISE DONC LE ID POUR RÉCUPERER LE PROJET A PARTIR DU JSON LOCAUX
  const currentProject = ProjectsData.projets[id - 1];
  console.log(currentProject.technologie);
  // console.log(ProjectsData.projets[id].id);
  // #TODO: Faire UNE FUNCTION ''BACKEND'' pour trouver le bon id. Faire une boucle qui rentre dans tous les projets et regarde si l'id est égal a l'id envoyer dans le url

  return (
    <div className="o-accueil-project">
      <h1 className="o-accueil-project--title">{currentProject.name}</h1>
      <div className="o-accueil-project--article-zone">
        <div className="o-accueil-project--article --center">
          <img
            className="o-accueil-project--article-image"
            src={currentProject.image}
            alt=""
          />
          <h2 className="o-accueil-project--article-title-h2">Mes tâches</h2>
          <p className="o-accueil-project--article-description">
            {currentProject.description}
          </p>
        </div>
      </div>
      <div className="o-accueil-project-techno">
        <figure className="o-accueil-project--techno-svg-top">
          <picture>
            <source media="(min-width:1800px)" srcSet={WaveSvgWide} />
            <source media="(min-width:1024px)" srcSet={WaveSvgDesktop} />
            <img srcSet={WaveSvgMobile} alt="" />
          </picture>
        </figure>

        <h3 className="o-accueil-project--techno-title">
          {" "}
          Technologies utilisées
        </h3>
        <ul className="o-accueil-project--techno-list --center">
          {currentProject.technologie.map((technologie, index) => (
            <li key={index}>
              <span>
                <img src={allIcons[technologie]} alt="" />
              </span>
              <p className="o-accueil-project--techno-list-text">
                {technologie}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="o-accueil-project--liked">
        <figure className="o-accueil-project--article-svg-bottom">
          <picture>
            <source media="(min-width:1800px)" srcSet={WaveSvgWide} />
            <source media="(min-width:1024px)" srcSet={WaveSvgDesktop} />
            <img srcSet={WaveSvgMobile} alt="" />
          </picture>
        </figure>
        <div className="o-accueil-project--liked-zone">
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
        </div>
      </div>
    </div>
  );
};

export default AccueilProject;
