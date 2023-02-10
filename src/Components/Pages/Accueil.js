import Header from "./Header.js";
import AccueilNews from "./AccueilNews";
import Contact from "./Contact";
import Profil from "./Profil";
import React from "react";
import AccueilProject from "./../Organism/AccueilProject";
import ScrollToTop from "../ReactHook/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          <ScrollToTop />
          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/projects/:id" element={<AccueilProject />}></Route>
            <Route path="/users"></Route>
            <Route path="/profil" element={<Profil />}></Route>
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
