import AccueilBackInteractive from "./../Organism/AccueilBackInteractive";
import OrganismProfil from "../Organism/OrganismProfil";
import OrganismContact from "../Organism/OrganismContact";
import ProjectPopup from "../Organism/project_popup";
import React from "react";
const AccueilNews = (props) => {
  // #TODO:Optimiser les composants pour les mettres plus petits et facile à revenir dedans
  // #TODO: Ajouter un LAZY LOAD pour les images et un LOADING status quand les données chargent
  const MyLazyProject = React.lazy(() => import('../Organism/OrganismProject'));
  return (
    // <main className="o-accueil-realisation">
    //   <h1 className="o-header--title">Mon Portfolio</h1>
    //   <AccueilBackInteractive />
    //   <OrganismProfil />
    //   <React.Suspense fallback={<div>Loading...</div>}>
    //  <MyLazyProject />
    //  </React.Suspense>
    //   <OrganismContact />
    // </main>
    <ProjectPopup></ProjectPopup>
  );
};

export default AccueilNews;
