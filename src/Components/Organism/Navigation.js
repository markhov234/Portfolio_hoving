import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import NavigationMenu from "./NavigationMenu";
// import { useTransition, animated } from "react-spring";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu = null;

  if (showMenu) {
    menu = (
      <ul className="o-navigation--main--menu-zone">
        <a href="www.google.com">
          <li className="o-navigation--main--menu-item">Accueil</li>
        </a>
        <a href="www.google.com">
          <li className="o-navigation--main--menu-item">Projets</li>
        </a>
        <a href="www.google.com">
          <li className="o-navigation--main--menu-item">Profil</li>
        </a>
        <a href="www.google.com">
          <li className="o-navigation--main--menu-item">Me contacter</li>
        </a>
      </ul>
    );
  }
  // SetShowMenu va changer la valeur de la variable showMenu, useState est une fonction de react
  // Définis la function on Click ici
  return (
    <nav className="o-navigation--main">
      <span className="o-navigation--main-span">
        <FontAwesomeIcon
          className="o-navigation--main-icon"
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
      </span>
      {/* conditionnal rendering */}
      <div className="o-navigation--main--menu">{menu}</div>
    </nav>
  );
};

export default Navigation;
