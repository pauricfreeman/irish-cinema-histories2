import { v4 as uuidv4 } from "uuid";

// Packages
import ResponsiveEmbed from "react-responsive-embed";

// Import hero images
import logo from "./media/caseStudy4/logo.png";
import heroBG from "./media/caseStudy4/hero_bg.jpg";

// Import case study images
import CaseStudy1 from "./media/caseStudy4/storyImages/CaseStudy1.png";
import CaseStudy2 from "./media/caseStudy4/storyImages/CaseStudy2.png";
import CaseStudy3 from "./media/caseStudy4/storyImages/CaseStudy3.png";
import CaseStudy4 from "./media/caseStudy4/storyImages/CaseStudy4.png";
import CaseStudy5 from "./media/caseStudy4/storyImages/CaseStudy5.png";
import CaseStudy6 from "./media/caseStudy4/storyImages/CaseStudy6.png";
import CaseStudy7 from "./media/caseStudy4/storyImages/CaseStudy7.png";
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
          <h4>Travelling Cinema</h4>
          <h4>Stories</h4>
        </div>
      ),
      heroYears: <h5 className="hero-years">1900 - 1960</h5>,
      heroLogo: logo,
      heroBGimage: heroBG,
      id: uuidv4(),
      caseStudyIntro: (
        <div>
          <h1 className="case-study-intro-title">
            Into the West: Tracing Ireland's Travelling Cinemas
            <br></br>
          </h1>
          <div className="case-study-intro-body">
            <p>
              Travelling cinema companies were an important part of the cultural
              life of many parts of rural Ireland right through the twentieth
              century. This case study focuses on the companies that took to the
              roads in the west of Ireland - particularly in Galway, Clare and
              Mayo - between 1900 and 1960.
            </p>
            <br></br>
            <p>
              These companies had their origins with the travelling showpeople
              who added moving pictures to their existing attractions at the end
              of the nineteenth and start of the twentieth century. Moving
              pictures formed another way of enticing patrons to
              turn-of-the-century circuses, fairs, bazaars, itinerant magic
              lantern shows, and travelling drama and variety entertainments of
              many kinds. Some of these showpeople brought their own temporary
              premises with them, while others used the existing facilities of
              municipal theatres, assembly halls or the meeting rooms of local
              organizations. By the 1910s, some travelling entertainers found
              they could make a living by focusing on showing films as their
              main or sole attraction.
            </p>
            <br></br>
            <p>
              Entertainers who travelled together were often part of the same
              family - here, we’ll encounter the Ormondes, McFaddens, Jamesons,
              Pipers and Tofts - and they formed their own circuits by
              revisiting favoured places. These shows brought a taste of the new
              cinema medium to virtually all parts of Ireland.
            </p>
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 1 - Dr Ormonde
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Dr Ormonde’s Vivograph in Tuam</p>
        </div>
      ),
      date: "1900",
      imageURL: CaseStudy1,
      section: (
        <p>
          One of the earliest travelling showpeople to include film as part of
          the entertainment was Dr Ormonde. Vivograph animated pictures topped
          the bill when he brought his family, or “La Belle Sunshine Coterie,”
          to Tuam, Co. Galway on 10 October 1900, during an extensive tour of
          Ireland and Scotland in 1900-1901.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Exceedingly effective and realistic views of the vivograph
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Tuam Herald 13 October 1900</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Dr Ormonde was the stage name of Scottish travelling entertainer
            Andrew Garrioch Omond, who had been visiting Ireland with his family
            of performers since the 1880s. For the 1900-01 season, he had
            acquired a film projector called the vivograph from the Leeds
            manufacturer C.C. Vevers, one of the many firms offering projectors
            under a variety of exotic proprietary names.
          </p>
          <br></br>
          <p>
            A famous photograph taken by Robert French in Tuam in 1900 shows a
            poster on a kiosk in the centre of the town square detailing the
            Ormondes’ show at the Town Hall. Most prominent on the poster are
            the names of the vivograph pictures, including scenes from the
            ongoing Boer War and the Boxer Rebellion in China, and footage of
            Queen Victoria during her Irish visit in April of that year (see a
            film of that visit{" "}
            <a
              href="https://ifiplayer.ie/queen-victoria-in-dublin-1900/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            ).
          </p>
          <br></br>
          <p>
            The ad for the show in the <i>Tuam Herald</i> implied that Dr
            Ormonde had taken the war films himself, claiming that he had come
            “direct from the Front, with his very latest astounding and
            Soul-thrilling VIVOGRAPH.” The film of Queen Victoria was described
            in more detail and praised as “the most brilliant record in
            existence of this most unique ceremony, forming in all the finest
            animated pictures ever produced before any audience.” This kind of
            inflated language was even more in use for describing the live acts
            of music, lightning sketches and mathematical prowess performed by
            the Ormonde family, including the clairvoyant Mdlle S. Ormonde “the
            Rosicrucian Psychognomist, a ‘modern witch of Endor.’”
          </p>
          <br></br>
          <p>
            Hyperbole was apparently part of the audience’s anticipation and
            enjoyment of the Ormondes’ show. The <i>Herald</i>’s reviewer
            reported that “an exceedingly large audience filled the Town Hall to
            greet the rather attractive performance with varying degrees of
            enthusiasm, appreciation, languid interest and scepticism.” The
            reviewer’s own scepticism was reserved for the clairvoyant act, but
            s/he was “consoled by the exceedingly effective and realistic views
            of the vivograph, scenes from the Boer war.” Despite their
            prominence on the bill, the films received only this brief mention
            at the end of the review.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 2 - Bringing Cinema to Ballinasloe
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Bringing Cinema to Ballinasloe</p>
        </div>
      ),
      date: "1913",
      imageURL: CaseStudy2,
      section: (
        <p>
          The travelling companies who brought film shows to Ballinasloe, Co.
          Galway in 1913 give an idea of the range of different kinds of
          entertainers - circus people, fairground showpeople and town-hall film
          companies - involved in cinema exhibition in the period after
          permanent cinemas began to appear in Irish cities but before they
          became common in smaller towns.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Many of our town folk will be seen amongst the interested spectators
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>East Galway Democrat 6 September 1913</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Irish cinema construction boomed in the years between 1910 and the
            outbreak of World War I in 1914, but that first phase of building
            was mostly confined to cities and larger towns. Although a small
            town, with a population of 5,169 in the 1911 census, Ballinasloe was
            favoured by location and transport links. Nearer to the middle of
            the country than the west coast and on the Galway-Dublin road and
            rail line, Ballinasloe has long been an important meeting point
            between east and west, epitomized in its longstanding October fair.
          </p>
          <br></br>
          <p>
            Two travelling companies exhibiting films visited in September 1913.
            Appearing at the Town Hall on 9 September, the Excelsior Picture
            Company featured films of the Galway Races - at which, the{" "}
            <i>East Galway Democrat</i> noted “many of our town folk will be
            seen amongst the interested spectators” - and the Epsom Derby, which
            retained its interest three months after the race not only because
            of an abiding interest in horseracing but also because this was the
            race at which suffragette Emily Wilding Davison was killed by King
            George V’s horse (see it{" "}
            <a
              href="https://youtu.be/um9GV6_AILM"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            ). Technical problems marred this show, but the company offered a
            reduced-price show on 14 September, with proceeds in aid of the
            local temperance society. No information appears in tne newspaper
            about the people involved in the company.
          </p>
          <br></br>
          <p>
            When Morgan’s Circus pitched on Fair Green on 16 September, it
            didn’t advertise any live attractions but also highlighted the
            sports films among its “50,000 feet of Life Motion pictures” that it
            could show as part of its Cinema Cirque. In this case the sports
            were Gaelic football and hurling matches from the Croke Memorial
            Cup. Even as Morgan’s were striking their tent, the well-known
            fairground showman John Toft arrived on Fair Green with his
            fairground amusements and cinema tent to take a prominent place in
            the fair. Toft’s displayed a remarkable ability to manage publicity
            and consequently increase his audience. The{" "}
            <i>East Galway Democrat</i>
            praised his “readiness to aid every good work” and concluded that
            “it is not to be wondered at that Mr Toft’s Amusements are well
            patronised, and that he makes friends wherever he goes.”
          </p>
          <br></br>
          <p>
            Seemingly inspired by the examples of these itinerant entertainers,
            local businessmen John Thomas Greeves-O’Sullivan and Timothy J Dolan
            opened a winter season of their Greeves-O’Sullivan and Dolan Picture
            and Variety Company, running at the Town Hall from 24 November and
            over the Christmas period.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 3 - Catherine McFadden Seeks a Licence
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Catherine McFadden Seeks a Licence</p>
        </div>
      ),
      date: "1914",
      imageURL: CaseStudy3,
      section: (
        <p>
          Catherine McFadden was one of the few women identified as the
          proprietor of an Irish travelling cinema company, and it may be
          because she was a woman that she had such difficulties in obtaining a
          licence in 1914 and was prosecuted for bringing her travelling cinema
          to the villages of Co. Clare.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Even at Quilty she got into trouble, the police being still after
            her heels.
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Cork Examiner 14 Dec 1914</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Like many travelling showpeople, McFadden is an obscure figure, who
            has left few traces. She was the mother of Jack McFadden who, as
            we’ll see, also ran a travelling company until the 1950s. Unlike the
            personal testimony we have on Jack and Florence McFadden, Catherine
            McFadden is mostly known from a few newspaper references to her
            attempts to obtain licences to show films. The last reference to her
            seems to be in 1926, when she contacted Offaly County Council after
            being closed down by the sergeant of the "Civic Guard" in the
            village of Kinnitty.
          </p>
          <br></br>
          <p>
            Much more detail exists in an account of her prosecution on 11
            December 1914 at Ennis circuit court. Described as an “itinerant
            cinematograph proprietress,” she was prosecuted for showing films on
            the 7 September at Clarecastle, Co. Clare, “contrary to Section 1 of
            the Cinematograph Acts, 1909, [...] using inflammable films in a
            building which was not duly licensed for the purpose.” The 1909 act
            had been introduced as a fire safety measure because the celluloid
            film used before the 1950s was so imflammable that it was classed as
            low explosive, and the light needed for projection produced
            considerable heat. Local councils issued licences on premises in
            their districts showing films, but travelling exhibitors were
            licenced by the authority in which they resided. McFadden had had a
            licence from Cork County Council that was valid up to 30 April 1914,
            but when she applied and paid for the renewal of her licence, the
            secretary of Cork County Council failed to send it to her, despite
            numerous requests by letter and telegram. When her solicitor wrote
            to the secretary, he replied by return of mail on 7 October.
          </p>
          <br></br>
          <p>
            Although McFadden did not give evidence herself, some details of her
            show emerged in court. Clarecastle’s Sergeant Brady gave evidence
            that McFadden exhibited in a temporary wooden building that complied
            with regulations and that she transported around the country on
            wagons. This is significant because it allowed her to visit such
            small villages in Clare as Knock and Quilty, even if the lack of a
            licence caused the local police to refuse her permission to perform.
            While many exhibitors relied on the railways to move from place to
            place, exhibitors such as McFadden brought cinema to the smallest of
            settlements.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 4 - Jameson’s Picture Circuit
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Jameson’s Picture Circuit</p>
        </div>
      ),
      date: "1916",
      imageURL: CaseStudy4,
      section: (
        <p>
          Galway’s Town Hall Theatre was among the prestigious venues in cities
          and large towns along Ireland’s west coast to which Rotunda showman
          James T. Jameson sent his Irish Animated Picture Company from the
          early 1900s to the mid-1910s as he sought to turn the stops on a
          travelling circuit into permanent venues.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            This Company is perhaps the best travelling Living Picture Company.
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Connaught Telegraph 11 May 1911</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Unlike many other early cinema exhibitors, Jameson had not been an
            itinerant entertainer before the arrival of moving pictures but had
            got into the business from a career in printing and journalism to
            take advantage of a lucrative new opportunity. In the 1900s, he had
            been the best-known of Ireland exhibitors because of his association
            with the Rotunda, which he hired for long “seasons” around such
            holiday periods as Christmas, Easter and the Dublin Horse Show
            season in August. Between these engagements, he toured the Irish
            Animated Picture Company (IAPC) to prestigious venues in other
            cities and large towns, with regular visits to Cork’s Opera House
            and to Theatres Royal in Waterford, Limerick, Tralee and elsewhere.
          </p>
          <br></br>
          <p>
            The “father of Irish pictures,” as the <i>Kinematograph</i> and{" "}
            <i>Lantern Weekly</i> called him in 1912, initially stuck with this
            travelling-seasons model when after 1910, cinemas as we would come
            to know them - in a fixed venue and offering year-round daily shows
            - began to mushroom. When the “Jameson Picture Company” opened a
            four-night engagement at Castlebar Town Hall on 11 May 1911, for
            example, the <i>Connaught Telegraph</i> commented that “this Company
            is perhaps the best travelling Living Picture Company,” albeit that
            the film show was supplemented by the singing of tenor Patrick
            O’Shea, one of Jameson’s regular variety artistes.
          </p>
          <br></br>
          <p>
            From 1912, however, he responded to this competition by securing
            long-term leases on the Rotunda and on the Town Halls and Theatres
            Royal he had previously hired temporarily. He also acquired some
            venues IAPC doesn’t seem to have visited previously, such as
            Galway’s Town Hall Theatre, on which he took the lease between 1913
            and 1916. In that period, travelling was still part of the company’s
            business model, but it was the films and variety artistes who
            travelled between the venues on the circuit that Jameson had formed.
          </p>
          <br></br>
          <p>
            Beyond the acquisition of premises, establishing bases in cities
            such as Galway meant providing equipment - a manageable task for a
            dealer in cinema equipment such as Jameson - and employing local
            staff. Former council employee{" "}
            <a
              href="https://www.militaryarchives.ie/collections/online-collections/bureau-of-military-history-1913-1921/reels/bmh/BMH.WS0406.pdf#page=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frank Hardiman
            </a>{" "}
            acted as Jameson’s Galway manager, but he had to be replaced at
            Easter 1916, when he was arrested and imprisoned as a prominent
            Republican involved in organizing the rebellion in the city. By the
            end of 1916, in any case, Jameson had given up his leases in Galway
            and other towns as he withdrew from film exhibition to focus on the
            distribution end of the business.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 5 - Transporting the Talkies Around Rural Ireland
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Transporting the Talkies Around Rural Ireland</p>
        </div>
      ),
      date: "1938",
      imageURL: CaseStudy5,
      section: (
        <p>
          By the 1930s there were multiple travelling cinemas in operation
          across Ireland. Audiences in townlands across northeast Galway at this
          time would have been particularly familiar with the McFadden Picture
          Show.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">All the equipment was horse drawn</h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Harry McFadden, travelling cinema and theatre operator</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Run by Jack and Florence McFadden, this husband and wife team, along
            with their five sons (George, John, Jimmy, Teddy and Harry), toured
            the country with their travelling cinema business through the 1910s
            and up to the early 1950s. In the mid-1950s, the family business
            transitioned from cinema to travelling theatre and continued to tour
            regularly into the 1960s.
          </p>
          <br></br>
          <p>
            Harry, the youngest member of the family, recalls how his father
            started out showing silent films before moving into the talkies.
            While many travelling cinema and entertainment companies at that
            time would hire local halls, the McFadden’s came up with an entirely
            mobile solution, consisting of a portable projector, screening tent
            and seating.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/TTXbgXKKQ6s" />
          </div>
          <br></br>
          <p>
            Throughout the 1920s and into the 1940s, the McFadden’s transported
            their cinema from town to town using horse-drawn caravans. As Harry
            recalls, they would often get permission to graze the horses in the
            field of a local farmer, an arrangement which, on occasion, led to
            dramatic events and encounters. While touring around County Longford
            during the period of the civil war (1922-1923) Jack McFadden went
            looking for one of his horses only to find himself held at gunpoint
            by IRA member Seán Mac Eoin (listen to Harry’s account of the story
            below). On another occasion, in October 1938, while the family were
            based near Menlough in County Galway, two of their horses were sadly
            knocked down and killed. <i>The Connacht Tribune</i> reported that
            the driver of the car Joseph Davin had been brought before
            Mountbellew District Court to face charges of ‘dangerous driving and
            failure to report the accident to the gardai’ along with a third
            charge of ‘cruelty to the horses’ who were left to die on the side
            of the road, The judge found Davin guilty on all three counts and
            described his failure to tend to the injured horses as
            ‘preposterous’ (10 December 1938).
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/lQ3QtmO6hKI" />
          </div>
          <br></br>
          <p>
            While the McFadden’s horses played a vital role in ensuring that
            they could bring their travelling cinema to local audiences, once
            the films began to roll it was Hollywood’s horses that brought much
            delight and entertainment to cinema-goers. Harry fondly recalls the
            audience’s enthusiasm for Westerns, which may have represented a
            very different world from that of rural Ireland, but at times the
            boundaries could blur. In the clip below Harry recounts how, during
            one particular screening of a Buck Jones film, a woman in the
            audience mistook the hero’s infamous horse Silver for the same horse
            that had paid an unwelcome visit to her garden the previous evening.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/IfK6e0sNoHo" />
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 6 - An Evening’s Entertainment for 6 pence
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>An Evening’s Entertainment for 6 pence</p>
        </div>
      ),
      date: "1940",
      imageURL: CaseStudy6,
      section: (
        <p>
          For audiences in rural Ireland, cinema and cinema-going held a number
          of different meanings. When participants of the{" "}
          <a
            href="https://www.youtube.com/channel/UCKHF8FzsqbhJcVM7-mbDIgg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Irish Cinema Audiences
          </a>{" "}
          project were asked to reflect on what cinema meant to them, many
          referred to the escapism that it offered, the excitement of the film
          and the sense of occasion associated with a trip into the nearest town
          to attend the local cinema.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            I remember with great affection the McFaddens and the joy they
            brought to the countryside when there was no television, no radio,
            no nothing
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Jarlath McDonagh, Turloughmore, Co. Galway</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            In particularly remote or sparsely populated areas, proximity to a
            cinema was not always guaranteed and for these audiences the
            opportunity to experience cinema depended on the arrival of a
            travelling show. For a young boy growing up in Keel County Kerry,
            the occasional novelty of a travelling cinema arriving to ‘set up in
            a neighbour’s field’ brought with it the promise of ‘a great night’s
            entertainment’.
          </p>
          <br></br>
          <p>
            For the audiences that attended the McFadden travelling cinema in
            the 1930s and 40s an evening’s entertainment cost 6 pence or a
            shilling. Cinema-goers could choose between a ticket for tiered
            seating in the balcony section or a spot on one of the rows of
            benches placed between the tiered seating and the screen. Harry
            McFadden explains below how the seating was housed in a timber
            framed tent known as the ‘booth’, which could hold up to four
            hundred people. Once seated inside the booth, cinema-goers could
            expect a programme that typically consisted of newsreels, a main
            feature and a serial, followed by the national anthem at the end of
            the evening.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/qx2XcX-0jNU" />
          </div>
          <br></br>
          <p>
            Harry’s father would also take the opportunity to introduce the next
            evening’s film as a way to whet his audience’s appetite and keep
            them coming back for more (listen to Harry recall his father’s
            tricks of the trade below).
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/bFgTi8TV9Is" />
          </div>
          <br></br>
          <p>
            The McFaddens’ business was built on a programme of films that
            allowed them to stay in an area for three or four weeks at a time.
            During that period, they would show a different film each night
            until it was time to move to the next location on their circuit
            (listen to Harry describe this aspect of the travelling cinema’s
            programming below).
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/nCEq5Y3hew8" />
          </div>
          <br></br>
          <p>
            The McFaddens travelled all over Ireland, but their circuit around
            north-east Galway often took in townlands such as Menlough, Skehana,
            Turloughmore and Glenamaddy. The family returned to the same
            locations year after year and became well-known in the communities
            that they visited. For the Murray family from Turloughmore, the
            return of the McFaddens to the area in May 1937 held a very special
            significance. As they had done in previous years, the McFaddens set
            up their cinema in a field on the Murray family’s land. On 14 May
            1937 Bridget Murray went down to the McFaddens’ caravans to bring
            them some milk when she suddenly went into labour with her seventh
            child. With the help of Florence McFadden, she delivered a healthy
            baby boy whom she named John (Jackie). In the years that followed,
            the young Jackie Murray (pictured above with his school hurling team
            in 1948 - front row, 2nd from right) would also enjoy McFadden’s
            travelling cinema during their annual visits to the area.
          </p>
          <br></br>
          <p>
            Throughout the 1940s, the McFaddens would return to Murray's field
            when their circuit stopped off at Turloughmore. Local man Jarlath
            McDonagh (pictured above with his younger brother Kevin circa 1950)
            recalls the excitement that rippled through the area when the
            McFadden’s arrived:
          </p>
          <br></br>
          <p>
            “the posters used to go up in the school [...] we’d see the posters
            and the word was out, “McFaddens, McFaddens are coming!””
          </p>
          <br></br>
          <p>
            Born in 1940, Jarlath’s first cinema-going memory (courtesy of the
            McFaddens) is of seeing a George Formby film, which featured comedic
            antics that were “the greatest thing” he had ever seen. But it
            wasn’t just the on-screen entertainment that captured the young
            boy’s imagination. Growing up in rural Galway, with few social
            outlets beyond a game of hurling, Jarlath was drawn to the sense of
            adventure and exoticism that the McFadden’s way of life represented
            for him. He fondly remembers the young Harry McFadden as being the
            comedian of the family, while Harry’s older brother Jimmy was “the
            first man [he] ever saw wearing a dickie bow”. Reflecting on the
            transient nature of the travelling cinema, he poignantly recalls how
            the McFadden’s departure from the area for another year was tinged
            with loss and longing:
          </p>
          <br></br>
          <p>
            “We loved their style of living as well because they had lovely
            caravans and trailers and tractors and all that kind of thing [...]
            and when they’d go away, we’d be lonely and we’d love to go with
            them … we’d love to leave with them. because they had such a lovely
            way of life out in the open”
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 7 - Entertainment Tax and the Travelling Cinema
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Entertainment Tax and the Travelling Cinema</p>
        </div>
      ),
      date: "1947",
      imageURL: CaseStudy7,
      section: (
        <p>
          On 8 May 1947 the Minister for Finance Frank Aiken rose to his feet in
          the Dail to announce the national budget for the coming year.
          Speculation that entertainment tax would be increased proved accurate
          when Aiken confirmed that cinema proprietors would be required to
          raise ticket prices by up to 2/3rds.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            the increase in entertainment tax will not be well received by
            cinema-goers
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>‘The Budget’, The Kilkenny People, 10 May 1947</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            The increase, which would come into effect from 15 August, was
            applied to tickets across the majority of price classifications.
            While this adjustment to entertainment tax was an easy way to
            collect and boost national revenue without putting a substantial
            burden on the taxpayer, there were some concerns that the price
            increase would adversely affect the cinema-going habits of the less
            well off. Writing in <i>The Munster Express</i>, theatre and film
            critic C.V.K. (Christy Kavanagh) argued that those worst hit by the
            change would be the ‘poorer classes who now have to pay double for
            their favourite form of relaxation, which purpled their dreams and
            made their lives less drab’ (15 August 1947).
          </p>
          <br></br>
          <p>
            In the same week that the entertainment tax increase on cinema
            tickets came into effect, McFadden’s Travelling Cinema was summoned
            to Derreen District Court in County Galway to face charges relating
            to breaches of entertainment tax regulations. The charges dated back
            to December 1946 when McFadden’s Travelling Cinema was based at the
            nearby townland of Menlough. During a screening on Tuesday 3
            December, a Customs and Excise official by the name of P.J. Frost
            arrived to check that the appropriate number of tickets had been
            issued and collected by the cinema operators. According to a report
            in the <i>Tuam Herald</i> (16 August 1947), when Frost entered the
            marquee to ask patrons for their ticket stubs, some members of the
            audience protested against this interruption to the performance by
            throwing clods of sawdust in his direction. John McFadden
            subsequently produced 197 ticket stubs, accounting for all those
            present in the marquee that evening. Satisfied that McFadden’s
            Travelling Cinema had acted in accordance with tax regulations, the
            District Judge Sean McGiollarnath dismissed the case.
          </p>
          <br></br>
          <p>
            While the McFadden’s business model offered them the freedom to
            travel and set up their cinema anywhere, the Menlough case
            illustrates how the activity of travelling cinemas was nevertheless
            closely monitored and regulated. For a travelling cinema like the
            McFadden’s, whose circuit depended on audiences in rural areas, an
            increase in entertainment tax adversely affected the affordability
            of their offering for rural cinema-goers who, unlike their urban
            counterparts, had less disposable income. This required travelling
            cinema operators to constantly adapt and revise their offering. The
            1946 budget had previously abolished entertainment tax levied on
            dance halls, which seemed to present an opportunity for travelling
            entertainment operators like the McFadden’s to diversify their
            offering in order to avail of this tax exemption. As Harry explains
            below, the family briefly experimented with a combined programme of
            cinema and dances (as documented in the advert above for McFadden’s
            Pictures at Cummer Ballroom in June 1949) but they ultimately found
            this hybrid form of entertainment too complicated to manage and
            concluded that it was better to specialise in one form.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/KgSvoeYda8A" />
          </div>
          <br></br>
          <p>
            Indeed by the mid-1950s, the McFadden brothers had moved away from
            travelling cinema to focus on travelling theatre and variety shows.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/k2x8zETTRU8" />
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 8 -
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
    //////////////////////////////// Case Study 9 -
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
    //////////////////////////////// Case Study 10 -
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
