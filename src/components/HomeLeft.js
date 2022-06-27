import React from "react";
import { Link } from "react-router-dom";

// Images
import logo from "../media/Homepage/home-logo.png";

const HomeLeft = () => {
  return (
    <div className="home-left-section">
      <div className="home-left">
        <div className="home-left-logo">
          <img src={logo} alt="Irish Cinema Histories"></img>
        </div>
        <div className="home-left-text">
          <p>
            Welcome to Irish Cinema Histories. For many cinema-goers, our most
            vivid memories of cinema are linked to the venues and spaces that
            offered both an escape and a point of social connection.
          </p>
          <br></br>
          <p>
            During the first half of the twentieth century Ireland experienced a
            boom in cinema-going. Entrepreneurs and community leaders in cities,
            towns and villages across the country responded to the demand by
            building state of the art cinemas, converting existing venues and
            welcoming travelling exhibitors. By 1950 there were, according to
            the Kinematograph Year Book, some 282 cinemas around the country.
          </p>
          <br></br>
          <p>
            The vast majority of these cinemas are no longer in operation, but
            how do we remember these spaces, which were so integral to the
            social, cultural and economic fabric of the communities they served?
          </p>
          <br></br>
          <p>
            Through a series of case studies, Irish Cinema Histories uses
            archival materials and oral histories to provide a snapshot of some
            of the different types of cinema-going experiences available to
            Irish audiences in the period from 1900 to 1960. While the cinemas
            themselves may be gone, the aim of Irish Cinema Histories is to help
            their stories live on.
          </p>
        </div>

        <div className="nav-links">
          <Link to="/map" className="link-to-mobile-map">
            <p>Map</p>
          </Link>

          <Link to="/about">
            <p>About</p>
          </Link>

          <Link to="/sources">
            <p>Sources</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
