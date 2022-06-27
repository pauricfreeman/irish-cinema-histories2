import { v4 as uuidv4 } from "uuid";

// Packages
// import ResponsiveEmbed from "react-responsive-embed";

// Import hero images
import logo from "./media/caseStudy1/logo.png";
import heroBG from "./media/caseStudy1/hero_bg.jpg";

// Import case study images
import CaseStudy1 from "./media/caseStudy1/storyImages/CaseStudy1.png";
import CaseStudy2 from "./media/caseStudy1/storyImages/CaseStudy2.png";
import CaseStudy3 from "./media/caseStudy1/storyImages/CaseStudy3.png";
import CaseStudy4 from "./media/caseStudy1/storyImages/CaseStudy4.png";
import CaseStudy5 from "./media/caseStudy1/storyImages/CaseStudy5.png";
import CaseStudy6 from "./media/caseStudy1/storyImages/CaseStudy6.png";
import CaseStudy7 from "./media/caseStudy1/storyImages/CaseStudy7.png";
import CaseStudy8 from "./media/caseStudy1/storyImages/CaseStudy8.png";
import CaseStudy9 from "./media/caseStudy1/storyImages/CaseStudy9.png";
import CaseStudy10 from "./media/caseStudy1/storyImages/CaseStudy10.png";

