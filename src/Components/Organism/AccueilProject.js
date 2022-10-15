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
  const currentProject = ProjectsData.projets[id];
  console.log(ProjectsData.projets[id].id);
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
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={currentProject.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={currentProject.image}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={currentProject.image}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AccueilProject;
