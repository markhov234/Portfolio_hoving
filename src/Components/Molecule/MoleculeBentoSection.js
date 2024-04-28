import React, { useState } from "react";
import AtomBento from "../Atoms/AtomBento";

const MoleculeBentoSection = ({
  onMessage,
  onImagePress, // Nouvelle prop pour gérer les clics sur les images
  bentoData,
  flexDirection,
  onBackButtonPress,
  flexSize,
  alignItems,
}) => {
  let style = {
    flexDirection: flexDirection,
    flex: flexSize,
    alignItems: alignItems,
  };

  const handleMessageFromAtomBento = (object) => {
    onMessage(object);
  };

  const handleMessageImagePress = (object) => {
    onImagePress(object);
  };

  const handleBackButtonPress = (object) => {
    onBackButtonPress(object);
    console.log("Back button pressed:", object);
  };

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="bento-section" style={style}>
      {/* Map through the bentoData and render AtomBento components */}
      {bentoData.map((bento, index) => (
        <AtomBento
          onMessage={handleMessageFromAtomBento}
          onImagePress={handleMessageImagePress} // Passer la fonction de rappel pour les clics sur les images
          onBackButtonPress={handleBackButtonPress}
          key={index}
          flexSize={bento.flexSize}
          borderRadius={bento.borderRadius}
          height={bento.height}
          bgColor={bento.bgColor}
          hoverType={bento.hoverType}
          imgUrl={bento.imgUrl}
          title={bento.title}
          text={bento.text}
          bgImgUrl={bento.bgImgUrl}
          button={bento.button}
          textButton={bento.textButton}
          active={activeButton === index}
          mainImage={bento.mainImage}
          onClick={() => handleButtonClick(index)}
          isBackButtonPresent={bento.isBackButtonPresent}
        />
      ))}
    </div>
  );
};

export default MoleculeBentoSection;
