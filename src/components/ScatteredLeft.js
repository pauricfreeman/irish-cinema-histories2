import React from "react";

const ScatteredLeft = ({ image, alt }) => {
  return (
    <div className="scattered-left">
      <img src={image} alt={alt} />
    </div>
  );
};

export default ScatteredLeft;
