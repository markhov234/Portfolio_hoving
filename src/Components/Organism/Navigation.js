import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navigation = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuBackground, setMenuBackground] = useState(false);
  const breakpointDesktop = 1024;

  // let menu = null;
  let icon = null;
  let iconSpan = null;
  let actualMenu = null;
  if (showMenu) {
    icon = (
      <FontAwesomeIcon
        className="o-navigation--mobile-icon close"
        icon={faClose}
        onClick={() => setShowMenu(!showMenu)}
      />
    );
  } else {
    icon = (
      <FontAwesomeIcon
        className="o-navigation--mobile-icon open"
        icon={faBars}
        onClick={() => setShowMenu(!showMenu)}
      />
    );
  }
  if (props.screenWidth < breakpointDesktop) {
    iconSpan = <span className="o-navigation--mobile-span">{icon}</span>;
    actualMenu = (
      <ul className="o-navigation--mobile--menu-zone">
        <div className="o-navigation--mobile--menu-zone">
          <li className="o-navigation--mobile--menu-item">
            <a href="www.google.com">Accueil </a>
          </li>
          <li className="o-navigation--mobile--menu-item">
            <a href="www.google.com">Projets </a>
          </li>
          <li className="o-navigation--mobile--menu-item">
            <a href="www.google.com">Profil </a>
          </li>
          <li className="o-navigation--mobile--menu-item">
            <a href="www.google.com">Me contacter </a>
          </li>
        </div>
      </ul>
    );
  } else {
    iconSpan = null;
    actualMenu = (
      <ul className="o-navigation--desktop--menu-zone">
        <li className="o-navigation--desktop--menu-item">
          <a href="www.google.com">Accueil </a>
        </li>
        <li className="o-navigation--desktop--menu-item">
          <a href="www.google.com">Projets </a>
        </li>
        <li className="o-navigation--desktop--menu-item">
          <a href="www.google.com">Profil </a>
        </li>
        <li className="o-navigation--desktop--menu-item">
          <a href="www.google.com">Me contacter </a>
        </li>
      </ul>
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
        "o-navigation--mobile" +
        (menuBackground && showMenu === false ? " background" : "")
      }
    >
      {iconSpan}
      <div
        className={
          "o-navigation--" +
          (props.screenWidth < breakpointDesktop ? "mobile" : "desktop") +
          "--menu" +
          (showMenu ? " open" : " close")
        }
      >
        {actualMenu}
      </div>
    </nav>
  );
};

export default Navigation;
