import React, { useState } from "react";
import FullPageLoader from "../Pages/FullPageLoader";
const Loader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <FullPageLoader /> : null,
    () => setLoading(true), // Show Loader
    () => setLoading(false), // Hider Loader
  ];
};

export default Loader;
