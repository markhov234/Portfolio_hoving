import TriangleBackground from "../Molecule/TriangleBackground";
import backgroundTriangle from "./../ReactHook/BackgroundTriangle";
import { useState } from "react";
const AccueilBackInteractive = () => {
  const [ arrayTriangle ] = useState(backgroundTriangle(35))
  return (
    <aside className="o-accueil-background">
      <div className="o-imageBackground--zone-desktop">
        {arrayTriangle.arrayTriangle.map((triangle, index) => (
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
        ))}
      </div>
    </aside>
  );
};

export default AccueilBackInteractive;
