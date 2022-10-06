import backgroundMauve from "../../Images/background_mauve.svg";
import backgroundJaune from "../../Images/background_jaune.svg";
import { useEffect, useState } from "react";
const AccueilBack = (props) => {
  // Définis la function on Click ici
  const background_mauve = backgroundMauve;
  const background_jaune = backgroundJaune;
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const actualScreenWidth = props.screenWidth;
  const breakpoint = 1024;
  let actualBackground = null;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (actualScreenWidth < breakpoint) {
    actualBackground = (
      <div className="o-imageBackground--zone-mobile">
        <img
          style={{ transform: `translateY(${offsetY * 0.2}px)` }}
          className="o-imageBackground--principal"
          src={background_mauve}
          alt=""
        ></img>
        <img
          style={{ transform: `translateY(${offsetY * 0.15}px)` }}
          className="o-imageBackground--secondaire"
          src={background_jaune}
          alt=""
        ></img>
      </div>
    );
  } else {
    actualBackground = (
      <div className="o-imageBackground--zone-desktop">
        <img
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
          className="o-imageBackground--principal"
          src={background_mauve}
          alt=""
        ></img>
        <img
          style={{ transform: `translateY(${offsetY * 0.25}px)` }}
          className="o-imageBackground--secondaire"
          src={background_jaune}
          alt=""
        ></img>
      </div>
    );
  }

  return (
    <div className="p-accueil-background">
      {[...Array(props.intArticle)].map((value, index) => (
        <div key={index}>{actualBackground}</div>
      ))}
    </div>
  );
};

export default AccueilBack;
