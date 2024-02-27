import React from "react";
import AtomBento from "../Atoms/AtomBento";

const MoleculeBentoSection = ({ bentoData, flexDirection, flexSize }) => {
  let style = {
    flexDirection: flexDirection,
    flex: flexSize,
  };
  return (
    <div className="bento-section" style={style}>
      {/* Map through the bentoData and render AtomBento components */}
      {bentoData.map((bento, index) => (
        <AtomBento
          key={index} // Ensure each AtomBento has a unique key
          flexSize={bento.flexSize}
          borderRadius={bento.borderRadius}
          height={bento.height}
          bgColor={bento.bgColor}
          hoverType={bento.hoverType}
          imgUrl={bento.imgUrl}
          title={bento.title}
          text={bento.text}
          bgImgUrl={bento.bgImgUrl}
        />
      ))}
    </div>
  );
};

export default MoleculeBentoSection;
