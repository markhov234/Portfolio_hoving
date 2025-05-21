import AccueilBackInteractive from "./AccueilBackInteractive";
import OrganismProfil from "./OrganismProfil";
import OrganismProject from "./OrganismProject";
import OrganismFooter from "./OrganismFooter";
import React from "react";
const AccueilNews = (props) => {
  return (
    <main className="o-accueil-realisation">
      <h1 className="o-header--title">Mon Portfolio</h1>
      <AccueilBackInteractive />
      <OrganismProfil />
      <OrganismProject />
      <OrganismFooter />
    </main>
  );
};

export default AccueilNews;
