import NavigationVTwo from "../Organism/NavigationVTwo";
const Header = (props) => {
  return (
    <header className="o-header">
      <div className="o-header--content ">
        <NavigationVTwo screenWidth={props.screenWidth}></NavigationVTwo>
      </div>
    </header>
  );
};

export default Header;
