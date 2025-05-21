// components/Menu.js
import { Link } from "react-router-dom";
import ProjectsData from "./../../BackEnd/data.json";
import allIcons from "../ReactHook/importIconsImg";
import useTheme from "../ReactHook/SwitchTheme";
import { useState } from "react";

// {ProjectsData.reseaux.map((reseau) => (
//   <li className={`o-contact-medialink-item ${reseau.name}`} key={reseau.name}>
//     <a target="_blank" rel="noopener noreferrer" href={reseau.url}>
//       <p>{reseau.name}</p>
//       <span className="o-contact-medialink-item-icons">
//         <img draggable='false' src={allIcons[reseau.name]} alt="" />
//       </span>
//     </a>
//   </li>
// ))}
const Menu = () => {
  const [theme, setTheme] = useState(null);
  const [toggle, setToggle] = useState(false);

  useTheme(theme);

  const toggleTheme = () => {
    if (toggle === false) {
      setTheme("dark");
      setToggle(true);
    } else {
      setTheme("light");
      setToggle(false);
    }
  };
  return (
    <nav className="menu">
      <ul className="menu__list">
        {ProjectsData.reseaux.map((reseau, i) => (
          <li className="menu__item" key={i}>
            <Link to={reseau.to} className="menu__link">
              <div className="hexagon-side">
                <div className="hexagon-inside">
                  {" "}
                  <img src={allIcons[reseau.name]} alt="" />
                </div>
              </div>
              <span className="menu__label">{reseau.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={toggleTheme} className="menu__toggle-theme">
        <div className={`menu__toggle-theme-button ${theme} `}></div>
      </div>
    </nav>
  );
};

export default Menu;
