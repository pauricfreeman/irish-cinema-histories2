import React from "react";

import { Link } from "react-router-dom";

// Images
import logo from "../media/sources/logo.png";

// Import components
import IrelandBackButton from "./IrelandBackButton.js";

// Import images
import Sponsors01 from "../media/sponsors/Sponsors-01.png";
import Sponsors02 from "../media/sponsors/Sponsors-02.png";
import Sponsors03 from "../media/sponsors/Sponsors-03.png";
import Sponsors04 from "../media/sponsors/Sponsors-04.png";

const Sources = () => {
  return (
    <div>
      <div className="sources">
        <Link to="/">
          <img className="sources-logo" src={logo} alt="hero"></img>
        </Link>

        <div className="sources-inner">
          <div className="sources-column">
            <div>
              <h1 className="title">Sources</h1>
              <br></br>
              <p>
                The stories recounted on this website are drawn from archival
                materials and oral histories.
              </p>
              <br></br>
              <h2>Archival Materials</h2>
              <br></br>
              <p>
                Most of the Irish newspaper references, clippings and images
                have been sourced at the National Library of Ireland (NLI) or
                through the Irish Newspaper Archive. Some additional Irish
                newspapers and the UK-based cinema trade journals Bioscope and
                Kinematograph Weekly have been sourced from the British
                Newspaper Archive. International cinema journals were accessed
                via the Media History Digital Library.
              </p>
              <br></br>
              <p>
                The following newspaper clippings and images related to the
                Magnet Cinema in Co. Monaghan and the Luxor Cinema in Clones
                were sourced from collections held by Monaghan County Museum:
              </p>
              <ul>
                <li>
                  Newspaper image from opening of the Magnet Cinema: Northern
                  Standard, 10 October 1938 - Scan of clipping courtesy of
                  Monaghan County Museum
                </li>
                <li>
                  One of the Last Trains at Clones - late 1950s’, Image courtesy
                  of Monaghan County Museum – Magic Miles in Monaghan online
                  exhibition
                </li>
              </ul>

              <br></br>
              <p>
                Images of Drogheda’s Whitworth Hall and Boyne Cinema and
                Dublin’s Phibsboro Picture House are taken from Cinema
                Treasures.
              </p>
              <br></br>
              <p>
                Photographs from the Lawrence Collection of Living Picture at
                the Rotunda, Dublin, the Square, Tuam, Co. Galway, Fair Green,
                Ballinasloe, Co. Galway and Town Hall Theatre, Galway are from
                NLI on Flickr Commons.
              </p>
              <br></br>
              <p>
                The illustration of Dublin’s Bohemian Picture Theatre is from
                the company’s letterhead preserved at the Liam O’Leary Archive,
                and is reproduced courtesy of the National Library of Ireland.
              </p>
              <br></br>
              <p>
                The hand-drawn image of the Mc Fadden’s Travelling Cinema is
                courtesy of Lackagh Museum and Heritage Centre.
              </p>
              <br></br>
              <p>
                Photographs of the Mc Fadden family are from the family’s
                personal archive.
              </p>
              <br></br>
              <p>
                Personal photographs of Turloughmore based cinema-goers were
                contributed by Jarlath Mc Donagh and the Murray family.
              </p>
              <br></br>
              <p>
                We have endeavoured to source the rights of all archival
                materials. If we have inadvertently misidentified a source,
                please contact us by email and we will rectify this as soon as
                possible. Contact details can be found in the About section.
              </p>
              <br></br>
              <h2>Oral Histories</h2>
              <br></br>
              <p>
                Joseph Holloway’s accounts of his cinema-going experiences in
                the early 20th century are recorded in his manuscript diary
                housed at NLI.
              </p>
              <br></br>
              <p>
                The oral history video interview clips are drawn from the{" "}
                <a
                  href="https://www.youtube.com/channel/UCKHF8FzsqbhJcVM7-mbDIgg"
                  target="_blank"
                >
                  Irish Cinema Audiences
                </a>{" "}
                project. The interviewees featured are:
                <ul>
                  <li>Brian (Fairview, Dublin)</li>
                  <li>Elizabeth (Drogheda, Louth)</li>
                  <li>Harry Mc Fadden (Mc Fadden’s Travelling Cinema)</li>
                  <li>Hugo (Clones, Monaghan)</li>
                  <li>Jarlath (Turloughmore, Galway)</li>
                  <li>Jimmy (Clones, Monaghan)</li>
                  <li>John (North Strand, Dublin)</li>
                  <li>Patrizio (Goatstown, Dublin)</li>
                  <li>Sally (Mount Merrion, Dublin)</li>
                  <li>William (Drimnagh, Dublin)</li>
                </ul>
              </p>
              <br></br>
              <h2>Acknowledgements</h2>
              <br></br>
              <p>
                Thank you to Age Action Ireland, partner organisation of the
                Irish Cinema Audiences project. With their support it has been
                possible to capture the memories of cinema-goers from across the
                country. A special thanks to all those who generously
                contributed to the Irish Cinema Audiences project by sharing
                their memories in questionnaires and interviews.
              </p>
              <br></br>
              <p>
                The Irish Cinema Histories website has received funding from the
                Irish Research Council and the EU’s Horizon 2020 programme under
                the Maire Sklodowska-Curie grant agreement No 713279
              </p>
            </div>
          </div>
        </div>
        <IrelandBackButton />
      </div>
    </div>
  );
};

export default Sources;
