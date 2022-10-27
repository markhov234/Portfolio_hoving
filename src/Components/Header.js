// import Navigation from "./Organism/Navigation";
import Navigation_v2 from "./Organism/Navigation_v2";
const Header = (props) => {
  // Définis la function on Click ici
  return (
    <header className="o-header">
      <div className="o-header--content ">
        <Navigation_v2 screenWidth={props.screenWidth}></Navigation_v2>
      </div>
    </header>
  );
};

export default Header;
