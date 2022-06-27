import React from "react";
import { CookieBanner } from "@palmabit/react-cookie-law";

// Components
import HomeLeft from "./HomeLeft";
// import HomeRight from "./HomeRight";
import HomeRight from "./HomeRight_GMaps";

// React.renderComponent(
//   <div>

//   </div>,
//   document.body
// );

const Home = () => {
  return (
    <div className="homepage">
      <CookieBanner
        message="This site or third-party tools used on this site make use of cookies necessary for it's operation. By using this site, you consent to the use of cookies"
        wholeDomain={true}
        // onAccept={() => {}}
        // onAcceptPreferences={() => {}}
        // onAcceptStatistics={() => {}}
        // onAcceptMarketing={() => {}}
        styles={{
          dialog: {},
        }}
      />
      <div className="home-left-desktop">
        <HomeLeft />
      </div>
      <div className="home-right-desktop">
        <HomeRight widthSize={"65vw"} mapZoom={8.2} />
      </div>

      <div className="home-left-mobile">
        <HomeLeft />
      </div>
    </div>
  );
};

export default Home;
