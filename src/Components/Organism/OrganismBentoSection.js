import React from "react";

const OrganismBentoSection = ({ children, flexDirection, flexSize }) => {
  let style = {
    flexDirection: flexDirection,
    flex: flexSize,
  };
  return (
    <div style={style} className="bento-section">
      {children}
    </div>
  );
};

export default OrganismBentoSection;
