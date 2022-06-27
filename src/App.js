import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

// Import Styles
import "./styles/app.scss";

// Import Components
import Home from "./components/Home.js";
import CaseStudy1 from "./components/CaseStudy1";
import CaseStudy2 from "./components/CaseStudy2";
import CaseStudy3 from "./components/CaseStudy3";
import CaseStudy4 from "./components/CaseStudy4";
import CaseStudy5 from "./components/CaseStudy5";
import MobileMap from "./components/MobileMap";
import About from "./components/About";
import Sources from "./components/Sources";

// Animation
import { AnimatePresence, motion } from "framer-motion";
import { pageAnimation, pageAnimationHome } from "./animations";

function App() {
  // States
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <motion.div
              className="home-comp"
              variants={pageAnimationHome}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {/* <InteractiveMap /> */}
              <Home />
            </motion.div>
          </Route>

          <Route path="/a-dublin-cinema">
            <motion.div
              variants={pageAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <CaseStudy1 />
            </motion.div>
          </Route>

          <Route path="/drogheda-cinema">
            <motion.div
              variants={pageAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <CaseStudy2 />
            </motion.div>
          </Route>

          <Route path="/small-town-cinemas">
            <motion.div
              variants={pageAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <CaseStudy3 />
            </motion.div>
          </Route>

          <Route path="/travelling-cinema">
            <motion.div
              variants={pageAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <CaseStudy4 />
            </motion.div>
          </Route>

          <Route path="/suburban-cinema">
            <motion.div
              variants={pageAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <CaseStudy5 />
            </motion.div>
          </Route>

          <Route path="/map">
            <motion.div
              variants={pageAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <MobileMap />
            </motion.div>
          </Route>

          <Route path="/about">
            <motion.div
              variants={pageAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <About />
            </motion.div>
          </Route>

          <Route path="/sources">
            <motion.div
              variants={pageAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Sources />
            </motion.div>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
