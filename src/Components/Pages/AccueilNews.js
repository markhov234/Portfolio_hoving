// import folks from "../../Images/folks.png";
import AccueilBackInteractive from "./../Organism/AccueilBackInteractive";
import ProjectsData from "./../../BackEnd/data.json";
import { Link } from "react-router-dom";
const AccueilNews = (props) => {
  return (
    <div className="o-accueil-realisation">
      <h1 className="o-header--title">Mon Portfolio</h1>
      <AccueilBackInteractive />
      {/* {isProjectVisible ? <AccueilProject isVisible={[isProjectVisible,setIsProjectVisible]} currentProject={currentProject} /> : ""} */}
      <div className="o-accueil-realisation-zone">
        {ProjectsData.projets.map((project, index) => (
          <Link
            className="o-accueil-realisation-figure"
            to={"projects/" + project.id}
            key={index}
          >
            <figure>
              <img alt={project.name} src={`${project.image}`}></img>
              <div className="o-accueil-realisation-figcaption">
                Réalisé par
                <span className="o-accueil-realisation-figcaption-span"></span>
                Marc-Antoine Hovington
              </div>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccueilNews;
