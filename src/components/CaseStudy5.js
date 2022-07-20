import React from "react";

// Import Images
import scattered1 from "../media/caseStudy5/ScatteredImages/scattered1.png";
import scattered3 from "../media/caseStudy5/ScatteredImages/scattered2.png";
import scattered4 from "../media/caseStudy5/ScatteredImages/scattered3.png";
import scattered8 from "../media/caseStudy5/ScatteredImages/scattered5.png";
import scattered9 from "../media/caseStudy5/ScatteredImages/scattered7.png";

// Import Components
import HeroSection from "./HeroSection";
import CaseStudyIntro from "./CaseStudyIntro";
import Column2TextImage from "./Column2TextImage";
import Column2ImageText from "./Column2ImageText";
import Column3QuoteImageText from "./Column3QuoteImageText";
import Column3TextImageQuote from "./Column3TextImageQuote";
import IrelandBackButton from "./IrelandBackButton.js";
import ScatteredLeft from "./ScatteredLeft";
import ScatteredRight from "./ScatteredRight";

// Import Util
import data from "../data_CaseStudy5";

// Animations
// import { motion } from "framer-motion";
// import { pageAnimation } from "../animations";

const caseStudy = ({ caseStudyStatus, setCaseStudyStatus }) => {
  const cs_Data = data();

  return (
    <div>
      <div className="case-study-5">
        <div className="case-study-inner">
          <div>
            <HeroSection
              caseStudyStatus={caseStudyStatus}
              setCaseStudyStatus={setCaseStudyStatus}
              heroSection={cs_Data[0]}
            />

            <div className="case-study-column-sections">
              <CaseStudyIntro caseStudy1={cs_Data[0]} />

              <ScatteredRight image={scattered1} alt="alt" />
              <Column2TextImage caseStudy1={cs_Data[1]} />

              <Column3QuoteImageText caseStudy1={cs_Data[2]} />

              <ScatteredLeft image={scattered3} alt="alt" />
              <Column3TextImageQuote caseStudy1={cs_Data[3]} />

              <Column2ImageText caseStudy1={cs_Data[4]} />

              <ScatteredRight image={scattered4} alt="alt" />
              <Column3TextImageQuote caseStudy1={cs_Data[5]} />

              <Column2ImageText caseStudy1={cs_Data[6]} />

              <ScatteredLeft image={scattered8} alt="alt" />
              <Column2TextImage caseStudy1={cs_Data[7]} />

              <Column3QuoteImageText caseStudy1={cs_Data[8]} />

              <ScatteredRight image={scattered9} alt="alt" />
              <Column2TextImage caseStudy1={cs_Data[9]} />

              <Column3QuoteImageText caseStudy1={cs_Data[10]} />
            </div>
          </div>
        </div>
        <IrelandBackButton />
      </div>
    </div>
  );
};

export default caseStudy;
