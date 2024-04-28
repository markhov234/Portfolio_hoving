import AccueilNews from "./AccueilNews";
import React from "react";
import ScrollToTop from "../ReactHook/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import useViewport from "./../ReactHook/UseViewport.js";
const Accueil = (props) => {
  const { screenWidth } = useViewport();
  return (
    <Router>
      <div className="p-accueil">
        <div className="p-accueil-content">
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={<AccueilNews screenWidth={screenWidth} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Accueil;
