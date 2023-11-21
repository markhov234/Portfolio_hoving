import React, { useMemo,useEffect, useState, useCallback } from "react";
import TriangleBackground from "../Molecule/TriangleBackground";
import backgroundTriangle from "./../ReactHook/BackgroundTriangle";

const AccueilBackInteractive = () => {
  const [arrayTriangle] = useState(backgroundTriangle(100));

  const handleScroll = useCallback(() => {
    // handle scroll logic if needed
  }, []);

  const renderTriangles = useMemo(() => {
    return arrayTriangle.arrayTriangle.map((triangle, index) => (
      <TriangleBackground
        key={index}
        rotation={triangle[0]}
        width={triangle[1]}
        color={triangle[2]}
        axeX={triangle[4]}
        axeY={triangle[3]}
        parallax={triangle[5]}
        parallaxY={triangle[6]}
      />
    ));
  }, [arrayTriangle.arrayTriangle]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <aside className="o-accueil-background">
      <div className="o-imageBackground--zone-desktop">
        {renderTriangles}
      </div>
    </aside>
  );
};

export default AccueilBackInteractive;
