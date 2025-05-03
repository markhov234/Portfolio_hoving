import AccueilBackInteractive from "./../Organism/AccueilBackInteractive";
import OrganismProfil from "../Organism/OrganismProfil";
import OrganismContact from "../Organism/OrganismContact";
import OrganismProject from "../Organism/OrganismProject";
import React from "react";
const AccueilNews = (props) => {
  return (
    <main className="o-accueil-realisation">
      <h1 className="o-header--title">Mon Portfolio</h1>
      <AccueilBackInteractive />
      <OrganismProfil />
      <OrganismProject />
      <OrganismContact />
    </main>
  );
};

export default AccueilNews;
