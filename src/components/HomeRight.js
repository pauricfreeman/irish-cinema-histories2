import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as caseStudyData from "../media/case-study-pins.json";
import { Link } from "react-router-dom";

// Images
import cs1 from "../media/caseStudy1/caseStudy1_pin.png";
import cs2 from "../media/caseStudy2/caseStudy2_pin.png";
import cs3 from "../media/caseStudy3/caseStudy3_pin.png";
import cs4 from "../media/caseStudy4/caseStudy4_pin.png";
import cs5 from "../media/caseStudy5/caseStudy5_pin.png";

const imgArray = [cs1, cs2, cs3, cs4, cs5];

const HomeRight = ({ widthSize, zoomSize }) => {
  const [viewport, setViewport] = useState({
    latitude: 54.075804824465514,
    longitude: -7.858572721037357,
    width: { widthSize },
    height: "100vh",
    zoom: 7.2,
  });

  const SIZE = 40;

  const [selectedPin, setSelectedPin] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPin(null);
      }
    };
    const checkClick = (e) => {
      if (e.target.className !== "page-link") {
        setSelectedPin(null);
      }
    };
    window.addEventListener("keydown", listener);
    window.addEventListener("mousedown", checkClick);

    return () => {
      window.removeEventListener("keydown", listener);
      window.removeEventListener("mousedown", checkClick);
    };
  }, []);

  // const checkForAPI = () => {
  //   console.log(process.env.REACT_APP_MAPBOX_TOKEN);
  // };

  // const checkForImage = () => {
  //   console.log();
  // };

  return (
    <div className="home-right">
      <ReactMapGL
        // onMouseMove={checkForAPI}
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoicGZyZWUwNSIsImEiOiJja25lcmFoaTMxdThkMndsY3B5NzJ3ZTZ4In0.HgYLkqSBGgypIW0cnCgX6g"
        }
        // mapboxApiAccessToken={
        //   "pk.eyJ1IjoicGZyZWUwNSIsImEiOiJja25lcXhqd2kxMHJ1MnZvN2w4Yjg3N2IzIn0.eDc17ln4vd9NllEsNdaEkw"
        // }
        mapStyle="mapbox://styles/pfree05/cknf1ovmb10ap17o0i7tjqkuc"
        // mapStyle="mapbox://styles/pfree05/cknet3wna3cpv17ocsg13oprq"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {caseStudyData.features.map((caseStudy) => (
          <Marker
            key={caseStudy.properties.CASE_STUDY_ID}
            latitude={caseStudy.geometry.coordinates[0]}
            longitude={caseStudy.geometry.coordinates[1]}
          >
            <div
              className="map-pins"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPin(caseStudy);
              }}
            >
              <img
                // src={cs1}
                src={imgArray[caseStudy.properties.CASE_STUDY_ID]}
                alt="pin"
                height={SIZE}
                className="pin"
                style={{
                  cursor: "pointer",
                  fill: "#d00",
                  stroke: "none",
                  transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
                }}
              ></img>
            </div>
          </Marker>
        ))}

        {selectedPin ? (
          <Popup
            className="popup-link"
            tipSize={5}
            anchor="top"
            latitude={selectedPin.geometry.coordinates[0]}
            longitude={selectedPin.geometry.coordinates[1]}
            // onClose={() => {
            //   setSelectedPin(null);
            // }}
          >
            <Link to={selectedPin.properties.LINK} className="map-pin-links">
              <div className="map-popup-bg">
                <h2 className="page-link">{selectedPin.properties.NAME}</h2>
              </div>
            </Link>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default HomeRight;
