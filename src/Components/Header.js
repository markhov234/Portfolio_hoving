import Navigation from "./Organism/Navigation";
const Header = (props) => {
  // Définis la function on Click ici
  return (
    <header className="o-header">
      <div className="o-header--content ">
        <Navigation></Navigation>

        {/* <ul className="o-header--menu">
          <li className="o-header--menu-item">
            <a className="a-link" href="www.google.com">
              Accueil
            </a>
          </li>
          <li className="o-header--menu-item">
            <a className="a-link" href="www.google.com">
              Réalisations
            </a>
          </li>
          <li className="o-header--menu-item">
            <a className="a-link" href="www.google.com">
              Équipe
            </a>
          </li>
        </ul> */}
        <h1 className="o-header--title">{props.title}</h1>
      </div>
    </header>
  );
};

export default Header;
