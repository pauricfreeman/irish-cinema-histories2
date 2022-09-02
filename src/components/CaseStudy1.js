import React from "react";

// Packages
import ResponsiveEmbed from "react-responsive-embed";

// Import Images
import scattered5 from "../media/caseStudy1/ScatteredImages/scattered5.png";
import scattered7 from "../media/caseStudy1/ScatteredImages/scattered7.png";
import scattered8 from "../media/caseStudy1/ScatteredImages/scattered8.png";
import scattered10 from "../media/caseStudy1/ScatteredImages/scattered10.png";
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
import data from "../data_CaseStudy1";

// Animations
// import { motion } from "framer-motion";
// import { pageAnimation } from "../animations";

const caseStudy = ({ caseStudyStatus, setCaseStudyStatus }) => {
  const cs_Data = data();

  return (
    <div>
      <div className="case-study-1">
        <div className="case-study-inner">
          <div>
            <HeroSection
              // caseStudyStatus={caseStudyStatus}
              // setCaseStudyStatus={setCaseStudyStatus}
              heroSection={cs_Data[0]}
            />

            <div className="case-study-column-sections">
              <ScatteredRight image={scattered10} alt="alt" />
              <CaseStudyIntro caseStudy1={cs_Data[0]} />

              <Column3TextImageQuote caseStudy1={cs_Data[1]} />

              <Column2ImageText caseStudy1={cs_Data[2]} />

              <Column3TextImageQuote caseStudy1={cs_Data[3]} />

              <ScatteredRight image={scattered10} alt="alt" />
              <Column2ImageText caseStudy1={cs_Data[4]} />

              <ScatteredLeft image={scattered5} alt="alt" />
              <Column3TextImageQuote caseStudy1={cs_Data[5]} />

              <Column2ImageText caseStudy1={cs_Data[6]} />

              <ScatteredLeft image={scattered7} alt="alt" />
              <Column2TextImage caseStudy1={cs_Data[7]} />

              <ScatteredRight image={scattered8} alt="alt" />
              <Column3QuoteImageText caseStudy1={cs_Data[8]} />

              <Column3TextImageQuote caseStudy1={cs_Data[9]} />

              <ScatteredRight image={scattered10} alt="alt" />

              <Column2ImageText caseStudy1={cs_Data[10]} />
            </div>
          </div>
        </div>
        <IrelandBackButton />
      </div>
    </div>
  );
};

export default caseStudy;
