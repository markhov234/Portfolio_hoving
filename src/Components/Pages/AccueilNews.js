import folks from "../../Images/folks.png";
import AccueilBackInteractive from "./../Organism/AccueilBackInteractive";
import ProjectsData from "./../../BackEnd/data.json";
const AccueilNews = (props) => {
  console.log(ProjectsData.projets[0]);
  return (
    <div className="o-accueil-realisation">
      <AccueilBackInteractive />
      <div className="o-accueil-realisation-zone">
        <figure className="o-accueil-realisation-figure">
          <img alt="Site webs folks" src={folks}></img>
          <div className="o-accueil-realisation-figcaption">
            Oeuvre réalisé par{" "}
            <span className="o-accueil-realisation-figcaption-span"></span>
            Marc-Antoine Hovington
          </div>
        </figure>
        <figure className="o-accueil-realisation-figure">
          <img alt="" src="https://fakeimg.pl/250x250/"></img>
          <div className="o-accueil-realisation-figcaption">
            Oeuvre réalisé par{" "}
            <span className="o-accueil-realisation-figcaption-span"></span>
            Marc-Antoine Hovington
          </div>
        </figure>
        <figure className="o-accueil-realisation-figure">
          <img alt="" src="https://fakeimg.pl/250x250/"></img>
          <div className="o-accueil-realisation-figcaption">
            Oeuvre réalisé par{" "}
            <span className="o-accueil-realisation-figcaption-span"></span>
            Marc-Antoine Hovington
          </div>
        </figure>
        <figure className="o-accueil-realisation-figure">
          <img alt="" src="https://fakeimg.pl/250x250/"></img>
          <div className="o-accueil-realisation-figcaption">
            Oeuvre réalisé par{" "}
            <span className="o-accueil-realisation-figcaption-span"></span>
            Marc-Antoine Hovington
          </div>
        </figure>{" "}
      </div>
    </div>
  );
};

export default AccueilNews;
