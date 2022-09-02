import React from "react";

import { Link } from "react-router-dom";

// Import images
import Sponsors01 from "../media/sponsors/Sponsors-01.png";
import Sponsors02 from "../media/sponsors/Sponsors-02.png";
import Sponsors03 from "../media/sponsors/Sponsors-03.png";
import Sponsors04 from "../media/sponsors/Sponsors-04.png";

// Images
import logo from "../media/sources/logo.png";

// Import components
import IrelandBackButton from "./IrelandBackButton.js";

const About = () => {
  return (
    <div>
      <div className="sources">
        <Link to="/">
          <img className="sources-logo" src={logo} alt="hero"></img>
        </Link>

        <div className="sources-inner">
          <div className="sources-column">
            <div>
              <h1 className="title">About Irish Cinema Histories</h1>
              <br></br>
              <br></br>
              <p>
                Irish Cinema Histories is a collaborative digital research
                project led by{" "}
                <a
                  href="https://people.ucd.ie/sarah.culhane"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sarah Culhane
                </a>{" "}
                (University College Dublin) and{" "}
                <a
                  href="https://www.maynoothuniversity.ie/faculty-arts-celtic-studies-philosophy/our-people/denis-condon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Denis Condon
                </a>{" "}
                (Maynooth University). It draws on archival materials and oral
                history sources to explore some of the people, places and events
                that make up Ireland’s rich tapestry of local film culture
                during the first half of the twentieth century.
              </p>
              <br></br>
              <p>
                Both of us work from the perspective of New Cinema History and
                its focus on cinema as a social institution based in local
                communities. While not ignoring the substantial international
                aspects of film production and distribution, New Cinema History
                places particular emphasis on film exhibition and the dynamics
                of audiences in specific locations. As such, New Cinema History
                inverts film scholars' traditional focus on films. Instead of
                the details of films, New Cinema History scholars may examine
                the ways in which films were shown to audiences and how they
                experienced them. The experience of cinema is wider than merely
                the encounter with images on the screen, encompassing all that
                contributes to audiences’ interactions with the institution
              </p>
              <br></br>
              <p>
                Through a series of micro-case studies, the Irish Cinema
                Histories project looks at exhibition and cinema-going practices
                across six different geographic locales. Our case studies
                include a combination of urban and rural locales. Our first
                urban case study examines the history of Dublin’s Rotunda
                Theatre, which would be relaunched as the Ambassador cinema in
                1954. The second urban case study looks at the evolution of
                suburban cinemas on Dublin’s northside. Beyond Dublin, Drogheda
                provides the focus of our third case study. As an example of a
                large industrial town, we consider the role that cinema played
                in Drogheda’s social, cultural and economic life. Moving North,
                our fourth case study explores the history of small town
                cinema-going in counties Cavan and Monaghan. Our final case
                study brings us West where we trace the circuits of some of
                Ireland’s well-known travelling cinemas.
              </p>
              <br></br>
              <p>
                The cinemas and their locations were strategically chosen in an
                effort to create a loose typology of the kind of exhibition
                settings available to Irish audiences in the period from
                1900-1960. The order of the case studies as listed here reflects
                our own geographic positionality as Dublin-based researchers.
                Dublin cinemas and their audiences marked the starting point for
                this research, which then expanded to examine other geographic
                contexts. Our focus on rural venues responds to recent debates
                within New Cinema History highlighting the need to look more
                closely at the experiences of rural cinema-goers. As Treveri
                Gennari, O’Rawe and Hipkins note, ‘in the rural space, films are
                more likely to be shown in alternative venues, such as churches,
                clubs, open-air cinemas or even from travelling vehicles’ (2019:
                3). This diversity of exhibition spaces is reflected in our
                rural case studies, but tracing the history of these venues is
                not a straightforward task. In the absence of systematic
                archival records for Irish cinemas in general, but particularly
                rural cinemas, we hope to demonstrate how invaluable digital
                newspaper archives and oral history sources are in uncovering
                the untold stories of these lost venues.
              </p>
              <br></br>
              <p>
                If you have any information, stories or artefacts that you would
                like to share with the Irish Cinema Histories project, we’d love
                to hear from you!
                <br></br>
                <br></br>
                Sarah Culhane:{" "}
                <a href="mailto: sarah.culhane@ucd.ie">sarah.culhane@ucd.ie</a>
                <br></br>
                Denis Condon:{" "}
                <a href="mailto: denis.j.condon@mu.ie">denis.j.condon@mu.ie</a>
              </p>
            </div>
            <div className="sponsor-images">
              <img
                className="sponsors"
                src={Sponsors02}
                alt="Irish Cinema Audiences"
              ></img>
              <img className="sponsors" src={Sponsors01} alt="Caroline"></img>

              <img
                className="sponsors"
                src={Sponsors03}
                alt="Irish Research Council"
              ></img>
              <img className="sponsors" src={Sponsors04} alt="EU"></img>
            </div>
          </div>
        </div>
        <IrelandBackButton />
      </div>
    </div>
  );
};

export default About;
