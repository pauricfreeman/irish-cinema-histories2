import React from "react";
import { Link } from "react-router-dom";

// Import Back Images
import smallMap from "../media/Homepage/mapIreland_backBtn.png";
import smallMap_hover from "../media/Homepage/mapIreland_backBtn_hover.png";

const IrelandBackButton = () => {
  return (
    <div className="ireland-back-button">
      <div className="ireland-back-desktop">
        <Link to="/">
          <img className="back-regular" src={smallMap} alt="back"></img>
          <img className="back-hover" src={smallMap_hover} alt="back"></img>
        </Link>
      </div>

      <div className="ireland-back-mobile">
        <Link to="/map">
          <img className="back-regular" src={smallMap} alt="back"></img>
          <img className="back-hover" src={smallMap_hover} alt="back"></img>
        </Link>
      </div>
    </div>
  );
};

export default IrelandBackButton;
