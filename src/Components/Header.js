import Navigation from "./Organism/Navigation";
const Header = (props) => {
  // Définis la function on Click ici
  return (
    <header className="o-header">
      <div className="o-header--content ">
        <Navigation screenWidth={props.screenWidth}></Navigation>
      </div>
    </header>
  );
};

export default Header;
