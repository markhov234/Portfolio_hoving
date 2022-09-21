import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuBackground, setMenuBackground] = useState(false);

  // let menu = null;
  let icon = null;

  if (showMenu) {
    icon = (
      <FontAwesomeIcon
        className="o-navigation--main-icon close"
        icon={faClose}
        onClick={() => setShowMenu(!showMenu)}
      />
    );
  } else {
    icon = (
      <FontAwesomeIcon
        className="o-navigation--main-icon open"
        icon={faBars}
        onClick={() => setShowMenu(!showMenu)}
      />
    );
  }

  // What does useEffect do?
  // By using this Hook, you tell React that your component needs to do something after render.
  // React will remember the function you passed (we’ll refer to it as our “effect”),
  // and call it later after performing the DOM updates.
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setMenuBackground(window.pageYOffset > 50)
      );
      return () => window.removeEventListener("scroll", setMenuBackground);
    }
  }, []);
  // SetShowMenu va changer la valeur de la variable showMenu, useState est une fonction de react
  // Définis la function on Click ici
  return (
    <nav
      className={
        "o-navigation--main" +
        (menuBackground && showMenu === false ? " background" : "")
      }
    >
      <span className="o-navigation--main-span">{icon}</span>
      {/* conditionnal rendering */}
      <div
        className={"o-navigation--main--menu" + (showMenu ? " open" : " close")}
      >
        <ul className="o-navigation--main--menu-zone">
          <div className="o-navigation--main--menu-zone">
            <li className="o-navigation--main--menu-item">
              <a href="www.google.com">Accueil </a>
            </li>
            <li className="o-navigation--main--menu-item">
              <a href="www.google.com">Projets </a>
            </li>
            <li className="o-navigation--main--menu-item">
              <a href="www.google.com">Profil </a>
            </li>
            <li className="o-navigation--main--menu-item">
              <a href="www.google.com">Me contacter </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