function caseStudy1_array() {
  return [
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Hero Object ////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      heroTitle: (
        <div>
          <h4>A Dublin</h4>
          <h4>Cinema Story</h4>
        </div>
      ),
      heroYears: <h5 className="hero-years">1901 - 1960</h5>,
      heroLogo: logo,
      heroBGimage: heroBG,
      id: uuidv4(),
      caseStudyIntro: (
        <div>
          <h1 className="case-study-intro-title">
            From the Rotunda to the Ambassador:
            <br></br>
            stories from a Dublin cinema
          </h1>
          <div className="case-study-intro-body">
            <p>
              The Rotunda was one of Dublin and Ireland’s pioneer cinema venues,
              and it could draw its audience from a city population of almost
              305,000 in 1911 and over 522 ,000 in 1951. The Rotunda was not,
              however, built to be a cinema. Designed as a venue for concerts
              and exhibitions that would help to fund the adjacent maternity
              hospital, this round building opened in 1767 at the northern end
              of Dublin’s Sackville (now O’Connell) Street.
            </p>
            <br></br>
            <p>
              It was a prestige venue, associated with the philanthropy of the
              city’s elite. The Rotunda Rooms were added in 1791 and now house
              the Gate Theatre. For much of the 20th century, the Rotunda itself
              was a cinema, initially mostly called the Rotunda and later the
              Ambassador
            </p>
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 1 - Joseph Holloway
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Joseph Holloway sees the Thomas Edison Animated Picture Company</p>
        </div>
      ),
      date: "1902",
      imageURL: CaseStudy1,
      section: (
        <p>
          Hearing so much about the beauties & wonders of the Edison Electric
          Animated Pictures being exhibited twice daily at the Rotunda,” Joseph
          Holloway wrote in his diary on 18 January 1902, “I was determined to
          sample them & deliver judgement on them off my own bat before they
          departed from our city.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Whatever the merit of the show, it has, without doubt, caught on in
            Dublin.
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Joseph Holloway, 18th January, 1901</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            The Rotunda’s role as a picture house really started from 2 December
            1901, when the Thomas-Edison Animated Picture Company opened its
            Edison Electric Animated Pictures. While by no means Ireland’s or
            even the Rotunda’s first film show, the unprecedented two-month
            season at the Rotunda, followed by a tour of the country,
            established the popularity of this kind of entertainment beyond
            doubt.
          </p>
          <br></br>
          <p>
            This wasn’t yet cinema as we would recognize it. Films at the time
            were very short - just a few minutes long - and the show often
            included live performers. Ads mentioning the opening films promised
            “the Funeral of President M’Kinley, the Corpus Christi Procession in
            Madrid, the Race for the America Cup, scenes at Manchester Races
            [and] local scenes taken during the visit, wherein the public may
            see themselves, their friends and local celebrities.” All these are
            non-fiction films, and the film of US President William McKinley’s
            funeral - taken by Thomas Edison’s company - ran just about 7
            minutes (watch it{" "}
            <a
              href="https://www.loc.gov/item/00694353/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            ). Despite its name, the company had nothing to do with American
            inventor and cinema pioneer Thomas Alva Edison but was owned by
            English showman A.D. Thomas, who added the “Edison” as a marketing
            gimmick.
          </p>
          <br></br>
          <p>
            Architect and man of the arts, Joseph Holloway (pictured above in a
            sketch he drew of himself) was in the audience for one of these
            early shows, and his writings about them survive in his diary. “I
            hurried down immediately after dinner & arrived there shortly after
            3 o’clock to find the large hall packed, mostly by children,” he
            recalls of his visit on 18 December 1901.
          </p>
          <br></br>
          <p>
            “I managed to scrooge myself in, but had to content myself by
            standing all the time. Whatever the merit of the show, it has,
            without doubt, caught on in Dublin, & I am sure will do well for a
            few weeks longer with new films, as now announced.”
          </p>
          <br></br>
          <p>
            Crammed into an auditorium full of children, Holloway was not
            impressed by that fact or by what he saw on screen and especially
            not by the music and commentary he heard:
          </p>
          <br></br>
          <p>
            "Personally I thought the exhibition “child’s play” & was not much
            interested except on occasion. A military band accompanied the
            pictures & the item that made the biggest impression on me was the
            introduction of “God Save the King'' at the end. It summed up the
            whole performance to a T. Hence its popularity in this wonderful
            city of ours, said I to myself [...] To my mind some four or five of
            the subjects thrown on the sheet deserved the prominence given them.
            The man who introduced the pictures did so in extraordinarily
            mechanical style in measured artificial voice of pompous quality. He
            also sang a “sea song,” while some vilely drawn coloured pictures of
            the sea were being thrown on the screen in robust fashion with
            expression laid on thick, & applause followed. A popular crowd like
            their vocalism vigorous & plastered with exaggerated pathos. The
            whole entertainment is being worked on the showman principle, which
            always attracts a large proportion of our enlightened citizens."
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 2 - James T. Jameson
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>James T. Jameson and the Irish Animated Picture Company</p>
        </div>
      ),
      date: "1903-1911",
      imageURL: CaseStudy2,
      section: (
        <p>
          When Dublin-born printer and journalist James T. Jameson took over
          Thomas’s company in early summer 1902, he was on the path to becoming
          Ireland’s first great moving-picture entrepreneur. In 1903, Edison’s
          lawyers forced Jameson to change the name of the company to the Irish
          Animated Picture Company (IAPC).
        </p>
      ),
      id: uuidv4(),
      // quote: (
      //   <div>
      //     <h1 className="quotation-marks">“</h1>
      //     <h1 className="quotation">n/a</h1>
      //   </div>
      // ),
      quoteDescription: (
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            rem.
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            This change of name did no business harm to Jameson in an
            increasingly nationally aware Ireland. In the absence of any real
            competition between 1902 to 1908, IAPC played regular seasons at the
            Rotunda, and between these, toured to Irish provincial towns,
            playing in the municipal theatre or town halls. The shows consisted
            of films combined with such live variety acts as singers, dancers,
            comedians and acrobats. Jameson ensured his long-term success by his
            association with such well-respected venues as the Rotunda and town
            halls, by inviting the elite and middle class of all political
            persuasions in Irish society to special targeted events, and by his
            general choice of films and variety acts that not only did not
            offend against respectability, but could also be promoted as
            educational.
          </p>
          <br></br>
          <p>
            He had such a reputation that in November 1911, the British cinema
            trade journal <i>The Bioscope</i> featured him in one of a series of
            caricatures of key figures in the industry. The caricature (pictured
            above) shows him holding a model Rotunda, which is probably showing
            the Irish-shot film <i>Rory O’More</i>, about a 1798 rebel who
            escapes execution on a speeding horse (watch it{" "}
            <a
              href="https://ifiplayer.ie/rory/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            ). Jameson himself is dressed as a stage-Irish peasant and is
            standing beside a stereotypical Irish colleen in a picturesque
            “Irish” setting.
          </p>
          <br></br>
          <p>
            Although the name Irish Animated Picture Company was used until the
            end of the 1910s, from 1913 on, “Jameson’s Pictures” was
            increasingly used as the company brand around the country, beginning
            with the shows at Tralee’s Theatre Royal and then at Queenstown’s
            (Cobh’s) Jameson’s Picture Palace, Limerick’s Rink Palace and so on.
            Newspaper ads show a somewhat consistent format of mimicking roll
            tickets used by the company in the mid-1910s. Jameson’s Pictures at
            Athlone’s Fr Mathew Hall took a different approach in incorporating
            a photograph of the variety performer in its advertising and thereby
            indicating the importance of live acts.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 3 - Music and Silent Film
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Music and Silent Film at the Rotunda</p>
        </div>
      ),
      date: "1912",
      imageURL: CaseStudy3,
      section: (
        <p>
          Audiences at the Rotunda and other cinemas in the 1910s and 1920s
          expected films to be silent, but they also expected them to be
          accompanied by music. From a single pianist or violinist to an
          orchestra of 15 or more, all kinds of music and musicians accompanied
          films in the period.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            An orchestra composed of women is an undeniable asset to every
            [cinema] hall in the world.
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Film comedian John Bunny, Dublin, 1912.</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            When cinema began to take a more recognizable shape in the early
            1910s, music was one of the ways that new picture houses challenged
            established venues such as the Rotunda. That challenge often came in
            the form of a larger orchestra - usually a small band of
            predominantly string musicians - with a well-known concert musician
            as musical director and possibly playing an advertised solo during
            the show. From 1916, for example, internationally renowned violinist
            Erwin Goldwater led the orchestra and played advertised solos at
            Dublin’s Carlton Cinema, which was just two hundred metres from the
            Rotunda in Sackville/O’Connell Street. At the same time, cellist
            Clyde Twelvetrees directed the Bohemian Picture Theatre’s orchestra
            of 16 musicians in the suburb of Phibsboro.
          </p>
          <br></br>
          <p>
            At first in the 1910s, the Rotunda’s main musical offering was the
            Irish Ladies’ Orchestra, which in 1912 consisted of seven string
            musicians, led by May Murphy. Unfortunately no photograph seems to
            survive of Murphy or her orchestra, but Rotunda audiences could see
            them; they weren’t hidden away. And they dressed to be seen, in a
            uniform consisting of crimson-and-white dresses and little Zouave
            jackets, which according to Paddy, the Irish correspondent of
            London-based cinema trade journal <i>The Bioscope</i>, “complete a
            picture of dainty Bohemianism.”
          </p>
          <br></br>
          <p>
            When in Dublin in 1912, American film comedian John Bunny praised
            the Irish Ladies’ Orchestra and outlined the kind of benefits women
            musicians brought to the cinema (watch one of his films{" "}
            <a
              href="https://youtu.be/lmAzH2HZaLg"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            ). Bunny made his remarks on a working trip to Britain in 1912,
            during which he visited Ireland to shoot the short comedy{" "}
            <i>Bunny Blarneyed</i>, or <i>The Blarney Stone</i> (US: Vitagraph,
            1913) at Cork’s most famous tourist attraction. Taking in a show at
            the Rotunda, he remarked that:
          </p>
          <br></br>
          <p>
            "Women are always an immense power in the refinement of the world.
            The manager who, seeking to make his show suitable for all – from
            the little mites up – neglects this truth is only cheating himself
            of ultimate end. An orchestra composed of women is an undeniable
            asset to every hall in the world."
          </p>
          <br></br>
          <p>
            For Bunny – and for Paddy who quoted him favourably – such
            initiatives as the Ladies’ Orchestra put cinema at the forefront of
            respectable entertainment by putting women at the forefront of the
            cinema entertainment. There, they were visible signs and guardians
            of a refined amusement suitable for all the family.
          </p>
          <br></br>
          <p>
            The music they played is very seldom mentioned in the press, and the
            orchestra is mostly referred to as it is in an ad from the{" "}
            <i>Dublin Evening Mail</i> on 13 October 1913, when they were
            accompanying a film of{" "}
            <i>The Irish National Pilgrimage to Lourdes</i> (Ireland: General
            Film Supply, 1913). But they weren’t alone; many women musicians
            found work in cinemas. Indeed, the arrival of cinema created
            hundreds of jobs for musicians in Ireland.
          </p>
          <br></br>
          <p>
            Sadly, the Irish Ladies’ Orchestra only lasted until 1916 at the
            Rotunda. In a way, the Easter Rising of April that year was partly
            responsible. One of the buildings destroyed on Lower
            Sackvillle/O’Connell Street was the Grand Cinema, on the corner of
            Abbey Street. The Grand’s owner William Kay decided not to rebuild
            that cinema and instead made an agreement with Jameson to take over
            management of the Rotunda. One of Kay’s first managerial decisions
            was to move the Grand’s orchestra to the Rotunda, making May Murphy
            and her Irish Ladies’ Orchestra redundant.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 4 - Chaplin Impersonation Competitions
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Chaplin Impersonation Competitions</p>
        </div>
      ),
      date: "1915",
      imageURL: CaseStudy4,
      section: (
        <p>
          Cinemas such as the Rotunda held competitions from time-to-time to
          engage their audience in ways beyond the norms of the films and
          variety acts they offered. Among the most remarkable ones were the
          Chaplin impersonation competitions of 1915.
        </p>
      ),
      id: uuidv4(),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            These were held not only at the Rotunda but at several other Dublin
            cinemas and theatres, such as the Masterpiece cinema in Talbot
            Street, about five minutes walk from the Rotunda, which advertised
            in the <i>Freeman’s Journal</i> in September 1915 for participants
            in its Chaplin imitators competition. These and other competitions
            around the city indicate the phenomenal level of Charlie Chaplin
            popularity’s less than two year after he signed his first film
            contract.
          </p>
          <br></br>
          <p>
            Apart from giving an idea about early film stardom, the Chaplin
            competitions had other features that are indicated by two
            photographs of the Dublin competitors published in the London-based
            cinema fan magazine <i>Film Fun</i> in January 1916 (see above). The
            caption suggests that this kind of impersonation competition might
            have been widespread in Dublin but it wasn’t in Britain at the start
            of 1916. As well as this, the fourteen competitors shown in one of
            the photographs were required to do their act before a camera and
            were filmed.
          </p>
          <br></br>
          <p>
            The second photograph shows the winner of the competition being
            filmed as rivals look on. The film of the competitors was then shown
            to audiences who voted on the winner. In this way, cinema at this
            point was participative, self-sustaining and both global and local
            at the same time. The filming of the competitors seems to indicate
            that this particular competition is the one at the Masterpiece
            rather than the Rotunda; there is no record that the Rotunda
            competition was filmed. Nevertheless, these photos show what these
            competitions looked like. And the Rotunda had something that the
            Masterpiece didn’t seem to: it featured what Paddy in the{" "}
            <i>Bioscope</i>
            claimed was “the only Chaplin <i>girl</i> extant.”
          </p>
          <br></br>
          <p>
            On 18 October 1915, the same day that the Rotunda competition took
            place, the management also announced another competition, a writing
            competition based on their new serial <i>The Exploits of Elaine</i>,
            encouraging regular attendance and fan-based writing related to it.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 5 - Showing Ireland a Nation
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Showing Ireland a Nation</p>
        </div>
      ),
      date: "1917",
      imageURL: CaseStudy5,
      section: (
        <p>
          Of the few Irish-themed films shown in Ireland during the
          revolutionary decade (1912-22), none was more controversial than
          <i>Ireland a Nation</i> (US: Macnamara, 1914), which was first shown
          in Ireland at the Rotunda in censored form on 8 January 1917 and
          banned by the authorities on 10 January.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Masses clinging on to the walls of the Rotunda like barnacles to the
            bottom of a ship
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Joseph Holloway, 8 January 1917</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Made by the Waterford-born but New York-based scriptwriter and
            producer Walter Macnamara, the film traced the history of Irish
            struggles against British rule from the passing of the Act of Union
            by the Irish Parliament in 1800 to the passing of the Home Rule bill
            by Westminster in 1914. He had shot historical scenes – among them
            the Irish parliament, Robert Emmet’s 1803 rebellion and Daniel
            O’Connell’s duel with political rival D’Esterre – on location in
            Ireland and at studios in London, but the film had ended with
            newsreel footage of crowds of Irish nationalists jubilantly
            welcoming what they thought was the achievement of Home Rule.
          </p>
          <br></br>
          <p>
            The film was first shown in the US in September 1914, but the
            outbreak of World War I delayed its Irish exhibition. Two prints of
            the film sent to Ireland had been lost on ships torpedoed by
            U-boats, one on the <i>Lusitania</i>. These delays meant that the
            film returned to a Dublin changed utterly by the war and the Easter
            Rising of 1916. The film’s large green poster with the slogan
            “Ireland a Nation” emblazoned on it meant something different when
            pasted onto the hoardings of buildings destroyed during the Rising.
            Joseph Holloway wrote in the diary that he saw “‘Ireland a Nation’
            for ‘one week only’ was announced for Rotunda commencing Monday next
            & week, & I thought would we ever have it in reality – for ‘one week
            only’ even.”
          </p>
          <br></br>
          <p>
            He wasn’t alone when he went to the Rotunda on the opening night: “I
            rarely saw anything like the crowds that stormed the Rotunda about
            eight oclock seeking admission. I am sure several thousands were
            wedged up against the building [...] black masses clinging on to the
            walls of the Rotunda like barnacles to the bottom of a ship.” The
            police and military authorities were also watching, and banned
            <i>Ireland a Nation</i> because “the effect produced on the audience
            at the display of the above Film last night, the 9th inst., and the
            seditious and disloyal conduct apparently caused thereby, make it
            clear that the further exhibition of the Film in Ireland is likely
            to cause disaffection to His Majesty, and to prejudice the
            recruiting of His Majesty’s forces.” The film wasn’t shown in
            Ireland again until 1922, following the founding of the Irish Free
            State.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 6 - Stepping into the Ring
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Stepping into the Ring at the Rotunda</p>
        </div>
      ),
      date: "1945",
      imageURL: CaseStudy6,
      section: (
        <p>
          On Friday 9 March 1945, the Rotunda cinema played host to a programme
          of professional boxing organised by Irish promoter Gerald D. Egan. The
          first bout of the evening saw the then Irish Middleweight Champion,
          John ‘Spike’ McCormack take to the ring with Freddie Price.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            quod?
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
            magni!
          </p>
        </div>
      ),

      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            A native of County Kerry, Spike McCormack was a popular and
            well-established figure among Dublin boxing fans. Reports at the
            time indicated that Price was tipped to win, but Mc Cormack emerged
            victorious from a ‘desperately earnest and very punishing’ contest (
            <i>Irish Independent</i>, 10 March 1945).
          </p>
          <br></br>
          <p>
            While there were plenty of sports venues around the city suited to
            boxing events (including the purpose built National Stadium on the
            South Circular Road) a number of Dublin’s city centre cinemas and
            theatres also occasionally served as arenas for professional boxing
            tournaments in this period.
          </p>
          <br></br>
          <p>
            One notable example of this was the 1923 fight between Mike McTigue
            and the Seneglaese fighter Louis Mbarick Fall (also known as the
            Battling Siki), which took place at the Scala Theatre and Opera
            House (watch it{" "}
            <a
              href="https://youtu.be/l1QhuuJPQ4A"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            ). Located not far from the Rotunda on Prince’s Street, the Scala
            did not begin to operate as a cinema until 1927 when it was renamed
            the Capitol, but the McTigue vs Battling Siki fight provides an
            early high-profile example of the multifunctional nature of these
            spaces and the variety of events on offer to patrons of Dublin’s
            cinema and theatre scene.
          </p>
          <br></br>
          <p>
            Indeed in the months prior to the 1945 fights at the Rotunda, a
            number of other tournaments took place at the New Electric Cinema on
            Talbot street (24 November 1943) and the Theatre Royal (9 February
            1945) with proceeds from the latter going to the Red Cross.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 7 - Labour relations and Doris Day
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Labour relations and Doris Day at the Rotunda</p>
        </div>
      ),
      date: "1953",
      imageURL: CaseStudy7,
      section: (
        <p>
          In 1953 the Rotunda cinema hosted a number of union meetings. The
          first of these took place on Sunday 15th February 1953 when employees
          of C.I.E (Córas Iompair Éireann/Irish Transport System) across
          multiple unions were invited to attend a meeting addressing recent
          Labour Court recommendations regarding skilled workers’ pay.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            quod?
          </h1>
        </div>
      ),
      quoteDescription: (
        <div className="read-more-body">
          <p>Joseph Holloway, 8 January 1917</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            This alternative use of the Rotunda did not disrupt normal
            programming over the weekend of St Valentine’s Day. On Saturday 14th
            February the evening programme featured the musical{" "}
            <i>Painting the clouds with Sunshine</i> (US: Butler, 1951) starring
            Dennis Morgan and Virginia Mayo.
          </p>
          <br></br>
          <p>
            After the midday union meeting on Sunday 15th, the Rotunda opened to
            patrons with a screening of the <i>It’s Magic</i> (US: Curtiz,
            1948). Also known as{" "}
            <a
              href="https://youtu.be/r69O8am3gvk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>Romance on the High Seas</i>
            </a>
            , the alternative title of <i>It’s Magic</i> (used for the film’s UK
            and Irish release) was borrowed from the film’s most memorable song.
            Written by Jule Styne and Sammy Cahn, the{" "}
            <a
              href="https://youtu.be/Nuq8X4mn8P4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oscar nominated song
            </a>{" "}
            was performed by Doris Day in what was her big screen debut.
          </p>
          <br></br>
          <p>
            By the time It’s Magic played at the Rotunda in 1953, Day had become
            a household name with Irish audiences. Recalling their memories of
            the star, participants of the Irish Cinema Audiences project were
            drawn to the star because of her cheerful persona and upbeat
            singing. To quote one Dublin cinema-goer from Phibsboro, Day had
            ‘spirit, a fantastic voice’ and was ‘not too glamorous’. A firm
            favourite among female cinema-goers in particular, as one fan from
            Rathmines put it, Day was an ‘all American beauty’ whose
            performances offered a form of escapism (‘you could lose yourself in
            her roles’).{" "}
          </p>
          <br></br>
          <p>
            The programming of <i>It’s Magic</i> at the Rotunda in February 1953
            came more than two years after the film first premiered in the
            Adelphi on Abbey Street. Following a week-long run there, the film
            moved onto a number of second run cinemas in the city centre and
            suburbs, while also featuring in the programme of cinemas across the
            country. During the period from October 1949 to February 1953 some
            of the Dublin cinemas where <i>It’s Magic</i> appeared included the
            New Electric on Talbot Street, the Mary Street cinema, the Strand in
            North Wall, the Adelphi in Dun Laoghaire and the Ritz in
            Ballsbridge.
          </p>
          <br></br>
          <p>
            The reappearance of <i>It’s Magic</i> in the city centre for its
            screening at the Rotunda on 15 February 1953 was indicative of the
            Rotunda’s position as a second/third run house within the city’s
            cinema network at that time. Indeed, the occurrence of union
            meetings at the Rotunda also points to the venue’s need to seek
            alternative revenue streams at a time when Dublin offered
            cinema-goers a huge choice of venues and cinema-going experiences.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 8 - Closed for renovations
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Closed for Renovations</p>
        </div>
      ),
      date: "1953",
      imageURL: CaseStudy8,
      section: (
        <p>
          The Rotunda closed its doors on the 3rd November 1953 ahead of a major
          renovation. As a cinema, the venue had been in decline for a number of
          years. Indeed a columnist for <i>The Southern Star</i> newspaper
          declared that the Rotunda had become an ‘unimportant cinema’.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            We shall soon have the pleasure of visiting a rejuvenated Rotunda
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Corkmen in the Capital (by Laoi), The Southern Star, 5 December 1953
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            This assessment from a self-proclaimed ‘Corkman in the capital’ must
            have added to the chagrin of Dubliners who had witnessed the
            important venue fall into disrepair over the years. Almost two
            centuries after the Rotunda Assembly Rooms were originally
            constructed, it was clear that refurbishment was needed to restore
            the venue to its former glory.
          </p>
          <br></br>
          <p>
            At the time of the renovations, the Rotunda was under the management
            of the Capitol and Allied Theatres company, which also ran the
            Capitol cinemas in Dublin in Cork. Established in 1943, Capitol and
            Allied Theatres Ltd was managed by Patrick Farrell who had started
            out in the cinema business in the late 1930s.
          </p>
          <br></br>
          <p>
            In preparation for the renovation works at the Rotunda, adverts were
            placed in the <i>Irish Press</i> and the <i>Cork Examiner</i>{" "}
            announcing the sale of the venue’s contents. Among the items
            available to purchase were a boxing ring and a grand piano,
            reflecting the varied nature of the Rotunda’s entertainment offering
            down through the years.
          </p>
          <br></br>
          <p>
            The renovations began in mid-November and were carried out by J Sisk
            and Sons Building Contractors. While the work got underway, it was
            reported that the Rotunda would also be renamed as part of the
            revamp. Rumours published in the press in November 1953 suggested
            that ‘The Golden Bowl’ was one name being considered (perhaps in a
            nod to the rounded design of the original Assembly Rooms), but by
            the time the refurbishment was completed in September 1953 The
            Golden Bowl moniker had been dropped for the more sophisticated
            sounding title of the Ambassador. As a young lad growing up in
            Dublin’s north inner city, John recalls how the Rotunda was
            transformed from a 4 penny cinema, to a luxury first run cinema:
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 9 - Welcome to the Ambassador
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Welcome to the Ambassador</p>
        </div>
      ),
      date: "1954",
      imageURL: CaseStudy9,
      section: (
        <p>
          On the 23rd September 1954, after ten months of renovation works,
          Dublin’s longest running entertainment venue was finally ready to
          welcome back audiences. While there may have been sentimental
          attachment to the Rotunda name there was a sense that a fresh brand
          was needed for this new chapter of the venue’s story.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            The Rotunda has gone - long live the Ambassador!
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>The Evening Herald, 23 September 1954</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            In anticipation of the grand reopening, the <i>Evening Herald</i>{" "}
            declared ‘that the old Rotunda Picture House is no more’, instead,
            audiences could look forward to experiencing ‘the ever so much more
            resplendent Ambassador Cinema’.Outwardly the integrity of the old
            Rotunda structure had been largely preserved, but what could
            audiences expect when they crossed the threshold of the Ambassador?
          </p>
          <br></br>
          <p>
            Upon entering the new foyer, cinema-goers were greeted by ushers
            dressed in red velvet jackets and the sight of a wide marble
            staircase, above which hung a cut glass Waterford crystal
            chandelier. With a seating capacity of 1,250, the original
            auditorium now featured a balcony with private boxes. The new screen
            was compatible with Paramount’s VistaVision widescreen format and
            was also designed to facilitate 3D projections.
          </p>
          <br></br>
          <p>
            In addition to the Ambassador’s technical specifications, careful
            consideration was also given to the interiors and the overall
            cinema-going experience. From the carpets and seating upholstery, to
            the uniforms of the ushers and the ice creams they served, all
            aspects of the luxury experience that awaited audiences was the
            collective effort of multiple Irish enterprises including well-known
            businesses like McBirney’s department store and Noyeks, timber
            suppliers.
          </p>
          <br></br>
          <p>
            The opening of the Ambassador was marked by a gala screening of{" "}
            <a
              href="https://youtu.be/ZUom8mK_PFc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>Knock on Wood</i>
            </a>{" "}
            (US: Panama and Frank, 1954) starring Danny Kaye. Billed as an
            invitation only event, there was an expectation that those attending
            would embrace the glamour of the occasion. The <i>Irish Press’s</i>{" "}
            film critic somewhat sardonically commented that ‘the last time
            people wore “dress”’ to the old Rotunda ‘must have been about the
            time of Grattan’s volunteers’ (<i>Irish Press</i>, 20 September
            1954). And so, before an audience of politicians and dignitaries
            from all sectors of Irish society, the Ambassador was formally
            opened by then Lord Mayor of Dublin Alfie Byrne.
          </p>
          <br></br>
          <p>
            When the Ambassador opened to the general public the following day,
            one young Dublin cinema-goer who passed through the doors with her
            mother to see <i>Knock on Wood</i> during its run was Sally from
            Mount Merrion:
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 10 - Rolling out the Red Carpet for Ben-Hur
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Rolling out the Red Carpet for Ben-Hur</p>
        </div>
      ),
      date: "1960",
      imageURL: CaseStudy10,
      section: (
        <p>
          The Irish premiere of <i>Ben-Hur</i> took place at the Ambassador on
          the 8th September 1960. The event was attended by English actor Jack
          Hawkins who played the role of Quintus Arrius. Like many gala
          premieres at that time, proceeds from the evening were given to a
          nominated charity or religious organisation.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            quod?
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Joseph Holloway, 8 January 1917</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            On this occasion, the funds raised by the <i>Ben-Hur</i> premiere
            were donated to Blackrock College in acknowledgement of the school’s
            centenary. The audience that evening included members of Blackrock
            College, clerics, politicians and representatives from the
            entertainment industry.
          </p>
          <br></br>
          <p>
            But beyond the glamour and ceremony of the gala event, how do young
            cinema-goers of the day remember their own experiences of seeing
            <i>Ben-Hur</i> on the big screen for the first time? As a youngster
            growing up in Fairview, Brian was a regular attendee of his local
            cinema, the Fairview Grand, but the release of <i>Ben-Hur</i> was an
            event that prompted him and his friends to expand the boundaries of
            their cinema-going territory with a trip into town. As Brian puts
            it, this was a film that ‘everybody wanted to see’. In anticipation
            of this demand, the Ambassador implemented advanced booking by
            opening the box-office at 11am each day, while press listings from
            the time urged cinema-goers to ‘book now!’.
          </p>
          <br></br>
          <p>
            John from the north inner city vividly recalls how the Ambassador
            had to adapt its programming practices for epics like <i>Ben-Hur</i>
            :
          </p>
          <br></br>
          <p>
            <span>
              "These films were in the region of three hours including an
              interval or as most films declared, an intermission. Due to their
              duration and prestige, they were shown just twice a day, afternoon
              and evening. The admission price was much dearer and all seats
              were bookable. Books of tickets were used; the customary ticket
              dispensers at cashboxes were silent."
            </span>
          </p>
          <br></br>
          <p>
            When it came to the film itself, <i>Ben-Hur</i> is most often
            remembered for the spectacle of the infamous chariot race scene
            (watch it{" "}
            <a
              href="https://youtu.be/frE9rXnaHpE"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            ). Donal from Terenure describes it as ‘an emotional rollercoaster’
            while Mary from Westport recalls ‘the speed of the chariots’.
          </p>
          <br></br>
          <p>
            Writing at the time of the film’s release, the Evening Herald’s
            critic Aidan Pender correctly predicted that this scene, and the
            film as a whole, would more than reap the benefits of MGM’s £5
            million investment. For the Ambassador, <i>Ben-Hur</i> was an
            overwhelmingly successful crowd pleaser. The film ran for five
            months straight with over 200,000 cinema-goers passing through the
            doors to see it before its initial run finally came to an end on the
            9th February 1961.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study Template
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    // {
    //   title: (
    //     <div>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
    //         ut.
    //       </p>
    //     </div>
    //   ),
    //   date: "0000",
    //   imageURL: cs02img,
    //   section: (
    //     <p>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi magnam
    //       voluptates alias facilis animi natus explicabo, amet fugiat quos et
    //       dolore asperiores id distinctio quam. Exercitationem sint quia
    //       voluptates est. Dolor consectetur ad laborum, quisquam mollitia, animi
    //       consequuntur quam nam error quaerat laudantium accusamus repudiandae
    //       sit veritatis odio natus nihil.
    //     </p>
    //   ),
    //   id: uuidv4(),
    //   quote: (
    //     <div>
    //       <h1 className="quotation-marks">“</h1>
    //       <h1 className="quotation">
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
    //         quod?
    //       </h1>
    //     </div>
    //   ),
    //   quoteDescription: (
    //     <div>
    //       <p>Joseph Holloway, 8 January 1917</p>
    //     </div>
    //   ),
    //   readMore: (
    //     <div className="read-more-body">
    //       <br></br>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
    //         veritatis.
    //       </p>
    //       <br></br>
    //       <p></p>
    //       <br></br>
    //       <p></p>
    //       <br></br>
    //       <p></p>
    //       <br></br>
    //       <p></p>
    //       <br></br>
    //       <p>
    //         <a href="" target="_blank" rel="noopener noreferrer"></a>
    //       </p>
    //     </div>
    //   ),
    // },

    /////////////////////////////////////////////////////////////////////////////
    //ADD MORE CASE STUDIES HERE
  ];
}

export default caseStudy1_array;
