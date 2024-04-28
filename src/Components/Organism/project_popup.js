import ProjectsData from "./../../BackEnd/data.json";
import allIcons from "../ReactHook/importIconsImg";
import OrganismBentoSection from "./OrganismBentoSection";
import MoleculeBentoSection from "../Molecule/MoleculeBentoSection";
import AtomBento from "../Atoms/AtomBento";
import { useState } from "react";
const ProjectPopup = ({ id, onBackButtonPress }) => {
  const [listTechnoArr, setlistTechnoArr] = useState(
    ProjectsData.projets.find((project) => project.id === id)
  );
  const [currentDescription, setCurrentDescription] = useState(
    listTechnoArr.description
  );
  const [currentDescriptionImage, setCurrentDescriptionImage] =
    useState("description");

  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const handleImageClick = (url) => {
    setSelectedImageUrl(url);
  };

  const handleBackButtonPress = (value) => {
    onBackButtonPress(value);
  };

  const bentoData = [
    {
      flexSize: 1,
      borderRadius: "15px",
      height: "70px",
      hoverType: "hover2",
      button: true,
      isBackButtonPresent: true,
    },
    {
      flexSize: 1,
      borderRadius: "15px",
      height: "70px",
      hoverType: "hover2",
      // imgUrl: "/images/folks/folks_table_4.jpg",
    },
    {
      flexSize: 1,
      borderRadius: "15px",
      height: "70px",
      hoverType: "hover2",
      bgColor: "rgba(248, 246, 247, 0.2)",
    },
  ];

  const bentoDataAside = listTechnoArr.image.desktop
    .slice(0, 4)
    .map((image, index) => {
      const flexSize = index === 0 ? 0.7 : 1; // Set flexSize to 0.7 for the first image, 1 for the rest
      return {
        flexSize: flexSize,
        borderRadius: "15px",
        imgUrl: image, // Assuming your image object has a 'url' property
        button: true,
        hoverType: "hover2",
        bgColor: "rgba(239, 71, 111, 0.75)",
      };
    });

  const bentoDataProject = [
    {
      flexSize: 3,
      title: listTechnoArr ? listTechnoArr.name : "", // Dynamically include the project title
      text: currentDescription ? currentDescription : "", // Dynamically include the project description
      borderRadius: "15px",
      bgImgUrl: `"/images/${currentDescriptionImage}.png"`,
    },
  ];
  const bentoDataProjectButton = [
    {
      flexSize: 1,
      textButton: "Description",
      borderRadius: "15px",
      hoverType: "hover2",
      button: true,
      // height: "65px",
    },
    {
      flexSize: 1,
      textButton: "Connaisance",
      borderRadius: "15px",
      hoverType: "hover2",
      button: true,
      // height: "65px",
    },
    {
      flexSize: 1,
      textButton: "Acquis",
      borderRadius: "15px",
      hoverType: "hover2",
      // height: "65 px",
      button: true,
    },
  ];
  // Cette function provient de ATOM BENTO qui transmet le message à la molecule Bento, qui par a suite envoie directement au parent de celui-ci.
  const handleMessageFromMoleculeBento = (message) => {
    const lowerCaseTitle = message.toLowerCase();
    setCurrentDescriptionImage(lowerCaseTitle);
    if (lowerCaseTitle === "description") {
      setCurrentDescription(listTechnoArr.description);
    } else if (lowerCaseTitle === "connaisance") {
      setCurrentDescription(listTechnoArr.connaisance);
    } else if (lowerCaseTitle === "acquis") {
      setCurrentDescription(listTechnoArr.acquis);
    }
  };

  return (
    <section className="project_popup-section">
      <MoleculeBentoSection
        flexDirection={"row"}
        // flexSize={1}
        bentoData={bentoData}
        onBackButtonPress={handleBackButtonPress}
      ></MoleculeBentoSection>
      <OrganismBentoSection flexDirection={"row"} flexSize={2}>
        <OrganismBentoSection flexDirection={"column"} flexSize={2}>
          <MoleculeBentoSection
            flexDirection={"column"}
            flexSize={3}
            bentoData={bentoDataProject}
          />
          <MoleculeBentoSection
            onMessage={handleMessageFromMoleculeBento}
            flexDirection={"row"}
            flexSize={0.6}
            alignItems={"center"}
            bentoData={bentoDataProjectButton}
          ></MoleculeBentoSection>
          <AtomBento
            flexSize={2}
            borderRadius={"15px"}
            text={"Appuyé sur l'une des images à droite pour l'agrandir."}
            imgUrl={selectedImageUrl}
            mainImage={true}
          />
        </OrganismBentoSection>
        <MoleculeBentoSection
          flexDirection={"column"}
          flexSize={0.8}
          bentoData={bentoDataAside}
          onImagePress={handleImageClick} // Passer la fonction de gestion des clics sur les images
        ></MoleculeBentoSection>
      </OrganismBentoSection>
      {/* <AtomBento flexSize={1} borderRadius={"15px"}> */}
      <h2>Technologie utilisées</h2>
      <ul className="o-accueil-presentation-technos-list">
        {listTechnoArr.technologie.map((technologie, index) => (
          <li key={index} className="o-accueil-presentation-technos-item">
            <span className="o-accueil-presentation-technos-icon">
              <img draggable="false" src={allIcons[technologie]} alt="" />
            </span>
            <p>{technologie}</p>
          </li>
        ))}
      </ul>
      {/* </AtomBento> */}
    </section>
  );
};

export default ProjectPopup;
