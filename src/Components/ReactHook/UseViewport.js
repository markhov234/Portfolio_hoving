import React from "react";
const useViewport = (screenWidthTest) => {
  const [screenWidth, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [screenWidthTest]);

  // Return the width so we can use it in our components
  return { screenWidth };
};
export default useViewport;
