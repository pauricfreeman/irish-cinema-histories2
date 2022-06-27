import React from "react";

// Import Images
import scattered1 from "../media/caseStudy2/ScatteredImages/scattered1.png";
import scattered3 from "../media/caseStudy2/ScatteredImages/scattered3.png";
import scattered4 from "../media/caseStudy2/ScatteredImages/scattered4.png";
import scattered8 from "../media/caseStudy2/ScatteredImages/scattered8.png";
import scattered9 from "../media/caseStudy2/ScatteredImages/scattered9.png";
import ScatteredLeft from "./ScatteredLeft";
import ScatteredRight from "./ScatteredRight";

// Import Components
import HeroSection from "./HeroSection";
import CaseStudyIntro from "./CaseStudyIntro";
import Column2TextImage from "./Column2TextImage";
import Column2ImageText from "./Column2ImageText";
import Column3QuoteImageText from "./Column3QuoteImageText";
import Column3TextImageQuote from "./Column3TextImageQuote";
import IrelandBackButton from "./IrelandBackButton.js";

// Import Util
import data from "../data_CaseStudy2";

// Animations
// import { motion } from "framer-motion";
// import { pageAnimation } from "../animations";

const caseStudy = ({ caseStudyStatus, setCaseStudyStatus }) => {
  const cs_Data = data();

  return (
    <div>
      <div className="case-study-2">
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
              <Column2ImageText caseStudy1={cs_Data[1]} />

              <Column3TextImageQuote caseStudy1={cs_Data[2]} />

              <ScatteredLeft image={scattered3} alt="alt" />
              <Column2ImageText caseStudy1={cs_Data[3]} />

              <ScatteredRight image={scattered4} alt="alt" />
              <Column2TextImage caseStudy1={cs_Data[4]} />

              <Column2ImageText caseStudy1={cs_Data[5]} />

              <Column3TextImageQuote caseStudy1={cs_Data[6]} />

              <Column2ImageText caseStudy1={cs_Data[7]} />

              <ScatteredLeft image={scattered8} alt="alt" />
              <Column2TextImage caseStudy1={cs_Data[8]} />

              <ScatteredRight image={scattered9} alt="alt" />
              <Column3QuoteImageText caseStudy1={cs_Data[9]} />

              <Column3TextImageQuote caseStudy1={cs_Data[10]} />
            </div>
          </div>
        </div>
        <IrelandBackButton />
      </div>
    </div>
  );
};

export default caseStudy;
