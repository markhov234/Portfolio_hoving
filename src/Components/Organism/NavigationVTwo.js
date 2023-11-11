import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavigationVTwo = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuBackground, setMenuBackground] = useState(false);
  const breakpointDesktop = 1024;
  let icon = null;
  if (showMenu) {
    icon = (
      <FontAwesomeIcon
        aria-label="close"
        className="o-navigation--mobile-icon close"
        icon={faClose}
        onClick={() => setShowMenu(!showMenu)}
      />
    );
  } else {
    icon = (
      <FontAwesomeIcon
        aria-label="open"
        className="o-navigation--mobile-icon open"
        icon={faBars}
        onClick={() => setShowMenu(!showMenu)}
      />
    );
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setMenuBackground(window.pageYOffset > 50)
      );
      return () => window.removeEventListener("scroll", setMenuBackground);
    }
  }, []);

  return (
    <nav className={"o-menu" + (showMenu ? " open" : "")}>
      <span
        className={
          "o-menu-span" +
          (props.screenWidth > breakpointDesktop ? "-desktop" : "") +
          (menuBackground ? " background" : "") +
          (showMenu ? " open" : "")
        }
      >
        {icon}
      </span>
      <div
        className={
          "o-menu-banner" +
          (menuBackground && props.screenWidth > breakpointDesktop
            ? "-background"
            : "")
        }
      >
        <div
          className={
            "o-menu-zone" +
            (props.screenWidth > breakpointDesktop ? "-desktop" : "") +
            (showMenu ? "" : " hidden") +
            (menuBackground ? " background" : "")
          }
        >
          <ul
            className={
              "o-menu-list" +
              (props.screenWidth > breakpointDesktop ? "-desktop" : "")
            }
          >
            <li className="o-menu-items">
              <Link
                to="/"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                Accueil
              </Link>
            </li>
            <li className="o-menu-items">
              <Link
                to="/profil"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                Profil
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationVTwo;
