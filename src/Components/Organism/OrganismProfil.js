import ProjectsData from "./../../BackEnd/data.json";
import allIcons from "../ReactHook/importIconsImg";

const OrganismProfil = () => {

    const listTechno = ProjectsData.profil[0].technologie; 

    // console.log(listTechno);
    return (
     <div className="o-profil">
          <h2 className="o-profil-mainTitle">Mon profil</h2>
          <div className="o-profil-information">
            <div className="bleed --center">
            <h3 className="o-profil-information-title">À propos de moi</h3>
            <div className="o-profil-information-presentation"> 
            <img className="o-profil-information-picture" alt="" src="https://fakeimg.pl/550/"></img>
            <div className="o-profil-information-description">
            <p className="o-profil-information-name">Marc-Antoine Hovington</p> 
            <div className="o-profil-information-text">
                Eiusmod nostrud ullamco incididunt irure non duis in id ex voluptate elit pariatur. Qui amet dolore excepteur anim laborum ex nisi elit nostrud ut. Ad ad dolore irure est pariatur. Laboris nisi labore exercitation voluptate est non consectetur. Lorem id nisi cupidatat consequat mollit sit eiusmod eiusmod enim officia nisi exercitation est pariatur. Dolor quis voluptate dolor est laboris tempor mollit do veniam.
            </div>
            </div>
            </div>   
            </div>
          </div>
          <div className="o-profil-competence --center">
            <h4 className="o-profil-competence-title">Mes compétences</h4>
            <ul className="o-profil-competence-techno">
            {listTechno.map((technologie, index) => (
                
            <li key={index} className="o-profil-competence-techno-item">
            {console.log(technologie)}
                    <span className="o-profil-competence-techno-item-icon"> <img src={allIcons[technologie.techno]} alt="" /></span>
                    <div className="o-profil-competence-techno-zone">
                    <p className="o-profil-competence-techno-item-description">{technologie.techno}</p>
                    <span className={"o-profil-competence-techno-item-level"+technologie.level}></span>
                  </div>
                </li>
                 ))}
            </ul>
          </div>
          <div className="o-profil-passion">
            <div className="o-profil-passion-zone">
                <h4 className="o-profil-passion-title"> Jeux-Vidéo</h4>
                <span className="o-profil-passion-icon"></span>
                <ul className="o-profil-passion-list">
                    <li className="o-profil-passion-item"></li>
                    <li className="o-profil-passion-item"></li>
                </ul>
            </div>
          </div>
     </div>
    );
  };
  
  export default OrganismProfil;
  