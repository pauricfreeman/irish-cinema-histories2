import React from "react";

// Import Images
import scattered1 from "../media/caseStudy4/ScatteredImages/scattered1.png";
import scattered2 from "../media/caseStudy4/ScatteredImages/scattered2.png";
import scattered3 from "../media/caseStudy4/ScatteredImages/scattered3.png";
import scattered5 from "../media/caseStudy4/ScatteredImages/scattered5.png";
import scattered6 from "../media/caseStudy4/ScatteredImages/scattered6.png";
import scattered7 from "../media/caseStudy4/ScatteredImages/scattered7.png";

// Import Components
import HeroSection from "./HeroSection";
import CaseStudyIntro from "./CaseStudyIntro";
import Column2TextImage from "./Column2TextImage";
import Column2ImageText from "./Column2ImageText";
import Column3QuoteImageText from "./Column3QuoteImageText";
//import Column3TextImageQuote from "./Column3TextImageQuote";
import IrelandBackButton from "./IrelandBackButton.js";
import ScatteredLeft from "./ScatteredLeft";
import ScatteredRight from "./ScatteredRight";

// Import Util
import data from "../data_CaseStudy4";

// Animations
// import { motion } from "framer-motion";
// import { pageAnimation } from "../animations";

const caseStudy = ({ caseStudyStatus, setCaseStudyStatus }) => {
  const cs_Data = data();

  return (
    <div>
      <div className="case-study-4">
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

              <ScatteredLeft image={scattered2} alt="alt" />
              <Column2TextImage caseStudy1={cs_Data[2]} />

              <ScatteredRight image={scattered3} alt="alt" />
              <Column3QuoteImageText caseStudy1={cs_Data[3]} />

              <Column2TextImage caseStudy1={cs_Data[4]} />

              <ScatteredRight image={scattered5} alt="alt" />
              <Column3QuoteImageText caseStudy1={cs_Data[5]} />

              <ScatteredLeft image={scattered6} alt="alt" />
              <Column2TextImage caseStudy1={cs_Data[6]} />

              <ScatteredRight image={scattered7} alt="alt" />
              <Column3QuoteImageText caseStudy1={cs_Data[7]} />
            </div>
          </div>
        </div>
        <IrelandBackButton />
      </div>
    </div>
  );
};

export default caseStudy;
