import WaveSvgDesktop from "../../Images/wave_svg_desktop.svg";
import WaveSvgWide from "../../Images/wave_svg_wide.svg";
import WaveSvgMobile from "../../Images/wave_svg_mobile.svg";
import ProjectsData from "./../../BackEnd/data.json";
import { useParams } from "react-router-dom";

const AccueilProject = (props) => {
  //   function isVisible() {
  //     props.isVisible[1](false);
  //   }
  // Ceci est une fonction caller depuis le parents (Callback)

  const { id } = useParams();
  console.log(ProjectsData.projets[id]);

  return (
    <div className="o-accueil-project">
      <h1 className="o-accueil-project--title">Mes projets</h1>
      <div className="o-accueil-project">
        <figure className="o-accueil-project--article-svg-top">
          <picture>
            <source media="(min-width:1840px)" srcSet={WaveSvgWide} />
            <source media="(min-width:1024px)" srcSet={WaveSvgDesktop} />
            <img srcSet={WaveSvgMobile} alt="" />
          </picture>
        </figure>

        <div className="o-accueil-project--article">
          <div className="o-accuei-project--article-header">
            <img
              className="o-accueil-project--article--image"
              src={`../../Images/folks.png`}
              alt=""
            />
            <p>
              lorem ipsum bla wow wo ! lorem ipsum bla wow wo ! lorem ipsum bla
              wow wo ! lorem ipsum bla wow wo ! lorem ipsum bla wow wo ! lorem
              ipsum bla wow wo ! lorem ipsum bla wow wo ! lorem ipsum bla wow wo
              ! lorem ipsum bla wow wo ! lorem ipsum bla wow wo ! lorem ipsum
              bla wow wo ! lorem ipsum bla wow wo ! lorem ipsum bla wow wo !
              lorem ipsum bla wow wo ! lorem ipsum bla wow wo ! lorem ipsum bla
              wow wo ! lorem ipsum bla wow wo ! lorem ipsum bla wow wo ! lorem
              ipsum bla wow wo ! lorem ipsum bla wow wo ! lorem ipsum bla wow wo
              ! lorem ipsum bla wow wo ! lorem ipsum bla wow wo ! lorem ipsum
              bla wow wo ! lorem ipsum bla wow wo ! lorem ipsum bla
            </p>
          </div>
        </div>
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
