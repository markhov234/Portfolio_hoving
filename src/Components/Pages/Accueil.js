import Header from "../Header.js";
import AccueilNews from "./AccueilNews";
import Contact from "./Contact";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AccueilBackInteractive from "./../Organism/AccueilBackInteractive";

import Footer from "./../Organism/Footer";
import useViewport from "./../ReactHook/UseViewport.js";
const Accueil = (props) => {
  const { screenWidth } = useViewport();
  return (
    <Router>
      <div className="p-accueil">
        <Header
          className="o-header margin"
          title="Mon Portfolio"
          screenWidth={screenWidth}
        />
        <div className="p-accueil-content">
          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/users"></Route>
            <Route
              path="/"
              element={<AccueilNews screenWidth={screenWidth} />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Accueil;
