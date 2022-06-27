import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

// Components
import Collapsible from "react-collapsible";

const Column2ImageText = ({ caseStudy1 }) => {
  const ReadMoreButton = (
    <div className="read-more-buttons">
      <FontAwesomeIcon icon={faPlusCircle} /> <p>READ MORE</p>
    </div>
  );
  const ReadMoreButtonOpen = (
    <div className="read-more-buttons">
      <FontAwesomeIcon icon={faMinusCircle} /> <p>READ MORE</p>
    </div>
  );

  return (
    <div className="column-2">
      <div className="main-area">
        <div className="image">
          <img src={caseStudy1.imageURL} alt={caseStudy1.title}></img>
        </div>

        <div className="text">
          <h5 className="dates">{caseStudy1.date}</h5>
          <h2 className="titles">{caseStudy1.title}</h2>
          <h4 className="sections">{caseStudy1.section}</h4>
        </div>
      </div>
      <div className="read-more-right">
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

export default Column2ImageText;
