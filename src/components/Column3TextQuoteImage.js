import React from "react";
import Collapsible from "react-collapsible";

const Column3TextQuoteImage = ({ caseStudy1 }) => {
  return (
    <div className="column-3">
      <div className="main-area">
        <div className="text">
          <h5 className="dates">{caseStudy1.date}</h5>
          <h2 className="titles">{caseStudy1.title}</h2>
          <h4 className="sections">{caseStudy1.section}</h4>
        </div>

        <div className="quote">
          <div className="quote-text">{caseStudy1.quote}</div>
          <div className="quote-ref">{caseStudy1.quoteDescription}</div>
        </div>

        <div className="image">
          <img src={caseStudy1.imageURL} alt={caseStudy1.title}></img>
        </div>
      </div>
      <div className="read-more-left">
        <Collapsible trigger="READ MORE +">{caseStudy1.readMore}</Collapsible>
      </div>
    </div>
  );
};

export default Column3TextQuoteImage;
