import { v4 as uuidv4 } from "uuid";

// Packages
import ResponsiveEmbed from "react-responsive-embed";

// Import hero images
import logo from "./media/caseStudy2/logo.png";
import heroBG from "./media/caseStudy2/hero_bg.jpg";

// Import case study images
import CaseStudy1 from "./media/caseStudy2/storyImages/CaseStudy1.png";
import CaseStudy2 from "./media/caseStudy2/storyImages/CaseStudy2.png";
import CaseStudy3 from "./media/caseStudy2/storyImages/CaseStudy3.png";
import CaseStudy4 from "./media/caseStudy2/storyImages/CaseStudy4.png";
import CaseStudy5 from "./media/caseStudy2/storyImages/CaseStudy5.png";
import CaseStudy6 from "./media/caseStudy2/storyImages/CaseStudy6.png";
import CaseStudy7 from "./media/caseStudy2/storyImages/CaseStudy7.png";
import CaseStudy8 from "./media/caseStudy2/storyImages/CaseStudy8.png";
import CaseStudy9 from "./media/caseStudy2/storyImages/CaseStudy9.png";
import CaseStudy10 from "./media/caseStudy2/storyImages/CaseStudy10.png";

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
          <h4>Drogheda Cinema</h4>
          <h4>Stories</h4>
        </div>
      ),
      heroYears: <h5 className="hero-years">1910 - 1969</h5>,
      heroLogo: logo,
      heroBGimage: heroBG,
      id: uuidv4(),
      caseStudyIntro: (
        <div>
          <h1 className="case-study-intro-title">
            Drogheda: cinema-going stories from an industrial town
            <br></br>
          </h1>
          <div className="case-study-intro-body">
            <p>
              Located at the mouth of the river Boyne, in the early 1900s
              Drogheda was an important port and site of trade with a vibrant
              linen and textile industry dating back to the 18th century. The
              town’s proximity to both Dublin and Belfast has perhaps
              overshadowed Drogheda’s place in the grand narratives of modern
              Irish history. A conventional historical study could take the
              town’s industrial and political history as its starting point, but
              what can we learn about Drogheda’s past when viewed through the
              lens of cinema history?
            </p>
            <br></br>
            <p>
              During the period from 1910 to 1960 Drogheda had five different
              cinemas: Drogheda Picture Palace, Whitworth Hall, the Boyne cinema
              (renamed the Savoy in 1954), the Abbey cinema and the Gate cinema.
              This case study explores the emergence and evolution of these
              venues, while also examining the role that cinema played in the
              social, cultural and economic life of Drogheda town.
            </p>
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
          <p>The Drogheda Picture Palace opens</p>
        </div>
      ),
      date: "1910",
      imageURL: CaseStudy1,
      section: (
        <p>
          The origins of long-term cinema in Drogheda can be traced to the
          building on Fair Street that began life as St Mark’s Church in 1829
          but was opened on 31 October 1910 as the Drogheda Picture Palace by
          variety agent Harry Seymour and his manager Thomas Harris.
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
            Harris was an English-born variety performer who had toured Ireland
            giving magic lantern lectures to which he had added film. The films
            he showed in the Picture Palace’s first week were advertised in the{" "}
            <i>Drogheda Independent</i> and <i>Drogheda Argus</i> as
            “interesting, dramatic and humorous” but their titles are not
            recorded. The programme also included a live performance by Irish
            comedian Bob Stephenson.
          </p>
          <br></br>
          <p>
            The first named film at the Drogheda Picture Palace appeared the
            following week, beginning 7 November 1910, when Harris offered a
            film of the Eucharistic Congress at Montreal on a programme that
            included the live ballad singing by Rita O’Neill.
          </p>
          <br></br>
          <p>
            Harris continued at the Fair Street premises until June 1911. The
            last advertised programme on 10 June 1911 shows that he now had
            named musical accompanists - Mabel Dixon on piano and William Power
            on violin - and offered competitions of some kind. Like many other
            early cinemas, the Picture Palace closed for the summer, and Harris
            went to manage summer film shows at the seaside towns of Bettystown,
            Co. Meath and Balbriggan, Co. Dublin.
          </p>
          <br></br>
          <p>
            Over the summer, Harris and Seymour had a very public falling out
            over the ownership of some film equipment, and in the autumn of
            1911, the management of the Picture Palace passed to William Power,
            probably the same William Power who had played violin accompaniment
            in the previous season.
          </p>
          <br></br>
          <p>
            This building on Fair Street would continue as a cinema under
            different management and different names for decades, in 1912
            becoming the Electric Cinema and in 1919 the Boyne Cinema.
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
          <p>Diversified entertainment at the Whitworth Hall’s Cinema House</p>
        </div>
      ),
      date: "1911",
      imageURL: CaseStudy2,
      section: (
        <p>
          When the Whitworth Electric Picture Hall opened on 29 November 1911, a
          year after the Drogheda Picture Palace opened on Fair Street,
          long-term cinema first came to one of the town’s most established
          entertainment venues, the Whitworth Hall on Laurence Street.{" "}
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            A welcome amusement after a day’s toil is over
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            <i>Bioscope</i>, 29 April 1915
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            The Whitworth Hall had been built in 1865 and donated to the town by
            local linen-mill owner and Liberal MP Benjamin Whitworth as a
            “people’s hall.” No information appears to survive on who was
            involved in the first cinema venture there in 1911, but it certainly
            began with the intention of providing the kind of full-time cinema
            available at the Drogheda Picture Palace and many other cinemas
            around the country at this time. The Electric Picture Hall changed
            its programme three times a week, advertised its prices as “popular”
            or cheap and offered a children’s matinee on Saturdays. As well as
            this, the programme was “augmented” by well-known variety
            performers. If this wasn’t “diversified” enough, the company devoted
            the afternoons to“rinking” or roller skating, which was experiencing
            a short-lived popular craze.
          </p>
          <br></br>
          <p>
            In the autumn of 1912, the Whitworth was acquired by the Dundealgan
            Picture Company, which also ran a cinema in Dundalk’s Town Hall, and
            the company relaunched it as the Drogheda Cinema House, under the
            management of Jack O’Mahony. Programming remained the same,
            consisting on the opening bill of “all the latest and up-to-date
            pictures” alongside variety “comedienne” Violet Forrest. “Variety
            ‘turns’ are popular at this house,” Paddy, the Ireland reporter for
            the British trade journal <i>Bioscope</i> confirmed when passing
            through Drogheda in May 1914. Mr. O’Mahony, he thought, “certainly
            appears to have obtained a good grip on the public, with the result
            that business is excellent.”
          </p>
          <br></br>
          <p>
            Paddy also found time on that trip to visit the cinema in Fair
            Street, which somewhat confusingly was now called the Electric
            Cinema. He found “good crowds prevailing at the Electric in Fair
            Street, and Mr. Butler, the manager, had his hands pretty full.” The
            company that Butler worked for planned to close for the summer
            because “business in a town like Drogheda, with its river and close
            proximity to the sea, is not likely to be very promising while the
            warm weather is in evidence.”
          </p>
          <br></br>
          <p>
            Despite changes of ownership and periods of closure, these two
            premises at the Whitworth Hall and in Fair Street would remain the
            key sites of Drogheda cinema for decades.
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
          <p>Cinema as a juvenile delinquent medium</p>
        </div>
      ),
      date: "1912",
      imageURL: CaseStudy3,
      section: (
        <p>
          Cinema in the 1910s was often considered to be disreputable, as the
          case of Thomas McKevitt and James Rourke suggests. On 24 June 1912,
          these two boys in their early teens were charged before Drogheda’s
          Children’s Court with stealing four tennis balls to pay for their
          nightly attendance at the local cinema.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            They must get money some place for the picture palace.
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Detective Inspector Carbery, commenting on boys stealing to feed
            their cinema addiction
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            For such a seemingly trivial case, it made national news in the
            <i>Irish Independent</i>, in part because it fitted with other
            stories of juvenile crime supposedly caused by habitual cinema
            attendance and often by watching crime films. However, the case was
            covered in far more detail in the <i>Drogheda Independent</i>,
            which, with a perhaps knowing sense of the absurd, followed the
            testimony of various children on the illegal trade in balls that had
            been stolen from the local tennis club.
          </p>
          <br></br>
          <p>
            Detective Inspector Carbery clearly saw it as the addictive
            behaviour of the delinquent children of neglectful working-class
            parents. “They go to the Picture Palace every night, and steal and
            sell balls and cigarettes to provide themselves with money,” he
            commented. “It will not stop at that, but will drift into bigger
            things. It is destructive of all morality.”
          </p>
          <br></br>
          <p>
            In this instance, Carbery was not interested in what the boys were
            watching or their behaviour in the cinema, which was at issue in the
            case of Christopher Crosby at the Abbey Cinema in the 1940s. Carbery
            was more concerned with the fact that their attendance at the cinema
            meant that they were allowed to roam unsupervised at night. Given
            the suggestion of neglect, he mentioned that confinement in an
            industrial school would be suitable punishment for these boys, but
            the mayor allocated fines and stipulated that their parents
            undertook to be responsible for the boys’ good behaviour for a year.
          </p>
          <br></br>
          <p>
            Suspicion of cinema would remain and take such other forms as the
            campaigns for censorship of films and for age restrictions on cinema
            attendance.
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
          <p>Censoring Irish films at the Boyne Cinema</p>
        </div>
      ),
      date: "1919",
      imageURL: CaseStudy4,
      section: (
        <p>
          On 16 April 1919, police raided the Boyne Cinema and carried off the
          Irish film <i>The Sinn Fein Review</i>. It was the culmination of a
          series of events that had begun when Joseph Stanley had taken over the
          Fair Street Electric Cinema just three months earlier with the
          intention of putting it under “Irish-Ireland management.”
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
            Stanley was a prominent Rebublican who had been the proprietor of
            the radical Gaelic Press and printer of such key 1916 Rising
            documents as the Proclamation of the Republic. He was under the
            attention of the authorities in Drogheda when he took over the Fair
            Street Electric Cinema and renamed it on 27 January 1919 as the
            Boyne Cinema, after the river on which the town was built.
          </p>
          <br></br>
          <p>
            He included Irish films from his opening programme, which featured
            the “Irish-made screamingly funny comedy” <i>Rafferty’s Rise</i>,
            made by the Film Company of Ireland in 1917. Ireland’s first film
            magazine
            <i>Irish Limelight</i> described <i>Rafferty’s Rise</i> as the story
            of “a young and ambitious Irish policeman who endeavours to employ
            scientific methods in the detection of crime and whose efforts to
            emulate Sherlock Holmes cause many laughter provoking incidents.”
            The programme also featured among its non-film attractions the
            dancing of gold-medal Irish dancer Greta Daly. As a man under
            surveillance, Stanley’s choice of a film poking fun at the foibles
            of a rural constable may not have been wholly accidental.
          </p>
          <br></br>
          <p>
            The local police had the opportunity for revenge when Stanley hired
            <i>The Sinn Fein Review</i>, a compilation of newsreels about the
            rise of the Republican party. This was precisely the sort of content
            to appeal to Stanley, and a copy had been dispatched by the
            filmmakers to the Boyne before the authorities at Dublin Castle
            banned the film. As a result, a large force of police arrived at the
            Boyne and threatened to break down the door with a heavy axe if the
            film wasn’t handed over to them.
          </p>
          <br></br>
          <p>
            Stanley remained proprietor of the Boyne until his death in 1950. By
            the 1950s, however, the Boyne suffered in reputation among Drogheda
            cinemagoers when compared to such purpose built cinemas as the Abbey
            and the Gate.
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
          <p>
            The Whitworth Hall shows{" "}
            <i>Aimsir Padraig/In the Days of St Patrick</i>
          </p>
        </div>
      ),
      date: "1920",
      imageURL: CaseStudy5,
      section: (
        <p>
          A handbill in Irish for a run at Drogheda’s Whitworth Hall of the 1920
          Irish film of the life of St Patrick,{" "}
          <i>Aimsir Padriag/In the Days of St Patrick</i> unexpectedly survives
          in the pages of the British trade journal{" "}
          <i>Kinematograph and Lantern Weekly</i>.
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
            This is a lucky survival because it’s often difficult to see when
            cinemas in even a large town such as Drogheda showed a particular
            film. Cinemas may not have advertised regularly in the newspapers,
            the main historical source that still exists. Drogheda’s two
            newspapers, the <i>Drogheda Independent</i> and{" "}
            <i>Drogheda Argus</i>, published weekly, and cinema changed their
            films twice or three times a week. As a result, many cinemas used
            more ephemeral ways of advertising than newspapers, such as posters
            and handbills, which are rarely preserved.
          </p>
          <br></br>
          <p>
            But sometimes a piece of ephemeral film advertising survives for
            other reasons, such as when it ends up as part of a court case or in
            official documents, as happened with the Boyne Cinema’s handbill for
            <i>The Sinn Fein Review</i>. The handbill for the 1920 Irish film{" "}
            <i>Aimsir Padriag/In the Days of St Patrick</i> is even more
            interesting because it appears in Irish written in Gaelic type. This
            is a very rare item because very few films shown in Drogheda were
            made in Ireland, and virtually none of that few used the Irish
            language. <i>Aimsir Padriag/In the Days of St Patrick</i> is a
            unique silent film that had intertitles in Irish and English.
          </p>
          <br></br>
          <p>
            The handbill survives in the pages of the <i>Kine Weekly</i> of 15
            April 1920, because Whitworth manager Jack O’Mahony sent it to the
            journal to refute Prime Minister David Lloyd George’s recent
            statement that Ireland had no language of its own. “This does not
            look like it, does it?” O’Mahony asked the editors. “Readers will no
            doubt agree, on examining the bill reproduced below, that it does
            not!” they admitted.
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
          <p>Welcome to the Abbey Cinema</p>
        </div>
      ),
      date: "1937",
      imageURL: CaseStudy6,
      section: (
        <p>
          In September 1937 Drogheda cinema-goers welcomed the opening of the
          town’s first purpose built cinema. Located on West Street, the Abbey
          Cinema was the enterprise of local businessman John Murphy.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            One of the most magnificent cinemas not alone in Ireland, but across
            the water and in the greater world
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Laurence J Walsh, Mayor of Drogheda speaking at the opening of the
            Abbey Cinema, 8 September 1937
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            The new state of the art cinema borrowed its name from the nearby
            Abbey of Saint Mary D’Urso. In keeping with the area’s sacred past,
            the Abbey Cinema was given the blessing of the Bishop of Kilmore
            Patrick Lyons who officiated the grand opening.
          </p>
          <br></br>
          <p>
            From the main entrance on West Street, patrons entered a spacious
            foyer which was decorated to the highest standard, including
            Terrazzo detail. With capacity for 1,000 patrons, the sumptuously
            upholstered seating was split across the ground floor area and a
            balcony. Even patrons paying for the so-called ‘cheap seats’ were
            afforded the same level of comfort as those in the more expensive
            seats. A regular patron of the Abbey in the 1950s, Elizabeth recalls
            the experience of entering the cinema’s luxurious environment.
          </p>
          <br></br>
          <p>
            A second side entrance, located in Patrick’s Well Lane, was used to
            admit cinema-goers to the cheaper seats in the front stalls. As a
            young girl, Elizabeth and her siblings would queue at the side
            entrance in anticipation of entering ‘the big dark cinema’
            auditorium for the Saturday matinee.
          </p>
          <br></br>
          <p>
            In addition to prioritising the comfort of his patrons, John Murphy
            paid careful attention to the design and placement of the seating on
            both levels to ensure that all patrons had an unobstructed view of
            the screen. The shape of the auditorium ceiling was designed to
            enhance the acoustics and the <i>Drogheda Independent</i> reported
            that a modern ventilation system had been installed to help maintain
            ‘a clean, smokeless atmosphere’ during the performance (14 August
            1937). Although, the effectiveness of this ventilation system is
            challenged by Elizabeth’s memory of looking up at the screen through
            a ‘haze’ of cigarette smoke.
          </p>
          <br></br>
          <p>
            The programme on opening night featured the British film{" "}
            <i>
              <a
                href="https://youtu.be/Gw9q1N_8ELs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wings of the Morning
              </a>
            </i>{" "}
            (UK: Schuster and Tryon, 1937) starring Henry Fonda and French
            actress Annabella. For audiences of the Abbey Cinema, the film would
            have had a particular Irish appeal given the presence of the Athlone
            born tenor, John McCormack. In the film McCormack stars as himself
            to perform the popular song{" "}
            <i>
              <a
                href="https://youtu.be/3JSnEPNbm2A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Believe Me, If All Those Endearing Young Charms
              </a>
            </i>
            .
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/CQYT4wKs9d8" />
          </div>
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
          <p>On stage at the Gate cinema</p>
        </div>
      ),
      date: "1944",
      imageURL: CaseStudy7,
      section: (
        <p>
          On 2 November 1944 Drogheda’s second purpose built cinema, the Gate
          opened to the public. The grand opening featured a screening of the
          musical Dixie (US: Sutherland, 1943) starring Bing Crosby and Dorothy
          Lamour with all proceeds from the event going to the local branch of
          Saint Vincent de Paul.
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
            The Gate was located not far from the Abbey cinema on West Street.
            It’s likely that the proximity of the two venues to one another
            played a role in shaping the way that the management of the Gate
            sought to distinguish itself as a cinema that was known for
            cine-variety performances and live stage shows. While the Abbey also
            featured occasional cine-variety events, this particular brand of
            entertainment was very much a regular feature of the Gate’s
            offering. This distinction between the two venues is evident in
            historic programming listings and also emerges in the memories of
            cinema-goers like Elizabeth who associates the Gate with ‘a lot of
            live’ performances.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/Qk0bCsllO1w" />
          </div>
          <br></br>
          <p>
            Within a month of opening, the Gate held its first ‘Super-Variety
            Stage Show’, which included performances from a host of local
            musicians including the Rocky Mountaineers and Jimmy Milsop
            (described in the Gate’s programme as ‘Ireland’s Bing Crosby’). A
            report in the <i>Drogheda Independent</i> described the event as
            ‘one of the best variety shows seen in Drogheda in recent years’,
            which left ‘the audience clamouring for more’ (16 December 1944).
            The suitability of the Gate for live performances was also noted by
            the reporter who highlighted the cinema’s ‘spacious, well-equipped
            stage and lighting facilities’.
          </p>
          <br></br>
          <p>
            More than just a cinema that hosted touring variety performances,
            the Gate provided a space where local artists and performers could
            nurture and showcase their talents. From school operettas to amateur
            dramatics, the Gate’s association with the performing arts came
            particularly to the fore in 1950 when it hosted Drogheda’s first
            pantomime. Based on the fairy tale <i>Little Red Riding Hood</i>,
            the production featured music from the Drogheda Brass and Reed Band.
            Over 12,000 people attended the show during its ten night run. An
            extensive review featured in the <i>Drogheda Independent</i> on 28
            January 1950 heralded the production as a great success. While the
            reporter acknowledged that Drogheda audiences were not always ‘easy
            to please’, the enthusiastic response to this first amateur
            production set a precedent for an annual pantomime that had the
            potential ‘to take its place amongst the best that any provincial
            town in the country can present’.
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
          <p>Action on and off the screen</p>
        </div>
      ),
      date: "1946",
      imageURL: CaseStudy8,
      section: (
        <p>
          On Monday the 17th of June 1946, the Abbey’s regular programme
          featured two evening shows at 6pm and 9pm. The main feature that
          evening was the World War II film The Cross of Lorraine (1943)
          starring Jean Pierre Aumount and Gene Kelly.
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
            Based on the novel <i>A Thousand Shall Fall</i> by Hungarian writer
            Hans Habe, the film adaptation tells the story of a group of French
            soldiers who were captured by the Nazis in 1940 and interned in a
            military prison camp. The Abbey’s programme listing in the{" "}
            <i>Drogheda Independent</i> described the film as ‘current history
            told with drama and breathless suspense!’.
          </p>
          <br></br>
          <p>
            On that June evening in 1946, cinema-goers attending the 9pm show
            may have got a little more drama and suspense than they anticipated
            when, before the main feature had even started, a commotion broke
            out in the pit. A young cinema-goer by the name of Christopher
            Crosby became rowdy during the screening of a short film. The
            usherettes intervened, calling for the youngster to quieten down;
            however, their pleas fell on deaf ears and Crosby became
            increasingly disruptive.
          </p>
          <br></br>
          <p>
            In an effort to diffuse the situation, cinema owner, John Murphy
            removed Crosby from the auditorium via a side entrance. While
            dealing with the situation, Murphy was confronted by a drunk patron
            who, in his intoxicated state, took it upon himself to defend
            Crosby. The altercation resulted in Murphy being hit on the head
            with a bottle. Thankfully his injuries were not serious.
          </p>
          <br></br>
          <p>
            When the matter was dealt with in court some six weeks later,
            evidence against Christopher Crosby stated that the minor had seven
            previous convictions. Addressing Crosby, the judge declared ‘I’m
            going to stop rowdyism by young pups like you’. Unlike the fate of
            the characters in <i>The Cross of Lorraine</i>, which played out
            on-screen in the Abbey that evening, Christopher Crosby escaped a
            prison sentence for his own off-screen performance and was instead
            bound to the peace for two years. Nevertheless, the press coverage
            of this misdemeanour echoes the case of juvenile delinquency
            witnessed in the Drogheda Picture Palace some 3 decades earlier, and
            points to the fact that cinema continued to be associated with the
            corruption of youth.
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
          <p>Usherette wanted at the Abbey</p>
        </div>
      ),
      date: "1955",
      imageURL: CaseStudy9,
      section: (
        <p>
          According to the 1951 census Drogheda had a population of 16,779,
          making it the second largest municipal borough in the country after
          Galway. By the 1950s, the Abbey was one of three cinemas in the town,
          along with the Boyne and the Gate. In addition to being outlets for
          entertainment, these cinemas were a source of employment.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            You’d go up to the back row. There might be a bit of kerfuffling
            going on, but very innocent. Then the usherette would come…
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Elizabeth, a regular cinema-goer at the Abbey recalls her memories
            of the usherettes
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            In October 1955, the Abbey cinema had openings for an usherette and
            a shop assistant. The weekly programme published in the{" "}
            <i>Drogheda Independent</i> featured a one line advert for the
            vacant positions: ‘Wanted - Usherette and Shop Assistant’.
          </p>
          <br></br>
          <p>
            While this advert tells us little or nothing about the role of the
            usherette and the skills that might be needed, usherettes were often
            an important part of the cinema-goer’s world and as Elizabeth
            recalls, the smartly dressed usherettes in the Abbey added to the
            glamour of the experience. The ‘Air Force blue’ uniforms recalled by
            Elizabeth were designed by a local business by the name of T Brady
            and Son, which, like the cinema, was also located on West Street. In
            a town with a long established and renowned textile industry, it is
            perhaps unsurprising that the usherettes in the Abbey were dressed
            to impress.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/L7X-ggYaUd4" />
          </div>
          <br></br>
          <p>
            Armed with a torch, Elizabeth reminds us of how the usherettes were
            often called on to uphold a certain level of order and decorum
            during the programme. As is recounted in the section on ‘Action on
            and off the screen’ usherettes would occasionally find themselves
            facing difficult situations when the antics of cinema-goers got out
            of hand.
          </p>
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
          <p>Quiz nights and dancing: alternative entertainment at the Abbey</p>
        </div>
      ),
      date: "1960",
      imageURL: CaseStudy10,
      section: (
        <p>
          In the late 1940s and early 1950s, the Carlton Cash-Pot Quiz night was
          a regular feature of the Abbey Cinema’s Friday night programming.
          These lively events, which were noted for audience sing-alongs, were
          hosted by Tommy Matthews. A well-known local figure, Matthews made a
          name for himself as the manager of The Carlton dance band.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Occupying a central position, the imposing structure is incomparably
            superior in magnificence to any ballroom in the country
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Feature on the opening of the Abbey Ballroom in{" "}
            <i>The Drogheda Independent</i> 16 April 1960
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            The Carlton - or The Flying Carlton as they were also fondly known -
            was a Drogheda-based band that built up a following around the
            country and in the UK. The demand for the band may have kept them
            away from Drogheda for stretches of time, but Tommy Matthews’
            instinct for publicity opportunities led to a collaboration with the
            Abbey Cinema, which would ensure that the band were never far from
            the minds of their hometown fans. The band was the de facto sponsor
            of the weekly Carlton Quiz cash prize, but other local businesses
            also sought to take advantage of this marketing platform.
          </p>
          <br></br>
          <p>
            The <i>Drogheda Independent</i> reported on the success of the
            Abbey’s quiz night, describing it as a ‘big hit’ with cinema-goers.
            Each week the quiz featured a ‘local news’ round which was ‘culled’
            from the pages of the <i>Drogheda Independent</i> and patrons of the
            Abbey were urged to read their local paper carefully: “Don’t forget
            readers, remember what you peruse in your{" "}
            <i>Drogheda Independent</i> - it may be well worth your while!” (21
            January 1950)
          </p>
          <br></br>
          <p>
            On Friday 13th January 1950, it was a full house at the Abbey for
            the 8pm show. While some may have turned up purely for the
            opportunity to see Frank Sinatra, Esther WIlliams and Gene Kelly in
            the the evening’s main feature -{" "}
            <i>
              <a
                href="https://youtu.be/h7PPaITpaUw"
                target="_blank"
                rel="noopener noreferrer"
              >
                Everybody's Cheering
              </a>
            </i>{" "}
            (also known as Take Me Out to the Ball Game, US: Berkeley, 1949) -
            others may have been more enticed by the chance to participate in
            the weekly quiz, which promised a bottle of champagne and bottle of
            whiskey for the lucky winner. On this occasion, the prizes were
            supplied by the Brown Derby pub, a well-known establishment located
            on James Street.
          </p>
          <br></br>
          <p>
            As part of the promotion for the quiz each week, the{" "}
            <i>Drogheda Independent</i> published ‘The Carlton Communique’ on
            the paper’s entertainment page. In addition to promoting the local
            business sponsoring the week’s prizes, these adverts also acted as
            listings for The Carlton’s upcoming show locations and dates. This
            particularly creative form of local marketing simultaneously flew
            the flag of three Drogheda enterprises - The Abbey, the featured
            sponsor and the Carlton - creating a sense of cohesion and local
            identity. As owner of the Abbey, John Murphy’s willingness to
            diversify his programme is indicative of how he utilised his cinema
            to spotlight other businesses and bring the local community
            together.
          </p>
          <br></br>
          <p>
            By the late 1950s and early 1960s, the emergence of the ballroom as
            an alternative source of entertainment presented a challenge for
            cinema owners. Again, Murphy responded proactively to this shift in
            consumer habits by opening the Abbey Ballroom in April 1960. With a
            musical programme that featured a house orchestra and special
            appearances from showbands, the responsibility for managing the
            ballroom and its events was entrusted to Tommy Matthews who moved on
            from his role as the Carlton Quiz master. As cinema-goers like
            Elizabeth came of age in the 1960s, evenings of live music and
            dancing at the Abbey Ballroom signalled the transition from
            adolescence to young adulthood.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/4HV0gEVgIKI" />
          </div>
          <br></br>
          <p>
            The Abbey Cinema and Ballroom continued to serve as important social
            venues until February 1969 when both were destroyed in a fire
            marking the end of an era for cinema-going in Drogheda.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/X7_Yt7uaHY4" />
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    //ADD MORE CASE STUDIES HERE
  ];
}

export default caseStudy2_array;
