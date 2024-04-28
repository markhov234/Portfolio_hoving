import React, { useState, useRef } from "react";

const ImageComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const enterTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  // Define the source for both images
  const originalSrc = "/images/profil_square.jpg";
  const hoverSrc = "/images/profil_square_2.jpg";

  // Function to handle mouse entering the image
  const handleMouseEnter = () => {
    clearTimeout(leaveTimeoutRef.current); // Clear any ongoing leave timeout
    enterTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 250); // Delay execution by 1000 milliseconds (1 second)
  };

  // Function to handle mouse leaving the image
  const handleMouseLeave = () => {
    clearTimeout(enterTimeoutRef.current); // Clear any ongoing enter timeout
    leaveTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 250); // Delay execution by 1000 milliseconds (1 second)
  };

  // Determine which source to use based on the hover state
  const imageSrc = isHovered ? hoverSrc : originalSrc;
  //   const imageStyle = {
  //     // transition: "0.2s ease-in-out", // Add a transition for opacity
  //     // opacity: isHovered ? 0 : 1, // Set opacity to 0 when hovered, 1 otherwise
  //   };
  return (
    <img
      className="o-accueil-presentation-image-profil"
      alt=""
      src={imageSrc}
      //   style={imageStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default ImageComponent;
