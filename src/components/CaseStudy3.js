import React from "react";

// Import Images
import scattered01 from "../media/caseStudy3/ScatteredImages/scattered01.png";
import scattered1 from "../media/caseStudy3/ScatteredImages/scattered1.png";
import scattered2 from "../media/caseStudy3/ScatteredImages/scattered2.png";
import scattered3 from "../media/caseStudy3/ScatteredImages/scattered3.png";
import scattered_mon from "../media/caseStudy3/ScatteredImages/scattered_mon.png";
import scattered7 from "../media/caseStudy3/ScatteredImages/scattered7.png";
import scattered9 from "../media/caseStudy3/ScatteredImages/scattered9.png";
import scattered10 from "../media/caseStudy3/ScatteredImages/scattered10.png";

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
import data from "../data_CaseStudy3";

// Animations
// import { motion } from "framer-motion";
// import { pageAnimation } from "../animations";

const caseStudy = ({ caseStudyStatus, setCaseStudyStatus }) => {
  const cs_Data = data();

  return (
    <div>
      <div className="case-study-3">
        <div className="case-study-inner">
          <div>
            <HeroSection
              caseStudyStatus={caseStudyStatus}
              setCaseStudyStatus={setCaseStudyStatus}
              heroSection={cs_Data[0]}
            />

            <div className="case-study-column-sections">
              <ScatteredRight image={scattered01} alt="alt" />
              <CaseStudyIntro caseStudy1={cs_Data[0]} />
              <ScatteredRight image={scattered1} alt="alt" />
              <Column2ImageText caseStudy1={cs_Data[1]} />

              <ScatteredLeft image={scattered2} alt="alt" />
              <Column3TextImageQuote caseStudy1={cs_Data[2]} />

              <ScatteredRight image={scattered3} alt="alt" />
              <Column2ImageText caseStudy1={cs_Data[3]} />

              <Column3TextImageQuote caseStudy1={cs_Data[4]} />

              <Column2ImageText caseStudy1={cs_Data[5]} />

              <CaseStudyIntro caseStudy1={cs_Data[6]} />
              <ScatteredLeft image={scattered_mon} alt="alt" />

              <Column3TextImageQuote caseStudy1={cs_Data[7]} />

              <ScatteredRight image={scattered7} alt="alt" />
              <Column3QuoteImageText caseStudy1={cs_Data[8]} />

              <Column2TextImage caseStudy1={cs_Data[9]} />

              <ScatteredRight image={scattered9} alt="alt" />
              <Column3QuoteImageText caseStudy1={cs_Data[10]} />

              <ScatteredLeft image={scattered10} alt="alt" />
              <Column3TextImageQuote caseStudy1={cs_Data[11]} />
            </div>
          </div>
        </div>
        <IrelandBackButton />
      </div>
    </div>
  );
};

export default caseStudy;
