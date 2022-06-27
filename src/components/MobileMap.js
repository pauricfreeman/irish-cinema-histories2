import React from "react";
import HomeRight from "./HomeRight_GMaps";

const MobileMap = () => {
  return (
    <div className="mobile-map">
      <HomeRight widthSize={"100vw"} mapZoom={7.2} />
    </div>
  );
};

export default MobileMap;
