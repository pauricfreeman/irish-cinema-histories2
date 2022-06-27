import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

// Components
import Collapsible from "react-collapsible";

const Column3TextImageQuote = ({ caseStudy1 }) => {
  const ReadMoreButton = (
    <div className="read-more-buttons">
      <p>READ MORE</p>
      <FontAwesomeIcon icon={faPlusCircle} />
    </div>
  );
  const ReadMoreButtonOpen = (
    <div className="read-more-buttons">
      <p>READ MORE</p>
      <FontAwesomeIcon icon={faMinusCircle} />
    </div>
  );

  return (
    <div className="column-3">
      <div className="main-area">
        <div className="text">
          <h5 className="dates">{caseStudy1.date}</h5>
          <h2 className="titles">{caseStudy1.title}</h2>
          <h4 className="sections">{caseStudy1.section}</h4>
        </div>

        <div className="image">
          <img src={caseStudy1.imageURL} alt={caseStudy1.title}></img>
        </div>

        <div className="quote">
          <div className="quote-text">{caseStudy1.quote}</div>
          <div className="quote-ref">{caseStudy1.quoteDescription}</div>
        </div>
      </div>
      <div className="read-more-left">
        <Collapsible
          trigger={ReadMoreButton}
          triggerWhenOpen={ReadMoreButtonOpen}
        >
          {caseStudy1.readMore}
        </Collapsible>
      </div>
    </div>
  );
};

export default Column3TextImageQuote;
