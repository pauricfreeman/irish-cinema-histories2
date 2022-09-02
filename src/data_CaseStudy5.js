import { v4 as uuidv4 } from "uuid";

// Packages
import ResponsiveEmbed from "react-responsive-embed";

// Import hero images
import logo from "./media/caseStudy5/logo.png";
import heroBG from "./media/caseStudy5/hero_bg.jpg";

// Import case study images
import CaseStudy1 from "./media/caseStudy5/storyImages/CaseStudy1.png";
import CaseStudy2 from "./media/caseStudy5/storyImages/CaseStudy2.png";
import CaseStudy3 from "./media/caseStudy5/storyImages/CaseStudy3.png";
import CaseStudy4 from "./media/caseStudy5/storyImages/CaseStudy4.png";
import CaseStudy5 from "./media/caseStudy5/storyImages/CaseStudy5.png";
import CaseStudy6 from "./media/caseStudy5/storyImages/CaseStudy6.png";
import CaseStudy7 from "./media/caseStudy5/storyImages/CaseStudy7.png";
import CaseStudy8 from "./media/caseStudy5/storyImages/CaseStudy8.png";
import CaseStudy9 from "./media/caseStudy5/storyImages/CaseStudy9.png";
import CaseStudy10 from "./media/caseStudy5/storyImages/CaseStudy10.png";

