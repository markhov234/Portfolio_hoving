import React, { useState } from "react";

function HoverableImageHorizon() {
  const [transform, setTransform] = useState("translate(-50%, -50%)");

  function handleMouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const divRect = event.target.getBoundingClientRect();
    const divCenterX = divRect.left + divRect.width / 2;
    const divCenterY = divRect.top + divRect.height / 2;

    const offsetX = mouseX - divCenterX;
    const offsetY = mouseY - divCenterY;

    setTransform(
      `translate(-50%, -50%) translate(${offsetX / 10}px, ${offsetY / 10}px)`
    );
  }

  function handleMouseLeave() {
    setTransform("translate(-50%, -50%)");
  }

  return (
    <div
      className="bento-main-project-backimage bento-hover-rotate"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      //   style={{ transform }}
    ></div>
  );
}

export default HoverableImageHorizon;
