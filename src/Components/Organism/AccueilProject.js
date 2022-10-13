import WaveSvgDesktop from "../../Images/wave_svg_desktop.svg";
import WaveSvgWide from "../../Images/wave_svg_wide.svg";
import WaveSvgMobile from "../../Images/wave_svg_mobile.svg";
import ProjectsData from "./../../BackEnd/data.json";
import { useParams } from "react-router-dom";
import allIcons from "../ReactHook/importIconsImg";

const AccueilProject = (props) => {
  // LE USEPARAMS PERMETS DE RÉCUPÉRER L'ID ENVOYER DANS LE LIEN DE L'URL
  const { id } = useParams();
  // console.log(allIcons.Github);
  // const icons = ["css", "php", "laravel", "sass", "wordpress"];

  // const currentIcon = (icon) => {
  //   let intCpt = 0;
  //   let iconActuel = null;
  //   while (intCpt < icons.length) {
  //     if (icons[intCpt] === icon) {
  //       iconActuel = (
  //         <span>
  //           <img src={"../../Images/" + { icon } + "_icon.svg"} alt="" />
  //         </span>
  //       );
  //       return iconActuel;
  //     }
  //     intCpt++;
  //   }
  // };

  // J'UTILISE DONC LE ID POUR RÉCUPERER LE PROJET A PARTIR DU JSON LOCAUX
  const currentProject = ProjectsData.projets[id];
  console.log(ProjectsData.projets[id].id);
  // #TODO: Faire UNE FUNCTION ''BACKEND'' pour trouver le bon id. Faire une boucle qui rentre dans tous les projets et regarde si l'id est égal a l'id envoyer dans le url

  return (
    <div className="o-accueil-project">
      <h1 className="o-accueil-project--title">Mon projet</h1>
      <div className="o-accueil-project--article-zone">
        <div className="o-accueil-project--article">
          <img
            className="o-accueil-project--article-image"
            src={currentProject.image}
            alt=""
          />
          <h2 className="o-accueil-project--article-title">
            {currentProject.name}
          </h2>
          <p className="o-accueil-project--article-description">
            {currentProject.description}
          </p>
        </div>
      </div>
      <div className="o-accueil-project-techno">
        <figure className="o-accueil-project--techno-svg-top">
          <picture>
            <source media="(min-width:1840px)" srcSet={WaveSvgWide} />
            <source media="(min-width:1024px)" srcSet={WaveSvgDesktop} />
            <img srcSet={WaveSvgMobile} alt="" />
          </picture>
        </figure>

        <ul className="o-accueil-project--techno-list">
          {currentProject.technologie.map((technologie, index) => (
            <li key={index}>
              <span>
                {" "}
                <img src={allIcons[technologie]} alt="" />
              </span>
              {technologie}
            </li>
          ))}
        </ul>
      </div>
      <div className="o-accueil-project--liked">
        <figure className="o-accueil-project--article-svg-bottom">
          <picture>
            <source media="(min-width:1840px)" srcSet={WaveSvgWide} />
            <source media="(min-width:1024px)" srcSet={WaveSvgDesktop} />
            <img srcSet={WaveSvgMobile} alt="" />
          </picture>
        </figure>
      </div>
    </div>
  );
};

export default AccueilProject;