function caseStudy2_array() {
  return [
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Hero Object ////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      heroTitle: (
        <div>
          <h4>Suburban Cinema Stories</h4>
          {/* <h4>The Savoy</h4> */}
        </div>
      ),
      heroYears: <h5 className="hero-years">1913 - 1954</h5>,
      heroLogo: logo,
      heroBGimage: heroBG,
      id: uuidv4(),
      caseStudyIntro: (
        <div>
          <h1 className="case-study-intro-title">
            From Clontarf to Cabra: suburban cinemas on Dublin's northside
            <br></br>
          </h1>
          <div className="case-study-intro-body">
            <p>
              Cinema was remarkable as the first form of professionally produced
              entertainment that was available on a continual basis in the areas
              where people lived. Unlike theatre, which was largely confined to
              the centres of cities or large towns, cinema moved very quickly
              from city centres not only to small towns and rural areas but also
              to the residential zones on the periphery of urban areas and out
              into their suburbs.
            </p>
            <br></br>
            <p>
              In moving out with the population into the new residential
              suburbs, cinema fundamentally reorganized the geography of
              commercial entertainment in advance of the arrival of such other
              media as radio and television, which would bring entertainment
              into the home. Unlike these increasingly intimate entertainment
              forms, cinema was also communal: it took place as part of an
              audience in local areas. As such, it resembled fairs and
              travelling shows but was distinguished from them by its
              permanence.
            </p>
            <br></br>
            <p>
              Cinema became part of everyday life in the suburbs, a constant
              presence on the local streetscape, like the grocer or butcher. Its
              affordability even put it within reach of many local children for
              whom Saturday matinees were organized, often called the “penny
              rush,” offering cliff-hanger episodes of serials - the
              “follier-uppers.”
            </p>
            <br></br>
            <p>
              The economics of suburban cinema in Dublin was consolidated early
              on by the city’s chief judge, the Recorder, who in the 1910s
              refused lucrative Sunday licences to any city cinema not serving a
              working-class population whose labour offered them little
              opportunity to attend cinema during the week. In the following
              case study, we will focus on how cinema pushed out into the
              expanding residential parts of Dublin’s northside, beginning with
              the north quays, Clontarf, Phibsboro and Stoneybatter in the 1910s
              and 1920s, and subsequently into the developing suburbs of
              Druncondra, Fairview, Cabra and Whitehall.
            </p>
            <br></br>
            <p></p>
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 1 - Drogheda Picture Place
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>The Phoenix Picture Palace, Ellis Quay</p>
        </div>
      ),
      date: "1912",
      imageURL: CaseStudy1,
      section: (
        <p>
          “Rational, interesting, intelligent and educative amusement,” Dublin’s
          Lord Mayor Lorcan Sherlock announced as he opened the Phoenix Picture
          Palace on Ellis Quay on Tuesday, 3 December 1912, “was to be given
          there to thousands of the working class people of that neighbourhood
          at very cheap rates.”
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">quote</h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>description</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Ellis Quay was not suburban, but it was near the western periphery
            of the city as it pushed towards the Phoenix Park, after which the
            cinema was named. As such, the Phoenix is the first cinema on
            Dublin’s northside that opened considerably outside the city centre,
            which remained the location of such other forms of professional
            commercial entertainment as theatres.
          </p>
          <br></br>
          <p>
            In this more residential part of the city, observers other than
            Sherlock had little doubt about the kind of audiences the cinema
            would be serving. “The theatre will cater principally for the
            working classes,” columnist Paddy noted in the <i>Bioscope</i>. It
            was also, as Paddy further noted, “in a very fine position” that
            meant that it could rely on considerable passing trade from people
            using the trams that went by its door or on their way to or from
            such nearby destinations as the Royal Barracks, the Smithfield
            markets area, James’s Gate Brewery and Kingsbridge railway station.
          </p>
          <br></br>
          <p>
            A residential population, passing trade and specifically attracted
            patrons were all needed because the directors of the Phoenix Picture
            Palace Limited - A.T. Wright, David Frame, John Mackay and Henry
            Grandy - had speculated on a large and state-of-the-art building
            capable of seating 1,500 people. To further enhance its attractions,
            the directors hired popular stage comedian Cathal McGarvey as the
            Phoenix’s initial manager.
          </p>
          <br></br>
          <p>
            Some of the first big-budget special attractions that McGarvey
            advertised in the city’s newspapers to draw patrons from other parts
            of the city were the Italian-made epic of classical{" "}
            <i>Rome Quo Vadis?</i>
            (Italy: Cines, 1912), an adaptation of Alexander Dumas’{" "}
            <i>The Three Musketeers</i> (France: Film d’Art, 1912) and{" "}
            <i>From the Manger to the Cross</i> (US: Kalem, 1912). The most
            prominent of all its early productions, From the Manger to the Cross
            was the first life of Christ to be filmed on location in Palestine
            and had been produced by the same Kalem Company filmmakers who
            earlier in 1912 had been shooting in Ireland (see it here).
          </p>
          <br></br>
          <p>
            Opponents of <i>From the Manger to the Cross</i> held public
            meetings to have it banned, protesting “the utter undesirability of
            outraging the religious sentiments of the citizens of Dublin by
            exhibiting in the form of an entertainment, and for a purely
            commercial object, the sufferings of Our Blessed Lord, and the more
            sacred incidents of His life on earth.” However, the film also had
            many admirers, including among the clergy, and it ran at the Phoenix
            for an unusually long four-week run from 3-31 March 1913.
          </p>
          <br></br>
          <p>
            The Phoenix’s role in the local working-class community was
            epitomized later that year by events during the strikes and clashes
            with employers of the Dublin Lockout of 1913. Unconnected to the
            strikes themselves but highlighting the slum conditions in which so
            many of the city’s workers lived, two tenement houses in Church
            Street collapsed on the evening of 2 September 1913, killing seven
            people. Not ten-minutes walk away, the Phoenix held a benefit night
            for the victims on 9 September by adding live singers and comedians
            - including McGarvey - to its previously booked films. A sum of 353
            shillings and sevenpence was donated in the Phoenix’s name to the
            relief fund.
          </p>
          <br></br>
          <p>
            Writer and broadcaster Paddy Crosbie suggests that the Phoenix’s
            children’s Saturday matinees may have had an even longer lasting
            impact on the cultural lives of young Dubliners. Born just metres
            from the Phoenix or “Feeno” in 1913, Crosbie vividly records its
            “penny rush” of the late 1910s and early 1920s in his memoir{" "}
            <i>Your Dinner’s Poured Out</i>. The single penny entry attracted
            children from all over the city “from as far away as Fairview,
            Ringsend or Drumcondra in little groups [that converged] on Ellis
            Quay, as if drawn by a magnet.” Rituals of sweet-buying beforehand,
            the tussels and overcrowding in the auditorium, and an uncritical
            delight in the formulaic films shown were part of the experience of
            cinemagoing for this segment of the Phoenix’s audience.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 2 - Whitworth Hall's Cinema House
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Clontarf’s Seaside Picture Palace</p>
        </div>
      ),
      date: "1913",
      imageURL: CaseStudy2,
      section: (
        <p>
          No longer needed for council meetings once the former township of
          Clontarf was incorporated into Dublin city in 1901, the former
          Clontarf Town Hall became the first truly suburban cinema north of the
          Liffey. Opening on 18 July 1913, the first ads called it the Clontarf
          Electric Theatre, but its proprietors intended the more evocative Sea
          Side Picture Palace.{" "}
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Sunday performances brought out an objectionable class from the
            city.
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Rev. John Love Morrow, <i>Freeman’s Journal</i>
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            That location on the tram route from the city for those going on
            outings to the sea was undoubtedly one of the attractions of
            Clontarf for Simon Brownstein, Lewis Humphreys and George Mowlds of
            the Clontarf Entertainments Company. Although their venture in
            Clontarf would be short lived, several other exhibitors would follow
            them and try their hand at cinema in this desirable, if not densely
            populated, district.
          </p>
          <br></br>
          <p>
            The availability of such a sizeable building well known within the
            local community was also propitious. The auditorium seated about 400
            patrons, charging them 1 shilling, 6 pence or 4 pence. Its
            projection box was, unusually, constructed outside the building and
            offered “an extraordinary good view of Dublin harbour, which comes
            within 100ft. of the entrance gates.” When the reporter for the{" "}
            <i>Bioscope</i> visited it for the opening film <i>Monte Cristo</i>{" "}
            (US: Selig, 1912), s/he noted that “over the entrance gates are
            strung a series of flags, and a spacious drive, intersected with
            flower beds, leads up the hall steps.”
          </p>
          <br></br>
          <p>
            Sir Charles Cameron, Dublin’s long-serving chief medical officer,
            performed the opening ceremony, receiving the gift of a gold-mounted
            umbrella and revealing, to applause and laughter, that he was a
            shareholder in a cinema company “which was paying 20 per cent., and
            he was only sorry he didn’t sell out all he had and invest the
            proceeds in a picture house.” Apart from its investment
            opportunities, cinema, he observed, provided “attractive,
            educational and appealing entertainment.”
          </p>
          <br></br>
          <p>
            Despite this promising endorsement from a prominent official, the
            proprietors had to contend with the vagaries of local conditions.
            For a start, the building had been and would continue to be a place
            where meetings of various kinds were held, and as such, despite the
            abolition of the local council, it resembled mixed-use town halls
            all over the country. “A surprise awaited the magistrates at the
            Clontarf Town Hall last week,” the{" "}
            <i>Kinematograph and Lantern Weekly</i> reported at the end of July
            1913, “when they were about to hold the usual fortnightly petty
            sessions. The hitherto bare and desolate hall was fitted up as a
            picture house, and they had to hold their court in an inner room.”
          </p>
          <br></br>
          <p>
            Less accommodating was John Love Morrow, Presbyterian minister and
            chair of the Contarf Citizens’ Association, who in October 1913
            objected to the renewal of the cinema’s music licence. Morrow
            claimed that Dublin Corporation had undertaken to preserve the use
            of the hall for the people of Clontarf, that the “cinematograph show
            was thrust upon the people without consultation” and that its Sunday
            shows attracted “an objectionable class from the city.” In court and
            in letters to the newspapers, the proprietors saw off Morrow’s
            challenge in 1913, but he would continue to object to Sunday opening
            in particular.
          </p>
          <br></br>
          <p>
            Nevertheless, Brownstein, Humphreys and Mowlds would give up the
            Clontarf Town Hall sometime in 1914, and another syndicate would
            reopen the cinema there in 1916, and when that faltered, others
            would try again in 1917, 1919 and 1920. By 1925, the building had
            ceased to be a cinema, and in 1927, it had become a Catholic church.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 3 -Juvenile Delinquent Medium
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Phibsboro Picture House</p>
        </div>
      ),
      date: "1914",
      imageURL: CaseStudy3,
      section: (
        <p>
          When the Phibsboro Picture House opened on 23 May 1914, it was the
          first of two large and luxurious cinemas to open within weeks of each
          other and be forced to compete for audiences in this residential area
          at the meeting of two major roads on the northern edge of the city.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            How long is Catholic Dublin going to stand this sort of thing?
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            P. Donnelly, <i>Freeman’s Journal</i>
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            The journalists who reported on the opening were unanimous in their
            praise of the beauty and comfort of the building. “The promoters
            deserve every congratulation, not only as regards the excellent film
            presented, but also in as far as design, furnishing, lighting,
            ventilation, etc., are concerned,” commented a writer in the{" "}
            <i>Evening Herald</i>. “The house is most comfortable, and great
            crowds have been enjoying both the comfort and excellent fare
            provided. The architect, Mr. Aubrey V. O’Rourke, C.E., was paid a
            very high compliment by the directors at the opening ceremony.”
          </p>
          <br></br>
          <p>
            Surviving photographs of the original facade – taken in the early
            1950s before the cinema was demolished to be rebuilt as the State
            Cinema – show a striking addition to the streetscape in this part of
            the city. Construction work had begun in summer 1913, but even after
            it had started, alterations were made to the design, probably in
            order to better compete with the Bohemian Picture Theatre, which was
            also being built close by on Phibsborough Road. Construction on the
            Phibsboro, Bohemian and all other Dublin buildings stopped in
            September 1913 because of the Dublin Lockout’s general strike, but
            it resumed when builders returned to work in early 1914.
          </p>
          <br></br>
          <p>
            The promoters were William King, a Co. Dublin farmer and
            horse-breeder, who partnered with three seasoned cinema owners:
            Dublin Corporation councillor and former mayor John J. Farrell and
            British exhibitors Henry Hibbert and T. Wood. Farrell already ran
            three Dublin cinemas through his Irish Kinematograph Company. King’s
            brother, John A. King, became the Phibsboro’s first manager.
          </p>
          <br></br>
          <p>
            Paddy, the Irish correspondent of the London-based trade journal{" "}
            <i>Bioscope</i> described the interior on a visit shortly after it
            opened. “I went round the other evening to see the picture theatre
            in Phibsboro’,” he revealed, “and particularly did I admire the
            ‘sunrise and sunset’ system of lighting, which was concealed round
            the walls of the building. The building holds, roughly, 600, and the
            tip-ups [seats] are in Rose Barri shade, the carpets being of a
            darker colour. The harmonizing effect is thus very beautiful. The
            balcony, to which admission is covered by the nimble shilling, runs
            in a wide curve, and has a splendid ‘rake’.” Paddy may not have been
            paying because the first ads put the prices at 3d, 6d and 9d, the
            last for the balcony, and not a shilling (12d). Ads also reveal that
            the performances were continuous from 3 to 10:30 rather than at set
            times and that the programme changed on Monday and Thursday –
            initially with no Sunday shows, but these were soon added.
          </p>
          <br></br>
          <p>
            Focused on these details, ads neglected to name the opening film, so
            the first advertised film at the Phibsboro was the Danish feature{" "}
            <i>In the Shadow of the Throne (I Tronens Skygge;</i> Kinografen,
            1914). This film told the story of a prince who falls in love with a
            peasant girl, but when he is forced to marry a princess after
            becoming head of state, the peasant girl chooses to become a nun.
            Booked to run for three days beginning on Monday, 1 June, the film’s
            religious theme attracted the attention of the Catholic Church’s
            Vigilance Committee. The Committee’s objections culminated with twin
            brothers William and Francis Larkin shouting in the auditorium
            during a screening and throwing ink at the screen, splattering the
            blouse and music of Miss Eager, one of the three musicians
            accompanying the film. The Larkins were arrested, found guilty and
            fined a nominal 5 shillings, a punishment whose leniency suggested –
            not for the first or last time – that judges tacitly supported
            Vigilance Committee activities.
          </p>
          <br></br>
          <p>
            If not always in such a controversial way, the Phibsboro would
            remain a significant part of cultural life in this part of the city
            for decades.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 4 - Censoring Irish films at the Boyne
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Bohemian Picture Theatre</p>
        </div>
      ),
      date: "1914",
      imageURL: CaseStudy4,
      section: (
        <p>
          The second of Phibsborough’s two early cinemas, the Bohemian Picture
          Theatre opened two weeks after its rival on 8 June 1914 and attracted
          audiences through not only its state-of-the-art architecture,
          luxurious interior and choice of films but also what it was soon
          advertising as Dublin’s best musical accompaniment.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">quote</h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>description</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            George L. O’Connor, Dublin’s most prominent cinema architect, drew
            the plans for the cinema on the site of two derelict houses at
            154-55 Phibsborough Road that would eventually be called the
            Bohemian Picture Theatre after the local football team. Although
            another striking addition to Phibsborough’s streetscape, his design
            was less decorative and incorporated two small shops on either side
            of the entrance, each only a single storey in order not to intrude
            too much on the theatre itself. The facade was, nonetheless,
            attractive, being “finished in red brick and chiselled limestone
            dressings, gables and finials,” according to the{" "}
            <i>Irish Builder</i>. The picture house announced itself with a
            canopy that extended between the shops, and patrons entered the
            auditorium by climbing a few steps to the box office and lobby.
            Inside, a wide staircase led to a spacious gallery, while an
            auditorium 104 feet by 38 feet was furnished with about 900 seats
            and carpets in shades of blue and topped by an elliptical ceiling
            finished in decorative fibrous plaster.
          </p>
          <br></br>
          <p>
            What drew 24-year-old Bohemian owner Frederick Arthur Sparling, a
            one-time medical student from a merchant family in Scarriff, Co.
            Clare, to the cinema business is not clear, but he chose to compete
            with the Phibsboro Picture House by offering a very similar
            entertainment. Both venues offered continuous performances from 3 to
            10:30, but the Boh’s prices of 3d, 6d and 1s were slightly higher
            than the Phibsboro’s 3d, 6d and 9d. The ad for the Boh’s opening
            promised “refinement, good music and clear, steady pictures.”
            Supported “by an all round Programme of Amusing Comics and Thrilling
            Dramas,” the bill was headed by the four-reel British racing drama,{" "}
            <i>In the Hands of London Crooks</i> (Barker, 1914). Sparling likely
            left film choices largely to the experienced managers he hired,
            beginning with W. O. Ashton, who had previously worked for a film
            distribution company.
          </p>
          <br></br>
          <p>
            The Boh’s management increasingly used music to persuade patrons to
            travel out of the city, helped by the two tram lines that served the
            area. Yorkshire-born Percy Carver was the cinema’s first musical
            director,and under his leadership, what ads in summer 1915 called
            the “finest orchestra in Ireland” had grown to 16 musicians. The Boh
            also experimented with using concert musicians in December 1915, but
            when the city-centre Carlton hired virtuoso violinist Erwin
            Goldwater in early 1916, the Boh regained its musical preeminence by
            hiring first the concert cellist Clyde Twelvetrees and then the
            violinist Achille Simonetti. By 1920, the cinema took a different
            approach to accompaniment by hiring Leslie James to lead the
            orchestra and provide accompaniment from his pipe organ.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/Y5pNIK25KnE" />
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 5 - Aimsir Padraig
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Manor Street Picture House </p>
        </div>
      ),
      date: "1920",
      imageURL: CaseStudy5,
      section: (
        <p>
          On 10 May 1920, the Manor Cinema opened on Manor Street, a residential
          street that lay north-west of the city between the Liffey and the
          North Circular Road, about ten-minutes walk north of the Phoenix, in
          an area dominated by the working-class population of historic
          Oxmantown and Stoneybatter.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            When you go to the Manor next time, it is possible that you may be
            one of the local attractions.
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            <i>Sport</i> 4 September 1920n
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            In 1914, builder Michael Whelan had planned to construct a cinema on
            the site of houses at 60 and 61 Manor Street, but he seems to have
            run into financial difficulties, and the idea for a cinema on this
            site was instead realised in 1920 by the Fagans, a well-known Dublin
            musical family resident in the area. Managed by George Fagan, the
            Manor offered strong musical accompaniment from a six-piece
            orchestra led by violinist Terry O’Connor and including Kitty and
            Lily Fagan on cello and piano, respectively. The main opening film
            was <i>He Comes Up Smiling</i> (US: Fairbanks, 1918), a comedy
            starring Douglas Fairbanks. Dublin newspapers reviewed the opening
            favourably but briefly, the <i>Irish Independent</i> noting its
            “excellent programme of pictures and music, and full houses. The
            theatre is luxuriously fitted throughout.”
          </p>
          <br></br>
          <p>
            Unlike the other early suburban cinemas considered here, the Manor
            was not located on a tram line. As a result, the management had to
            work particularly hard over the course of the 1920s to attract
            patrons from outside its immediate vicinity, and it did this in a
            variety of ways that went beyond the choice of feature films and
            music. These included filming people in the city streets, offering
            weeks of Irish films and staging talent contests.
          </p>
          <br></br>
          <p>
            Beginning at the end of August 1920, the management hired camera
            operators from the Hugh Stanley Company to distribute handbills in
            city-centre streets inviting people to be filmed and to see
            themselves later on screen at the Manor. “Large crowds of people
            took advantage of the opportunity to ‘act’ for the films,” the{" "}
            <i>Kinematograph Weekly</i> asserted. "When you go to the Manor next
            time,” <i>Sport</i> claimed, “it is possible that you may be one of
            the local attractions.” Although this kind of filming in the streets
            was presented as a novelty, it was also one of the ways that the
            very first filmmakers twenty years previously had attracted patrons
            to their shows.
          </p>
          <br></br>
          <p>
            In October 1920, the Manor presented its first “All Irish Week.” The
            bill featured the romantic drama{" "}
            <i>When Love Came to Gavin Burke, Rafferty’s Rise</i>, a comedy
            about a rural policeman, and some “scenics,” short films of Irish
            beauty spots. All of these were made by the Film Company of Ireland,
            the country’s main producer of feature films.
          </p>
          <br></br>
          <p>
            It is difficult to judge the effectiveness of these strategies, but
            in 1923, the Fagans attempted unsuccessfully to sell the Manor. They
            succeeded in selling the cinema in October 1928, when it was taken
            over by Kenneth L. Gregg, who changed its name to the Palladium and
            introduced programming that featured a mixture of films and live
            variety acts, as well as local talent contests. The cinema would
            change management and identity again in 1934, when it became the
            Broadway, and it was under this name that it continued until its
            closure in 1956.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 6 - The Abbey Cinema
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>The Fairview Grand</p>
        </div>
      ),
      date: "1929",
      imageURL: CaseStudy6,
      section: (
        <p>
          The opening of the Fairview Grand on 18 November 1929 marked the
          beginning of a period of rapid expansion for Dublin’s suburban cinema
          network. Owned by Leonard Ging, the Fairview Grand was the first in a
          group of cinemas that Ging would open over the next two decades in
          suburbs across north Dublin.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation"></h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p></p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Located on Fairview’s main thoroughfare, the advent of a cinema to
            the area in 1929 was part of a wider process of urbanisation and
            residential development, which had been underway since the early
            1920s. The Grand was a stone’s throw from the newly built ‘garden
            suburb’ of Marino. This public housing scheme was the largest to be
            undertaken by Dublin Corporation at the time, with some 1,362 houses
            being completed by 1927. With a sizable catchment area on its
            doorstep, the Fairview Grand could accommodate up to 1,000 patrons
            when it first opened its doors in 1929.
          </p>
          <br></br>
          <p>
            The addition of the Fairview Grand to the wider Dublin cinema
            circuit came at a moment when the city’s cinema proprietors were
            beginning to embark on the transition to sound pictures. The first
            ‘talkie’ to be screened at a Dublin cinema took place some seven
            months prior to the Fairview Grand’s opening when{" "}
            <i>The Singing Fool</i> (US: Bacon, 1928) was screened at The
            Capitol on Prince’s Street in April 1929. Despite the emergence of
            this technological innovation, the Fairview Grand’s offering was
            initially focussed on silent films with live musical accompaniment.
            The house orchestra was led by John Moody, a name that would have
            been familiar to seasoned Dublin cinema-goers, particularly those
            who frequented the Theatre Royal, where Moody had previously worked
            as musical director.
          </p>
          <br></br>
          <p>
            On opening night at the Grand, the first assignment for Moody’s
            orchestra was to provide the musical accompaniment for{" "}
            <i>The Trail of ‘98</i> (US: Brown, 1928). Starring Dolores del Rio
            and Ralph Forbes, the film had its Irish premiere at the Corinthian
            on 4 August 1929. An epic tale of the American gold rush, the{" "}
            <i>Irish Independent’s</i> film critic of the day deemed it a
            ‘thrilling story’ that ‘ranks high amongst the triumphs of the
            screen’ (13 August 1929). After a successful twenty day run at the
            Corinthian, <i>The Trail of ‘98</i> circulated to a small number of
            cinemas outside of Dublin for screenings in Cashel, Cavan and
            Drogheda. While the film had enjoyed something of an extended run at
            the Corinthian, the screening at the Fairview Grand on 18 November
            1929 marked the film’s transition to the second run suburban
            circuit.
          </p>
          <br></br>
          <p>
            Apart from the novelty of the new cinema itself, the programming of
            a film featuring the Mexican star Del Rio would have undoubtedly
            caught the attention of local Dublin cinema-goers whose name
            appeared on film posters and press advertisements with increasing
            frequency in the late 1920s. Indeed, <i>The Trail of ‘98</i> was Del
            Rio’s last fully silent film before the release of <i>Evangeline</i>{" "}
            (US: Carewe, 1929), which was released in Ireland in January 1930.
            Featuring musical numbers by Del Rio, <i>Evangeline</i>, as the{" "}
            <i>Evening Herald</i> film columnist noted, was described as the
            ‘swan song of the silent screen’ (25 January 1930). It was against
            this backdrop of imminent change that the Fairview Grand entered
            Dublin’s cinema scene.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 7 - On stage at the Gate cinema
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>The expansion of the Grand cinema circuit</p>
        </div>
      ),
      date: "1934",
      imageURL: CaseStudy7,
      section: (
        <p>
          On 19 October 1934, Leonard Ging expanded his circuit of suburban
          cinemas with the opening of the Drumcondra Grand.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            The cinema [is] a credit to Irish workmanship and to Irish hands
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Lord Mayor Alfie Byrne on the opening of the Drumcondra Grand,{" "}
            <i>Saturday Herald</i>, 20 October 1934
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Located less than two kilometres from the Fairview Grand, Drumcondra
            was the second suburban area on the northside to benefit from the
            expansion of Leonard Ging’s cinema enterprise. The Drumcondra Grand
            or the Drummer, as it would fondly be referred to by local
            cinema-goers, opened its doors almost exactly five years after the
            Fairview Grand. Dublin’s then Lord Mayor Alfie Bynre officiated at
            the opening ceremony during which he praised the cinema’s directors
            for ‘providing a place of entertainment, suitable to the
            requirements of that rapidly growing district’ (
            <i>Saturday Herald</i>, 20 October 1934, p.7). This rapid
            development was linked to an increased availability of residential
            properties in the area, which drew many families out of the city
            centre and into suburban areas. The shift in the distribution of
            Dublin’s population is reflected in the fact that during the ten
            year period from 1926 to 1936, the population of Drumcondra rose by
            63 per cent (Brady, 2014: 40).
          </p>
          <br></br>
          <p>
            In January 1934, the writer of the ‘Dublin Letter’ column for{" "}
            <i>The Cork Examiner</i> commented on the recent changes in the
            capital and its surrounding areas, noting that ‘suburbs have sprung
            up stretching from Clontarf to Glasnevin and Ballymun and they are
            provided with all the amenities, except cinemas, now demanded by the
            town dweller’ (8 January 1934). As we’ve seen with the case of the
            Fairview Grand, northsiders weren’t entirely deprived of a local
            cinema, but the rapid growth of population in the surrounding areas
            meant that by the early 1930s there was significant demand for
            additional suburban cinemas.
          </p>
          <br></br>
          <p>
            Born in 1938, local cinema-goer Leo vividly recalls queuing outside
            the Drummer on a Sunday for a fourpenny seat. As Leo explains, being
            near the top of the queue didn’t always guarantee a ticket as those
            who were served first would often bulk buy tickets for their friends
            at the back of the queue. His memory of the ‘crush’ that ensued once
            the cinema gates were opened captures the sheer demand for suburban
            entertainment throughout the 1940s:{" "}
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/ibPCHcXDpAs" />
          </div>
          <br></br>
          <p>
            In January 1954, in an effort to keep attracting cinema-goers, the
            Drumcondra Grand invested in new projection and sound equipment.
            Promising a ‘brighter picture’ and ‘more perfect sound’, it was
            reported that the new technology was ‘the first of its kind in any
            suburban cinema in the country’ (<i>Evening Herald</i>, 6 January
            1953, p.2). The retrofit came just over a year before Dublin 9
            cinema-goers would have the option of a brand new picture house less
            than three kilometres away on Collins Avenue. Leo recalls how the
            lure of the more modern and luxurious Whitehall Grand drew
            cinema-goers like himself away from the Drummer:
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/xLEXZR8qC-U" />
          </div>
          <br></br>
          <p>
            As the following sections of this case study illustrate, the rapid
            expansion of the Grand Cinema circuit in the late 1940s and early
            1950s meant that the suburban cinema would go from being an amenity
            that was in demand to one that was in over supply.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 8 - Action on and off the screen
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>The Strand: Between the City and the Suburbs</p>
        </div>
      ),
      date: "1938",
      imageURL: CaseStudy8,
      section: (
        <p>
          Deviating a little from the Grand circuit’s naming convention, the
          Strand Cinema on North Strand Road became the newest member of Leonard
          Ging’s chain when it opened on Easter Saturday, 16 April 1938. It was,
          as the Irish Press commented, “conveniently placed between the
          Fairview Grand and the city houses.”
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            [The management will] present fims in keeping with the needs and
            ideals of youth.
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Lord Mayor Alfie Byrne on opening the Strand, <i>Irish Press</i> 18
            April 1938.
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            The city houses, however, were rapidly expanding. That same Saturday
            saw three other openings that together with the Strand’s 1,400 seats
            added 8,000 cinema seats to the city’s total. On the same route into
            the city centre, the Talbot Street Electric Theatre had been greatly
            expanded and renamed the New Electric. In existence since 1911,
            Dubliners had ascribed the Talbot Street cinema with a number of
            nicknames over the years. As local cinema-goer John recalls,
            youngsters like himself knew it only as the ‘Lec’ or a variation of
            the same:
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/rsyG96vF4Ao" />
          </div>
          <br></br>
          <p>
            The third cinema to open that Saturday in April 1938 was the Regal
            Rooms. Located beside the mammoth Theatre Royal on Hawkins Street,
            it was the smallest of the new cinemas but aimed to be Dublin’s most
            comfortable cinema by offering “noiseless seat-hinges, hidden
            lighting, stadium effect in the auditorium and noiseless
            sound-system.” The Carlton on O’Connell Street was also
            reconstructed but on a much greater scale to become one of the city
            centre’s “super” cinemas boasting 3,000 seats.
          </p>
          <br></br>
          <p>
            In this context, who was this new suburban cinema serving? In
            officially opening the Strand having also opened the New Electric,
            Lord Mayor Alfie Byrne stated that he knew that the Strand
            “management would cater especially for the youth and would present
            films in keeping with the needs and ideals of youth.” This was a
            line that a promotional article in the <i>Evening Herald</i> had
            also stressed. Under the heading “For the Kiddies,” it observed that
            “a distinctive feature of the programmes will be the selective care
            exercised in those intended for children and younger people
            generally. This is certainly an aspect of cinema entertainment that
            will appeal strongly to parents and guardians.” This catering for
            young people wasn’t immediately apparent in the films advertised.
            The opening feature <i>Love Under Fire</i> (US: Twentieth Century
            Fox, 1937) was “topically enough, a Spanish war story,” starring Don
            Ameche and Loretta Young, with just the Pop-Eye cartoon among the
            supporting items having obvious appeal for children.
          </p>
          <br></br>
          <p>
            As John explains, the programming choices at the Strand often drew
            large crowds, but this meant that there was a risk of being turned
            away. For a young cinema-goer, the less luxurious New Electric was a
            more attractive option when it offered a better guarantee of an
            afternoon’s entertainment:
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/Oa7UBP6YT-k" />
          </div>
          <br></br>
          <p>
            While John is typical of the local cinema-goer who came to the
            Strand by foot, the cinema’s management also aimed to attract and
            cater for patrons travelling into the city by car. Evidence of this
            is provided by the mention in the opening ads of a “spacious car
            park available for our patrons.” This car park was, according to the{" "}
            <i>Evening Herald’s</i> promotional article, “one of the most
            commodious in Dublin [and] certainly a most acceptable service.”
            Ging had provided a carpark for his Sutton Grand, which had opened
            two years previously in the much more distant suburb of Sutton. The
            Strand had a far larger local population than the Sutton and was
            well served with public transport, with the coastal trams from the
            city to Fairview, Clontarf and beyond passing its doors. But the
            management believed that a significant number of patrons would drive
            to the cinema.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 9 - Usherette wanted
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Cabra Grand in the new Republic</p>
        </div>
      ),
      date: "1949",
      imageURL: CaseStudy9,
      section: (
        <p>
          The Cabra Grand became the Republic of Ireland’s first new cinema when
          it opened on Saturday, 16 April 1949, the same weekend that Ireland
          became a republic. And it opened with a season of films featuring
          Irish star Maureen O’Hara, beginning with <i>Sitting Pretty</i> (US:
          Twentieth Century Fox, 1948).
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation"></h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p></p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Ironically, that day it also officially changed from Irish to
            British ownership. Like the Fairview, Drumcondra and Sutton Grands
            and the Strand before it, the Cabra Grand was conceived as an
            expansion of Leondard Ging’s north Dublin suburban circuit. Along
            with these cinemas except Sutton, it was part of a deal in March
            1949 that saw it taken over on 16 April by Irish Cinemas Ltd, one of
            the companies controlled by British cinema tycoon J. Arthur Rank.
            All the more important, perhaps, that it stress its Irish
            credentials.
          </p>
          <br></br>
          <p>
            Its first manager was well-known republican Louis Marie, who had
            recently been assistant manager of Dublin’s Theatre Royal. The son
            of a French army photographer and Irish mother, Marie had
            participated in the Irish War of Independence from the 1910s on,
            initially as a member of the Republican boy scouts Fianna Eireann
            during the 1916 Rising and joining the Free State Army after its
            formation in 1922.
          </p>
          <br></br>
          <p>
            At the opening, Marie handed the gold scissors to cut the ceremonial
            tricolour ribbon to the Lord Mayor of Dublin John Breen, a Labour
            Party councillor. “The cinema has become part of our daily lives,”
            the <i>Irish Press</i> quoted Breen as saying. “I am a fairly keen
            cinema fan myself.” Located on Quarry Road, in the middle of the
            large working-class housing estate of Cabra, the cinema had the
            largest capacity of the Grands with over 1,600 seats and boasted one
            of the widest proscenium arches in Ireland, measuring 43 feet. It
            had been designed by Samuel Lyons of Henry Lyons and Sons, the
            architectural firm responsible for all the Grands.
          </p>
          <br></br>
          <p>
            The cinema settled into decades of serving Cabra’s cinemagoers, and
            it received little press coverage during this period. What little
            coverage it did receive had contrasting qualities, concerned with,
            on the one hand, such criminal behaviour as robberies or the
            harassment of staff, and on the other, such charitable acts as
            visits by poor children or fund-raising events.
          </p>
          <br></br>
          <p>
            Photos of children from local charitable institutions occasionally
            appeared in Dublin’s newspapers. On 10 October 1953, the{" "}
            <i>Irish Independent</i> carried a photo of a large group of
            children from three local institutions whom the management treated
            to a film show. On 6 February 1964, the <i>Evening Herald</i>{" "}
            carried a photo of pupils from nearby St Joseph’s School for the
            Deaf arriving for a screening supported by St Brendan’s Boys’ Club
            in Cabra.
          </p>
          <br></br>
          <p>
            Further highlighting the importance of the youth audience for
            suburban cinemas, on 7 October 1956, the <i>Evening Herald</i>{" "}
            reported that 700 children panicked and stampeded to the cinema’s
            exits when a 16-year-old boy threw a firework from the balcony,
            prompting the judge to inform him about the death of 48 people in a
            cinema fire in Drumcollogher, Co. Limerick, 30 years previously. The{" "}
            <i>Irish Press</i> reported that three local young men who were
            found behind the cinema’s screen on 2 February 1958 were later
            convicted of breaking into the cinema, stealing cigarettes and
            causing damage estimated at £20 and 18 shillings.
          </p>
          <br></br>
          <p>
            The suburban cinema’s association with this kind of anti-social
            behaviour obviously detracted from the cinema-going experience.
            Commenting on the rowdy atmosphere that could be found inside the
            Cabra Grand, one regular patron recalls how the head usher would
            ‘tell us all in a very loud voice to SHUT UP prior to the curtain
            going up’ (Male, Dublin, b. 1941). For young and committed 1950s
            cinema-goers like William, the suburban cinema lacked
            ‘sophistication’. As soon as he was old enough, William gave up his
            local suburban cinema and would head into the city centre for his
            weekly film fix. While venturing further from home was part of
            growing up, as William explains, the city centre cinemas also
            promised a more serious film viewing experience:
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/IiMEh7IXFF4 " />
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 10 - Quiz nights and dancing
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Whitehall Grand: a ‘super-luxury’ cinema for Dublin 9</p>
        </div>
      ),
      date: "1954",
      imageURL: CaseStudy10,
      section: (
        <p>
          The Whitehall Grand was an entirely modern cinema with a seating
          capacity of 1000. It was the last of the Grand circuit cinemas to be
          built and in many ways, its opening in July 1954, and subsequent
          closure twenty years later charts the decline of the suburban cinema.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            The hall majestically sets off the surrounding suburban houses
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            <i>The Irish Press</i>, 31 July 1954
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Like all of the Grand cinemas, the Whitehall Grand was designed by
            Henry J. Lyons and Partners. While the exterior replicated the
            design used for many of the suburban cinemas built at this time, the
            interior of the Whitehall Grand was devised with the wide-screen
            format in mind. Press coverage of the cinema’s opening highlighted
            the investment that the owners had made to offer suburban audiences
            a state-of-the-art film viewing experience. So as not to detract
            from the viewing experience, the designers opted to forego the usual
            proscenium arch around the screen. This more minimalist approach was
            to allow cinema-goers feel ‘part of the action’, while
            simultaneously making the viewing experience ‘restful to the eyes’ (
            <i>Irish Press</i>, 31 July 1954). Soft downlighting would also
            enhance the cinema-going experience by helping patrons to avoid ‘the
            annoying groping for one’s seat’ (<i>Evening Herald</i>, 30 July
            1954).
          </p>
          <br></br>
          <p>
            The Whitehall Grand served a ‘thickly populated’ catchment area (
            <i>Irish Independent</i>, 17 June 1955) that extended to Beaumont
            and Donnycarney. Although the cinema didn’t have a car park, it was
            well connected by Dublin’s bus network and its position just off the
            Swords Road, one of the main thoroughfares out of the city centre,
            made the Grand accessible to patrons coming from other parts of the
            city. While the Whitehall Grand was less opulent than the city
            centre’s first run picture houses, the directors of Irish Cinemas
            Ltd were nevertheless keen to offer suburban audiences a high
            quality experience. Their commitment to bringing ‘its suburban
            patrons the best in <i>entertainment</i>’ points to the way the
            Whitehall Grand would adapt to changing trends and leisure time
            preferences in the coming years.
          </p>
          <br></br>
          <p>
            Tapping into the craze for yo-yos among its younger patrons, in May
            1963, the Whitehall Grand hosted a local heat for the Evening
            Herald’s yo-yo contest, which was to be judged by yo-yo champion
            Billy Panama. Something of a celebrity figure among young suburban
            cinema-goers, Panama performed displays of his yo-yo mastery at a
            number of Dublin cinemas in the late 1950s. A regular patron of the
            Grand cinema circuit, Brian recalls Panama’s appearance in Fairview
            as part of the cinema’s alternative programming:
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/Oe3bDGAjQVU" />
          </div>
          <br></br>
          <p>
            While this diversification in the Grand circuit’s entertainment
            offering was enthusiastically received by young audiences, it is
            also indicative of the challenges that suburban cinemas were facing
            when it came to being able to fill out these capacious venues. Five
            months prior to Panama’s appearance at the Whitehall Grand, the
            cinema’s owners had submitted an application requesting a
            re-classification of four of the Grand cinemas’ run status. Making
            front page news in the <i>Irish Press</i> on 31 January 1963, the
            request to move the cinemas from a ‘B’ to a ‘C’ grading was
            indicative of the financial pressure that the suburban cinema was
            under. As a ‘C’ grade cinema, the venues would reduce their
            operational hours by opening at 6pm rather than 3pm, thereby
            reducing the number of hours that employees would need to be paid
            for. The ‘C’ grading would also push employees into a lower pay
            band.
          </p>
          <br></br>
          <p>
            By September of the same year, the suburban cinema took a new
            direction when it expanded its entertainment offering to include
            Bingo nights. Commenting on its bilingual Bingo partnership with the
            Irish language and culture organisation Gael-Linn, the{" "}
            <i>Evening Herald</i> reported that ‘the rent offered by Gael-Linn
            was so high that the cinema group could not refuse it’ (16 September
            1963).
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    //ADD MORE CASE STUDIES HERE
  ];
}

export default caseStudy2_array;
