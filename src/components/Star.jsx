import React from "react";

const Star = ({ style }) => {
  return (
    <div
      className="absolute w-1 h-1 bg-white rounded-full transition-transform duration-300"
      style={{ ...style }}
    />
  );
};

export default Star;
