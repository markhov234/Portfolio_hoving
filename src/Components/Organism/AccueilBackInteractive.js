import TriangleBackground from "../Molecule/TriangleBackground";
import backgroundTriangle from "./../ReactHook/BackgroundTriangle";
const AccueilBackInteractive = () => {
  const { arrayTriangle } = backgroundTriangle(35);

  return (
    <div className="p-accueil-background">
      <div className="o-imageBackground--zone-desktop">
        {arrayTriangle.map((triangle, index) => (
          <TriangleBackground
            key={index}
            rotation={triangle[0]}
            width={triangle[1]}
            color={triangle[2]}
            axeX={triangle[4]}
            axeY={triangle[3]}
            parallax={triangle[5]}
          />
        ))}
      </div>
    </div>
  );
};

export default AccueilBackInteractive;
