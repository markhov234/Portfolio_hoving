import ProjectsData from "./../../BackEnd/data.json";
import allIcons from "../ReactHook/importIconsImg";
import HoverableImageHorizon from "../Molecule/HoverableImageHorizon";
import HoverableImage from "../Molecule/HoverableImage";
import OrganismBentoSection from "./OrganismBentoSection";
import MoleculeBentoSection from "../Molecule/MoleculeBentoSection";
const ProjectPopup = () => {
  const listTechno = ProjectsData.profil[0];

  const bentoData = [
    { flexSize: 1, borderRadius: '15px', height: '70px', hoverType: "hover2", imgUrl: "/images/folks/folks_table_4.jpg" },
    { flexSize: 1, borderRadius: '15px', height: '70px', hoverType: "hover2", imgUrl: "/images/folks/folks_table_4.jpg" },
    { flexSize: 1, borderRadius: '15px', height: '70px', hoverType: "hover2", bgColor: "rgba(248, 246, 247, 0.2)" },
  ];

  const bentoDataAside = [
    { flexSize: 0.7, borderRadius: '15px', height: '70px', hoverType: "hover2", imgUrl: "/images/folks/folks_table_1.jpg" },
    { flexSize: 1, borderRadius: '15px', height: '70px', hoverType: "hover2", imgUrl: "/images/folks/folks_table_2.jpg" },
    { flexSize: 1, borderRadius: '15px', height: '70px', hoverType: "hover2", imgUrl: "/images/folks/folks_table_3.jpg" },
    { flexSize: 1, borderRadius: '15px', height: '70px', hoverType: "hover2", imgUrl: "/images/folks/folks_table_4.jpg" },
  ];
  const bentoDataProject = [
    { flexSize: 3, title: "Site Web Tim", text: "A l'emploi pour l'entreprise, j'ai eu comme mission de réorganiser le scss/css et d'ajouter des nouveaux éléments aux demandes de l'équipe marketing. Pour cela, j'ai réorganiser les classes selon la méthodologie du Atomic design. Le tout étant principalement fait sur custom template dans wordpress.", borderRadius: '15px', height: '70px', hoverType: "hover2", bgImgUrl: "../../Images/triangle_forest.png" },

  ];
  const bentoDataProjectButton = [
    { flexSize: 1, text: "Description", borderRadius: '15px', height: '70px', hoverType: "hover2", bgColor: "rgba(248, 246, 247, 0.2)" },
    { flexSize: 1, text: "Knowledge", borderRadius: '15px', height: '70px', hoverType: "hover2", bgColor: "rgba(248, 246, 247, 0.2)" },
    { flexSize: 1, text: "Acquis", borderRadius: '15px', height: '70px', hoverType: "hover2", bgColor: "rgba(248, 246, 247, 0.2)" },
  ];

  return (
    <section className="project_popup-section">
      <MoleculeBentoSection flexDirection={"row"} bentoData={bentoData}>
      </MoleculeBentoSection>
      <div className="bento-main">
        <OrganismBentoSection flexDirection={"column"} flexSize={2}>
          <MoleculeBentoSection flexDirection={"column"} flexSize={3} bentoData={bentoDataProject} />
          <MoleculeBentoSection flexDirection={"row"} flexSize={0.8} bentoData={bentoDataProjectButton}>
          </MoleculeBentoSection>
        </OrganismBentoSection>
        <div className="bento-main-project">
          <div className="bento-main-project-description ">
            <h2>Site Web Tim</h2>
            <p>A l'emploi pour l'entreprise, j'ai eu comme mission de réorganiser le scss/css et d'ajouter des nouveaux éléments aux demandes de l'équipe marketing. Pour cela, j'ai réorganiser les classes selon la méthodologie du Atomic design. Le tout étant principalement fait sur custom template dans wordpress.</p>
            <HoverableImageHorizon />
          </div>
          <div className="bento-main-project-button">
            <div className="bento-main-project-button-item bento-hover-scale">
              Description
            </div>
            <div className="bento-main-project-button-item bento-hover-scale">
              Knowledge
            </div>
            <div className="bento-main-project-button-item bento-hover-scale">
              Acquis
            </div>
          </div>
          <div className="bento-main-project-image">
            <HoverableImage src="/images/folks/folks_table_1.jpg" alt="folks_table_1" />

          </div>
        </div>
        <MoleculeBentoSection flexDirection={"column"} flexSize={0.8} bentoData={bentoDataAside}>
        </MoleculeBentoSection>
      </div>
      <div className="bento-main-bottom">
        <ul className="o-accueil-presentation-technos-list">
          {listTechno.technologie.map((technologie, index) => (
            <li key={index} className="o-accueil-presentation-technos-item">
              <span className="o-accueil-presentation-technos-icon">
                <img draggable='false' src={allIcons[technologie.techno]} alt="" />
              </span>
              <p>{technologie.techno}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectPopup;
