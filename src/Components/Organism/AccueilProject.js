const AccueilProject = (props) => {
  function isVisible() {
    props.isVisible[1](false);
  }

// console.log(props.isVisible[1](false))
  return (
    <div onClick={isVisible} className="o-accueil-project">
      <div>

      </div>
    </div>
  );
};

export default AccueilProject;
