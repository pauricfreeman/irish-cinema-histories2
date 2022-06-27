import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import * as caseStudyData from "../media/case-study-pins.json";
import { Link } from "react-router-dom";

// Images
import cs1 from "../media/caseStudy1/caseStudy1_pin.png";
import cs2 from "../media/caseStudy2/caseStudy2_pin.png";
import cs3 from "../media/caseStudy3/caseStudy3_pin.png";
import cs4 from "../media/caseStudy4/caseStudy4_pin.png";
import cs5 from "../media/caseStudy5/caseStudy5_pin.png";

const imgArray = [cs1, cs2, cs3, cs4, cs5];

// const SIZE = 40;

const center = {
  lat: 54.075804824465514,
  lng: -7.858572721037357,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const HomeRight = ({ widthSize, mapZoom }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const mapContainerStyle = {
    width: { widthSize },
    height: "100vh",
  };

  const mapZoomStyle = mapZoom;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA6DcOfRlm5jMjemuyC7N7_eAy1Z3Q5o0Y",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={mapZoomStyle}
        center={center}
        options={options}
      >
        {caseStudyData.features.map((caseStudy) => (
          <Marker
            key={caseStudy.properties.CASE_STUDY_ID}
            position={{
              lat: caseStudy.geometry.coordinates[0],
              lng: caseStudy.geometry.coordinates[1],
            }}
            onClick={() => {
              setSelectedCaseStudy(caseStudy);
            }}
            icon={{
              url: imgArray[caseStudy.properties.CASE_STUDY_ID],
              scaledSize: new window.google.maps.Size(36, 50),
            }}
          />
        ))}

        {selectedCaseStudy && (
          <InfoWindow
            position={{
              lat: selectedCaseStudy.geometry.coordinates[0],
              lng: selectedCaseStudy.geometry.coordinates[1],
            }}
            onCloseClick={() => {
              setSelectedCaseStudy(null);
            }}
          >
            <Link
              to={selectedCaseStudy.properties.LINK}
              className="map-pin-links"
            >
              <div className="map-popup-bg">
                <h2 className="page-link">
                  {selectedCaseStudy.properties.NAME}
                </h2>
              </div>
            </Link>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default HomeRight;
