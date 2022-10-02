// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";
const TriangleBackground = (props) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  let parallaxDecimal = Number(0 + "." + props.parallax);
  return (
    <svg
      fill="none"
      width={props.width}
      height={props.width}
      style={{
        top: props.axeY + "%",
        left: props.axeX + "%",
        transform:
          "translateY(" +
          offsetY * parallaxDecimal +
          "px)" +
          " rotate(" +
          props.rotation +
          "deg)",
      }}
      // translateY(${offsetY * 0.2}px)
      // transform={"rotate(" + props.rotation + ")"}
      viewBox="0 0 217 193"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5888 144.75L88.5 15L163.411 144.75H13.5888Z"
        stroke={props.color}
        strokeWidth="15"
      />
    </svg>
  );
};
// transform: translateX(21px);
export default TriangleBackground;
