import React from "react";
import HoverableImage from "../Molecule/HoverableImage";

const AtomBento = ({
  flexSize,
  borderRadius,
  height,
  // alignItems,
  bgColor,
  bgImgUrl,
  imgUrl,
  text,
  title,
  hoverType,
  button,
  onMessage,
  textButton,
  active,
  onClick,
  children,
  mainImage,
  onImagePress, // Envoie l'image actuellement pressé
  isBackButtonPresent,
  onBackButtonPress, // Envoie le bouton retour pressé
}) => {
  // Cette fonction est appelée quand on clique sur le composant et que textButton est true;
  const handleClick = () => {
    if (textButton) {
      onMessage(textButton); // Envoyer le message au composant parent
      onClick(); // Appeler la fonction onClick du composant parent
    }
  };

  const handleImagePress = () => {
    if (onImagePress && imgUrl) {
      onImagePress(imgUrl); // Envoyer l'URL de l'image au composant parent
      onClick();
    }
  };

  const handleBackButtonPress = () => {
    if (isBackButtonPresent) {
      onBackButtonPress(false); // Appeler la fonction onBackButtonPress du composant parent
      onClick();
      console.log("Back button clicked");
    }
  };

  let style = {
    borderRadius: borderRadius,
    flex: flexSize,
  };

  if (bgColor) {
    style.backgroundColor = bgColor;
  }
  if (height) {
    style.height = height;
  }

  let styleBg = {};
  if (bgImgUrl) {
    styleBg.backgroundImage = `url(${bgImgUrl})`;
    styleBg.backgroundSize = "cover";
  }

  return (
    <div
      onClick={(e) => {
        handleClick(); // Appeler la fonction handleClick
        handleImagePress(); // Appeler la fonction handleImagePress
      }}
      className={`bento-item ${hoverType ? hoverType : ""} ${
        button ? "button" : ""
      } ${active ? "active" : ""} `}
      style={style}
    >
      {isBackButtonPresent && (
        <button className="back-button" onClick={handleBackButtonPress}>
          Back
        </button>
      )}

      {imgUrl && (
        <HoverableImage mainImage={mainImage} src={imgUrl} alt="Image" />
      )}
      {title && <h2>{title}</h2>}
      {text && (
        <p className={`text ${mainImage ? "mainImgText" : ""}`}>{text}</p>
      )}
      {textButton && <p>{textButton}</p>}
      {bgImgUrl && <div style={styleBg} className="bento-item-bg"></div>}
      {children}
    </div>
  );
};

export default AtomBento;
