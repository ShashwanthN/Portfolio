import React from "react";

const Boundary = ({ children }) => {
  return <div className="md:w-4/5 mx-auto">{children}</div>;
};

export default Boundary;
