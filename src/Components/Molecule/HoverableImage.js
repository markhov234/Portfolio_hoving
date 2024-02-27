import React, { useState } from "react";

const HoverableImage = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [top, setTop] = useState(0);

  const handleMouseMove = (e) => {
    const mouseY = e.nativeEvent.offsetY; // Get the y-coordinate of the mouse relative to the div
    // console.log(mouseY);
    const maxTop = 20; // Maximum top from the top

    // Calculate the top from the top based on the mouse position
    const newTop = Math.min(maxTop, mouseY / 5);

    // Update the top top state
    setTop(newTop);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTop(0); // Reset the top top when mouse leaves
  };

  return (
    <img
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      src={src}
      alt={alt}
      style={{
        transition: "0.3s ease",
        top: isHovered ? `-${top}px` : "0",
      }}
    />
  );
};

export default HoverableImage;
