// import folks from "../../Images/folks.png";
import { useState } from "react";
import AccueilProject from "./../Organism/AccueilProject";
import AccueilBackInteractive from "./../Organism/AccueilBackInteractive";
import ProjectsData from "./../../BackEnd/data.json";
const AccueilNews = (props) => {
  // console.log(ProjectsData.projets[0]);
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  function projectSended(project) {
    setIsProjectVisible((isVisible) => !isVisible);
    setCurrentProject((project)=>project);
  }
  return (
    <div className="o-accueil-realisation">
      <AccueilBackInteractive />
      {isProjectVisible ? <AccueilProject isVisible={[isProjectVisible,setIsProjectVisible]} currentProject={currentProject} /> : ""}
      <div className="o-accueil-realisation-zone">
      {ProjectsData.projets.map((project, index) => (
         <figure key={index} onClick={event => projectSended(project)} className="o-accueil-realisation-figure">
         <img alt={project.name} src={`${project.image}`}></img>
         <div className="o-accueil-realisation-figcaption">
           Réalisé par 
           <span className="o-accueil-realisation-figcaption-span"></span>
           Marc-Antoine Hovington
         </div>
       </figure>
        ))}

      </div>
    </div>
  );
};

export default AccueilNews;
