import Navigation from "./Organism/Navigation";
const Header = (props) => {
  // Définis la function on Click ici
  return (
    <header className="o-header">
      <div className="o-header--content ">
        <Navigation></Navigation>
        <h1 className="o-header--title">{props.title}</h1>
      </div>
    </header>
  );
};

export default Header;
