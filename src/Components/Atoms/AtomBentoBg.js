import React from "react";
import HoverableImage from "../Molecule/HoverableImage";
const AtomBentoBg = ({
  flexSize,
  borderRadius,
  height,
  bgColor,
  bgImgUrl,
  imgUrl,
  text,
  title,
  hoverType,
}) => {
  // Define a base style object with properties common to all instances
  let style = {
    borderRadius: borderRadius,
    flex: flexSize,
  };

  // Conditionally add properties to the style object if they are provided
  if (bgColor) {
    style.backgroundColor = bgColor;
  }
  if (height) {
    style.height = height;
  }

  let styleBg = {};
  if (bgImgUrl) {
    styleBg.backgroundImage = `url(${bgImgUrl})`;
    styleBg.backgroundSize = "cover"; // Adjust this as needed
  }

  return (
    <div className={`bento-item ${hoverType && hoverType}`} style={style}>
      {imgUrl && <HoverableImage src={imgUrl} alt="Image" />}
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      <div style={styleBg} className="bento-item-bg"></div>
    </div>
  );
};

export default AtomBentoBg;
