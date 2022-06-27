import React from "react";

import { Link } from "react-router-dom";

const HeroSection = ({ caseStudyStatus, setCaseStudyStatus, heroSection }) => {
  return (
    <div className="hero-section">
      <div className="hero-bg-image">
        <img
          className="hero-bg-image-img"
          src={heroSection.heroBGimage}
          alt="hero"
        ></img>
      </div>

      <Link to="/">
        <div className="hero-logo">
          <img src={heroSection.heroLogo} alt="logo"></img>
        </div>
      </Link>

      <div className="hero-title">
        <h5 className="welcome-to">Welcome to</h5>
        {heroSection.heroTitle}
        {heroSection.heroYears}
      </div>
    </div>
  );
};

export default HeroSection;
