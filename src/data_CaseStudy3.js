import { v4 as uuidv4 } from "uuid";

// Packages
import ResponsiveEmbed from "react-responsive-embed";

// Import hero images
import logo from "./media/caseStudy3/logo.png";
import heroBG from "./media/caseStudy3/hero_bg.jpg";

// Import case study images
import CaseStudy1 from "./media/caseStudy3/storyImages/CaseStudy1.png";
import CaseStudy2 from "./media/caseStudy3/storyImages/CaseStudy2.png";
import CaseStudy3 from "./media/caseStudy3/storyImages/CaseStudy3.png";
import CaseStudy4 from "./media/caseStudy3/storyImages/CaseStudy4.png";
import CaseStudy5 from "./media/caseStudy3/storyImages/CaseStudy5.png";
import CaseStudy6 from "./media/caseStudy3/storyImages/CaseStudy6.png";
import CaseStudy7 from "./media/caseStudy3/storyImages/CaseStudy7.png";
import CaseStudy8 from "./media/caseStudy3/storyImages/CaseStudy8.png";
import CaseStudy9 from "./media/caseStudy3/storyImages/CaseStudy9.png";
import CaseStudy10 from "./media/caseStudy3/storyImages/CaseStudy10.png";

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
          <h4>Small-Town</h4>
          <h4>Cinema Stories</h4>
        </div>
      ),
      heroYears: <h5 className="hero-years">1910 - 1958</h5>,
      heroLogo: logo,
      heroBGimage: heroBG,
      id: uuidv4(),
      caseStudyIntro: (
        <div>
          <h1 className="case-study-intro-title">
            Small Town Cinema in Rural Ireland
            <br></br>
          </h1>
          <div className="case-study-intro-body">
            <p>
              Economic activity in the counties of Cavan and Monaghan in the
              early to mid-twentieth . century was based around agriculture, and
              the counties’ modestly sized towns give a good indication of the
              way in which cinema became an increasing part of life in rural and
              small-town Ireland between the 1910s and the 1950s.
            </p>
            <br></br>
            <p>
              While travelling cinemas would have operated in large parts of the
              counties, the few towns with a population over 1,000 people -
              Cavan town, Monaghan town, Clones, Carrickmacorss, Castleblaney,
              Cootehill and Belturbet - acquired a regular cinema provision,
              with the largest of these towns offering nightly shows. Although
              population was important in determining whether a town would have
              a cinema, such factors as train links and the existence of someone
              willing to take a chance on running a cinema in this locality were
              also crucial.
            </p>
            <br></br>
            <p>
              The stories we can tell about these places rely on the sources we
              can consult on them. Because of the survival and accessibility of
              the Anglo-Celt newspaper based in Cavan town, Cavan will be the
              focus of the first part of this case study. In the second part, we
              move north from Cavan to the neighbouring county of Monaghan where
              we explore the history of cinema-going in Clones and Monaghan town
              from the 1930s onwards. We draw on both newspaper sources and oral
              history interviews to shed light on the role that the small-town
              cinema played in rural Ireland in the 1930s, 40s and 50s.
            </p>
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 1
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Entertainment Crazes Pay for Cavan Town Hall</p>
        </div>
      ),
      date: "1910",
      imageURL: CaseStudy1,
      section: (
        <p>
          The civic pride with which Cavan’s urban council opened its new Town
          Hall in January 1910 did not stop councillors debating how it could be
          paid for without overburdening the ratepayers. An Entertainments’
          Committee recommended the latest popular craze, not cinema - which
          would come later - but roller skating.
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
            The choice of roller skating was the right one for Cavan in early
            1910. This was the permanent entertainment that was packing halls -
            some of them purpose-built for skating - all over the country and
            the world, while cinema’s emergence from Irish cities and travelling
            shows was only just beginning. Cavan would be one of the first towns
            with a population of around 3,000 people to have a permanent cinema,
            but it took another two years to arrive.
          </p>
          <br></br>
          <p>
            In the meantime, the Entertainments’ Committee set about making
            arrangements for skating even before construction of the hall was
            complete. Indeed, the committee was able to insist that an expensive
            maple floor ideal for skating was installed by the contractors.
          </p>
          <br></br>
          <p>
            Comparing the two forms of entertainment tells us a lot about how
            cinema became integrated into small-town Ireland. First of all, what
            councillors saw in both these activities was the ability to fill the
            main space of the Hall with paying patrons whose entry fees would
            help pay the building’s mortgage. The nature of skating or viewing
            films was not in itself of much interest.
          </p>
          <br></br>
          <p>
            But the differences between them had significant consequences for
            those attending. To go skating, you needed to be able bodied and in
            relatively good health. As well as the entry fee, you had to hire or
            buy skates. And once people had got over the novelty of rolling
            around the floor and perhaps attended one or two skating costume
            parties or hockey matches, interest began to wane. This development
            was seen all over the country when, as abruptly as it started in
            1909, skating stopped being fashionable in 1911, and once thriving
            rinks became idle. Some became cinemas, with the name Rink Picture
            Palace memorializing that earlier use.
          </p>
          <br></br>
          <p>
            In Cavan, the Amusements’ Committee responded to a precipitous drop
            in revenue from the rink by replacing skating with such other
            entertainments as dancing and travelling shows in 1912, but none
            provided the regular income that skating had in 1910. By the autumn
            of 1912, the experiment with municipally provided entertainment was
            over, and the council was looking for private leases who could
            provide a steady income on the Hall. The ones that looked most
            likely were cinema exhibitors.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 2 - Dentist Brings Cinema to Cavan
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Travelling Dentist Brings Cinema to Cavan</p>
        </div>
      ),
      date: "1912",
      imageURL: CaseStudy2,
      section: (
        <p>
          In September 1912, Cavan urban council agreed to lease the Town Hall
          to James A. Thompson at a rent of £100 a year to run a cinema. What
          precisely enticed Thompson – a Scottish-born and Dundalk-based dentist
          who ran a weekly clinic in Cavan – into the cinema business is not
          recorded.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Pictures are educative and would be a boon to the town under proper
            supervision.
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Councillor John O’Hanlon, <i>Anglo-Celt</i> 28 September 1912
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Appearing before a special meeting of the council, Thompson
            explained that he wanted “to run a Picture Palace on the best and
            most up-to-date lines, and he was willing to give a rent of £100 per
            annum, provided he got a guarantee against unreasonable
            disturbance.” He undertook to give “up the hall at any time for the
            accommodation of travelling theatrical or opera companies,”
            including local companies. He intended to run Sunday shows, which he
            thought “would be a good thing for country places” but would give
            the hall for Sunday dances organized by the Amusements’ Committee.
            He would install equipment consisting of “a gas engine, electric
            light plant and fireproof operating chamber.”
          </p>
          <br></br>
          <p>
            The debate among the councillors that followed is fascinating for
            the terms in which they effectively decided to introduce cinema to
            Cavan and to do so by allowing a private company to occupy the
            town’s main indoor public space. Councillor Joseph Fegan led
            objections to what he characterized as the handover of the hall to a
            “two-penny gaff,” a permanent type of low-class entertainment, and
            that this would cause both cultural and financial poverty similar to
            but longer lasting than a visiting fairground that took the money of
            townspeople that would otherwise be spent in local businesses.
          </p>
          <br></br>
          <p>
            Fegan’s arguments weren’t all financial. He also claimed cinema
            would “place a temptation to dishonesty in the way of the young
            people” – how exactly he did not clarify but he may have been
            referring to stories of young people emulating the behaviour of
            screen criminals – keep travelling companies out of Cavan and
            “disfigure the building.” The latter was true to some extent. Like
            the rink, the cinema would require alterations to the hall to comply
            with fire regulations that the projection box be located outside the
            auditorium.
          </p>
          <br></br>
          <p>
            Rejecting the description of the proposed cinema as a “two-penny
            gaff,” councillor John O’Hanlon argued that “pictures are educative
            and would be a boon to the town under proper supervision.”
            Supervision by the council was assured by a stipulation that “[n]o
            pictures of an immoral, political, or religious nature to be shown,
            and in this respect the Urban Council reserve to themselves the
            right of censorship.” Indeed, Hanlon argued that it was the
            council’s moral duty to accept Thompson’s offer because another
            cinema was planned for the town on which the council wouldn’t have
            the same leverage.
          </p>
          <br></br>
          <p>
            Hanlon’s arguments - but particularly the ones on lowering the rates
            - won the day, and after a preview for an invited audience on
            Monday, 10 November 1912, Cavan’s Electric Picture Palace opened to
            the public the following evening. Thompson hired Alf Thomas as
            manager; Thomas would go on to run cinemas in Newtownards, Navan and
            Galway. Among the films he chose for the opening night in Cavan were
            the John Bunny comedy <i>Chased by Bloodhounds</i> (US: Vitagraph,
            1912) and the historical drama <i>Dick Turpin’s Ride to York</i>{" "}
            (Britain: Stoll, 1912).
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 3 - Robert Smyth Nearly Goes to Cavan’s Electric Picture Palace
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Robert Smyth Nearly Goes to Cavan’s Electric Picture Palace</p>
        </div>
      ),
      date: "1913",
      imageURL: CaseStudy3,
      section: (
        <p>
          Robert Smyth’s experiences at Cavan’s Electric Picture Palace on 9
          December 1913 offer a rare audience perspective on one of Ireland’s
          first small-town cinemas. A labourer living on the town’s Barrack
          Hill, Smyth set out to bring five children to the pictures at the Town
          Hall but instead ended up in court.
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
            The account of the court case gives a wealth of detail about the
            cinema and how it fitted into the social life of the town. Whose
            children Smyth was accompanying is not clear: the 1911 census tells
            us that he was unmarried and living with his parents. But he wasn’t
            planning on watching the films with them, in any case; he had some
            business up town. He was anxious to get the children into the second
            show at 9 o’clock, but he had arrived before the 7 o’clock show had
            finished. When he went into the hall to buy tickets from the picture
            company’s ticket taker Eddie Mallen, the hall’s caretaker Patrick
            Scollan confronted him.
          </p>
          <br></br>
          <p>
            What ensued was disputed in court, as Smyth accused Scollan of
            assault and Scollan brought counter-charges against Smyth for
            assaulting him, but neither of them seems to have struck the other.
            More interesting than their threats and fist shaking is the detail
            that Scollan justified ejecting Smyth by insisting that he was
            causing an obstruction to the women attending a tango class in one
            of the hall’s smaller rooms. This fascinating detail shows a town
            where cinema was part of its social activities but did not
            completely dominate them, where the hall was a hub for a range of
            activities and where residents were participating in another popular
            craze - tango dancing - that was consuming the world at this time.
          </p>
          <br></br>
          <p>
            Other details of the court case relate to the audience and cinema
            staff. To help him remove Smyth, Scollan fetched Constable Nelson,
            who was in the hall attending the 7 o’clock film show, but Nelson
            sized up the situation and did not intervene. That the show was
            respectable enough for a local policeman is significant, and his
            presence no doubt also ensured its orderly conduct. Scollan then
            sought help from Willie McCourt, the projectionist, and his
            assistant Michael J. Gordon. But neither of them saw any reason to
            get involved, with Gordon concluding what appears to have been the
            consensus of the witnesses, that “one was as bad as the other.”
          </p>
          <br></br>
          <p>
            The magistrates dismissed both cases, but the newspapers failed to
            record whether the children got to the pictures. A surviving ad
            shows that at least Constable Nelson got to see <i>The Sneak</i>{" "}
            (US: Kalem, 1913), starring Alice Joyce, Tom Moore and Jack
            Pickford, as well as five other films mostly from well-known US
            companies of the 1910s and featuring such stars as Tom Mix and Mary
            Fuller.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 4 - Watching the Furniture Not the Screen
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Watching the Furniture Not the Screen</p>
        </div>
      ),
      date: "1916",
      imageURL: CaseStudy4,
      section: (
        <p>
          Cavan Town Hall’s irascible caretaker Patrick Scollan was charged with
          looking after the building’s furniture and fittings, and his job and,
          it seems, his personality, all-too-frequently brought him into
          conflict with such cinemagoers as Robert Smyth, with the staff of the
          cinema company, and with members of the council to whom he was
          expected to report.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            It is impossible to prevent young hooligans throwing [the chairs]
            about and breaking them.
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Councillor Conaty, Anglo-Celt 8 April 1916</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Despite his cantankerousness, his tenure as caretaker lasted from
            the opening of the hall in 1910 to October 1916, when his repeated
            run-ins with picture company staff eventually led to his dismissal
            by the council. Some of his complaints to the council about damage
            to the building’s infrastructure provide vivid evidence of what it
            was actually like to attend the Cavan Picture Palace and similar
            early cinemas located in town halls.
          </p>
          <br></br>
          <p>
            His focus on the hall’s furniture allows us to see that patrons sat
            on one of the 400 ordinary wooden Windsor chairs, which had been
            manufactured in Ireland at a cost of 2s 8d each and supplied by
            Cavan County Stores, a business owned by one of the councillors.
            Scollan complained to the council about the youngsters who sat on
            the back of these chairs and occasionally broke them. The council
            agreed to have the chairs “planked” together in sections of four or
            five. This would, in one councillor's phrase, “prevent young
            hooligans throwing them about and breaking them.”
          </p>
          <br></br>
          <p>
            Even more intriguing are Scollan’s reports about the damage done to
            the famed maple floor by the continual erection and removal of an
            ornamental barrier that was held in place by “8-inch or 10-inch
            nails driven through the floor” during film performances but that
            was removed when the hall was being used for a dance or similar
            occasion on which a clear floor was needed.
          </p>
          <br></br>
          <p>
            But why was this barrier put up if it caused such damage? In theory
            at least, cinema was a new kind of entertainment that provided the
            possibility for equality between members of the audience because it
            was cheap and first embraced by ordinary people rather than social
            elites. In practice, however, cinemas sought to attract the
            higher-paying patrons of the social elites by offering some kind of
            enhanced experience. Although the auditorium was potentially a
            democratic space in which a clear view of the screen was the main
            determinant of a good experience, seating could be enhanced and
            segregated for those prepared to pay a premium to sit with those of
            their own class.
          </p>
          <br></br>
          <p>
            This is what happened in Cavan. The Picture Palace charged adults 3d
            or 6d. Some people paid twice as much as others to maintain their
            social position while watching the screen. Class divisions were
            created in the hall by the barrier, which was decorative in design
            but economic in nature.
          </p>
          <br></br>
          <p>
            When Scollan raised the issue of the barrier an illuminating
            discussion took place among councillors. To laughter from his
            colleagues, one councillor observed that “I would not interfere with
            the barrier, as it is ornamental there, and provides for a little
            distinction between the classes – a thing I am utterly opposed to,
            but I know how profitable it is.” For Cavan councillors, cinema was
            not primarily a cultural form or a social leveller but an economic
            solution to the problem of the rates increase caused by the building
            of the town hall.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 5 - All-Talking, All-Laughing
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>All-Talking, All-Laughing, All-Singing Pictures Come to Cavan</p>
        </div>
      ),
      date: "1930",
      imageURL: CaseStudy5,
      section: (
        <p>
          Like cinema-goers all over Ireland and the world, Cavan people were
          informed about the advent of sound films at the end of the 1920s and
          had the first opportunities of seeing - and hearing - them locally in
          the summer of 1930, at the Town Hall which remained the town’s only
          cinema.
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
            If they were especially curious, Cavan people could have followed
            the promptings of ads in the <i>Anglo-Celt</i> in August 1930 to
            travel to see and hear Irish tenor John McCormack sing on screen in
            the Irish-shot <i>Song o’ My Heart</i> at Dublin’s Metropole Cinema
            during the city’s ever-popular Horse Show (see the film{" "}
            <a
              href="https://youtu.be/lMyrvNjwV4Y"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            ). They would not have had to travel that far to experience the
            talkies; as early as June 1930, Joseph Carron was travelling County
            Cavan, bringing his Talking Pictures to such towns as
            Ballyjamesduff, Bailiebrough and Belturbet.
          </p>
          <br></br>
          <p>
            Carron seems not to have exhibited in Cavan town, no doubt because
            he would have wanted to use the Town Hall, which was already
            occupied by another cinema company. By 1930, Joseph Stanley, who we
            have met as proprietor of Drogheda’s Boyne Cinema, had been running
            the cinema at Cavan’s town hall for almost all of the 1920s, having
            taken over the lease in the autumn of 1921. The first talkie that
            Stanley’s manager P. Verdon advertised in the <i>Anglo-Celt</i> was
            the screen adaptation of Cole Porter’s Broadway musical <i>Paris</i>{" "}
            (US: First National, 1929), starring Irène Bordoni and Jack
            Buchanan. This was, as the ad proclaimed, an “All-talking,
            All-laughing, All-singing Picture,” and its spectacle was further
            enhanced by the inclusion of two scenes in colour. Despite these
            attractions, it wasn’t meant to last long; it was booked for just
            two days - 24-25 August 1930 - before being replaced for the next
            two-day run by another musical romance <i>Lucky in Love</i> (US:
            Pathé, 1929), with its “genuine Irish atmosphere of Song, Wit and
            Love.”
          </p>
          <br></br>
          <p>
            Stanley held onto the lease until 1935, when his hitherto successful
            efforts to prevent the council issuing a licence to a rival
            purpose-built cinema in Cavan faltered, in part because of the poor
            quality of sound at the Town Hall. While there were suggestions that
            Stanley had installed an inferior amplification system, the problem
            may simply have been the one faced by many other halls that
            converted to talkies: while their acoustics were perfect for live
            musical accompaniment, they were unsuited for amplified recorded
            sound. Stanley cited Cavan Town Hall’s vaulted ceiling as the
            problem that he was prepared to tackle by erecting a false ceiling.
            However, the council issued a licence to local car dealer A.W.
            Gordon to construct a purpose-built cinema that would open at the
            end of 1935 as the Magnet. Stanley departed Cavan, but others would
            continue to provide cinema at the Town Hall in the decades that
            followed.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Monaghan ///////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      id: uuidv4(),
      caseStudyIntro: (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="case-study-intro-title">
            Monaghan Cinema
            <br></br>
          </h1>
          <div className="case-study-intro-body">
            <p>
              In the 1930s and 40s, the opening of new cinemas across the county
              added to the vibrancy of life in places like Clones and Monaghan
              town. The words of Lady Leslie at the opening of the Magnet in
              Monaghan in 1938 capture how the addition of a cinema offered a
              symbol of rural Ireland’s progress: “Why go to Belfast or Dublin
              when we can get all we require here? Good shopping, the best
              groceries, the best bakeries, fine Belbroid Lingerie, the latest
              fashions which we can study at leisure, up-to-date garages with
              skilful mechanics.
            </p>
            <br></br>
            <p>
              The most modern and luxurious infirmary if we are sick or sad and
              now the most modern and comfortable Cinema if we are well and
              glad. Monaghan grows and develops with rapidity and it is
              difficult to keep pace with it and there is no knowing what great
              importance it may achieve!” (Lady Leslie,{" "}
              <i>The Northern Standard</i>, 10 October 1938).
            </p>
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 6 - Clones: From Parish Hall to Cinema
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Clones: From Parish Hall to Cinema</p>
        </div>
      ),
      date: "1933",
      imageURL: CaseStudy6,
      section: (
        <p>
          In October 1933 the <i>Fermanagh Herald</i> reported that Clones Urban
          Council had granted a cinema licence for St Joseph’s Temperance Hall.
          Located on Church Hill, St Joseph’s Hall was built in 1912 and stands
          just a short distance from the Sacred Heart Catholic Church in one
          direction, and the centre of Clones town in the other.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">Unmarried couples must sit apart</h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Kinematograph Weekly, 13 March 1945</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            Throughout the 1910s and 1920s, St Joseph’s hall played host to a
            wide range of social, political and cultural events including
            regular charity dances, Gaelic League ceilidhs, whist drives and
            amateur dramatics. In 1939 the parish hall was also hired by
            Monaghan County Board of Health to run an immunisation clinic
            vaccinating children against diphtheria. The decision to apply for a
            licence to screen films commercially in St Joseph’s enhanced the
            multifunctional nature of this community space even further.
          </p>
          <br></br>
          <p>
            Unlike other dedicated commercial cinemas in the surrounding towns
            (such as the Magnet in Monaghan town and The Cinema in
            Castleblayney), the programming information available for St
            Joseph’s in the press archives is sporadic. Nevertheless, reports on
            select screenings provide an insight into the influence that the
            church and religious representatives had on the running of the
            hall’s film offering. In November 1934 a reporter for the{" "}
            <i>Anglo-Celt</i>
            described a screening of{" "}
            <i>The Little Flower: The Miraculous Life of St Teresa</i> (France:
            Duvivier, 1929) as a “good and usefully spent two hours”. Other
            religious themed programmes held in aid of the Missions included
            screenings of{" "}
            <a
              href="https://youtu.be/fC7QBAlpa6U"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>Don Bosco</i>
            </a>{" "}
            (Italy: Alessandrini, 1935) where the audience was “crowded to the
            doors” of St Joseph’s Hall (<i>Anglo-Celt</i>, 26 March 1938).
          </p>
          <br></br>
          <p>
            St Joseph’s close ties with local religious orders also appears to
            have significantly influenced how the hall was run as a cinema. In
            November 1943 <i>Kinematograph Weekly</i> reported that the
            committee responsible for the management of the hall had issued a
            “ban on courting couples”. With the exception of married couples,
            this policy enforced a segregation of the sexes with men and boys
            sitting on one side of the hall, while women and girls sat on the
            opposite side. According to the report, men were also prohibited
            from sitting with their sisters. The feasibility of imposing a
            policy of this nature was attributed to the relatively small
            population of the town - the 1936 census recorded Clones as having a
            population of 2,235 - which reportedly meant that the committee of
            St Joseph’s knew their audience well enough to be familiar with the
            marital status of individual cinema-goers. Known as the
            “no-fraternisation” rule, the policy remained a feature of the
            cinema-going experience at St Joseph’s up until 1946.
          </p>
          <br></br>
          <p>
            It is not clear why the committee of St Joseph’s Hall felt compelled
            to adopt such a paternalistic approach towards their audience, but,
            as we see in the next section, moral panic often underpinned
            attitudes towards cinema among certain quarters of the ruling
            classes at this time.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 7 - Matinee Programmes and Debates on Cinema’s Influence on Children
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Debates on Cinema’s Influence on Children</p>
        </div>
      ),
      date: "1943",
      imageURL: CaseStudy7,
      section: (
        <p>
          In March 1943 Dundalk Urban District Council put forward a resolution
          calling for stricter supervision of children in cinemas and tighter
          censorship of the types of films being shown to minors. In the months
          before this proposal was submitted, the Dundalk District Judge,
          Justice Goff launched a scathing attack on cinema and its corrupting
          influence.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Not one out of a hundred pictures being produced at present coming
            from purely pagan countries is fit for children
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>
            Dundalk District Justice Goff, Dundalk Democrat, 16 January 1943
          </p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            As we’ve seen in the Drogheda case study, cinema was regularly
            blamed for increasing rates of juvenile crime. Indeed Justice Goff’s
            comments came in the context of a case against 16 year old Patrick
            Lee who had been charged with larceny. Lee was found guilty of
            stealing £17 7s 6d from the home of a Mr John Walker who had
            entrusted the boy with carrying out messages for his family. When it
            came to commenting on the factors influencing this type of juvenile
            crime, Justice Goff was emphatic that the “pictures are at the
            beginning and end of nearly every case” he had investigated for
            years. In Goff’s opinion, the vast majority of films available to
            Irish audiences were “wretched filth”, which were “not fit for
            children”, while many were also “not fit for their parents”. His
            advice to parents was to “prevent their children from going to these
            pictures wholesale”, but in order to fully protect children from the
            “pagan ideal” proffered by cinema, Goff recommended that the problem
            needed to be “cut out root and branch” by only allowing children to
            attend “special films at special times” (<i>Dundalk Democrat</i>, 16
            January 1943).
          </p>
          <br></br>
          <p>
            In some jurisdictions, the Dundalk resolution on cinema was
            challenged on the basis that all films coming into the country were
            already censored. When the matter was discussed at a meeting of
            Limerick Corporation, it was also noted that cinema was “not
            exclusively the cause of the spread of juvenile crime” and “bands of
            boys” were to be seen “roaming the streets at all hours of the night
            and when the cinemas are closed” (<i>Limerick Leader</i>, 14 April
            1943). Ultimately however, councils across the country adopted the
            resolution without much dispute.
          </p>
          <br></br>
          <p>
            In Clones, the passing of the resolution was reported in the Anglo
            Celt on 6 March 1943. This move towards stricter regulation of
            children’s attendance of cinemas would have come as little surprise
            to the audiences of St Joseph’s Hall where children had been
            previously banned from attending matinees and evening performances.
            According to <i>Kinematograph Weekly</i>, the ban, which was
            introduced in 1939, had been imposed by “the head of one of the
            religious denominations” (16 February 1939). It is unclear whether
            this ban was upheld consistently at St Joseph’s throughout the
            1940s, but the opening of Clones’ first purpose built cinema in the
            late 1940s provided young cinema-goers with a new space to frequent.
          </p>
          <br></br>
          <p>
            When the Luxor Cinema opened in October 1946 the local audience
            delighted in the novelty of having a modern cinema in the centre of
            town. Clones native Hugo recalls the Luxor as “state of the art” for
            its time and has fond memories of attending weekly matinees with his
            brothers and friends throughout the 1950s. With its red velvet
            seats, soft lighting and sweet shop, the Luxor offered an altogether
            more sophisticated cinema-going experience when compared with St
            Joseph’s Hall. However, when it came to the management of the cinema
            space, St Joseph’s Hall appears to have set a standard for the Luxor
            to follow. Hugo recalls how this standard of strict discipline was
            upheld by the cinema’s head usherette:
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/e5tfJLS8E4s" />
          </div>
          <br></br>
          <p>
            Jimmy was another regular cinema-goer at the Luxor who vividly
            recalls the excitement of the weekly matinee. The segregation of
            boys and girls continued to be a feature of the cinema-going
            experience for children in Clones in the 1950s, perhaps pointing to
            the legacy of the Dundalk resolution and no-fraternisation policy of
            St Joseph’s. Interestingly however, in Jimmy’s childhood memory the
            segregated seating is not recalled as a policy imposed on the young
            audience, rather the division of the sexes was seen as a test of a
            young boy’s masculinity: ‘ “if you went over to the girls’ side you
            were definitely a sissy”: [
            <a
              href="https://www.youtube.com/watch?v=R18xZSq3cfY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Jimmy’s YouTube clip
            </a>
            ]
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 8 - Rolling With The Punches
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>Rolling With The Punches: Live Boxing At The Magnet Cinema</p>
        </div>
      ),
      date: "1951",
      imageURL: CaseStudy8,
      section: (
        <p>
          The Magnet Cinema on Glaslough Street in Monaghan town opened in
          October 1938. A purpose-built cinema, the Magnet is representative of
          the boom in cinema construction that spread across the towns of rural
          Ireland throughout the 1930s.
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
            According to the souvenir programme printed on the occasion of the
            Magnet’s official opening, the building project was completed in an
            impressive four and a half months with the collaboration of numerous
            local suppliers. The result was a cinema that the owners proudly
            claimed to be “equal to any cinema in Eire” with a programming
            policy that promised audiences “‘nothing but the best so long as we
            are privileged to entertain you”. Like many urban and rural cinemas
            around the country, the Magnet offered a diverse programme made up
            of multiple forms of entertainment. In addition to its standard
            programme of feature films, shorts and newsreels, the Magnet also
            hosted variety shows, concerts and live radio broadcasts. In the
            late 1940s, the Magnet also began to host boxing tournaments.
          </p>
          <br></br>
          <p>
            A particularly noteworthy example of the Magnet’s history as a
            boxing venue is the international tournament between Ireland and
            Italy, which took place on 5 November 1951. An advert for the event
            on the entertainment listings page of <i>The Argus</i> billed it as
            “the best tournament ever staged in Monaghan” and encouraged patrons
            to “book now” (3 November 1951). Those with a ticket were promised a
            packed programme of fights with a number of high-profile
            competitors. Irish fans in particular would have been familiar with
            the achievements of lightweight fighter Maxie McCullagh who had
            previously represented Ireland at the 1948 Summer Olympics and was
            the 1949 European Lightweight Champion. On the Italian side, Bruno
            Visintin and Gianni di Segni travelled to Monaghan as the 1951
            European Champions in the Lightweight and Heavyweight categories
            respectively.
          </p>
          <br></br>
          <p>
            The audience in attendance on the evening of the tournament may have
            been a different crowd from the usual cinema-goers, but inside the
            Magnet the atmosphere was nevertheless one of “colour and pageantry”
            according to a report in <i>The Argus</i> (10 November 1951). In the
            build up to the start of the tournament, the fighters from both
            teams paraded in front of the audience while carrying their national
            flags, and as the Irish and Italian national anthems were played,
            the “crowd stood to attention”.
          </p>
          <br></br>
          <p>
            Maxie McCullagh went into the ring against the up and coming fighter
            Germanno Cavalieri. The Italian newcomer proved to be too much for
            the Irish boxing veteran and according to a report on the fight, it
            was McCullagh’s “experience and doggedness [that] kept him on his
            feet” for the three rounds. Ultimately, Cavalieri’s
            “machine-gun-like left” saw him claim victory over the Irishman. The
            Heavyweight contest saw Gianni Di Segni square up against Garda
            Eugene Walshe who held the 1951 title for European Police
            Heavyweight Champion. Once again, the Italian proved to be the
            stronger fighter with a speed and precision that left Walshe on the
            ropes one too many times. By the end of the third round, “it was Di
            Segni’s fight and there was no doubt about it” (<i>The Argus</i>, 10
            November 1951).
          </p>
          <br></br>
          <p>
            Di Segni went on to represent Italy in the 1952 Olympic Games where
            he reached the quarter final after which his boxing career petered
            out. In the late 1960s and 70s, he turned his hand to acting and had
            minor roles in a number of films including the <i>Day of Anger</i>{" "}
            (Italy: Valerii, 1967). Di Segni’s bit part in this Lee Van Cleef
            Spaghetti Western would see him make a return to a small-town Irish
            cinema when the film featured on a double bill at the Magnet in
            Cavan town in March 1971. In the ring at the Magnet in Monaghan, Di
            Segni may have been the “weaving, elusive Italian” (
            <i>Monaghan Argus</i>, 10 November 1951, but when it came to his
            on-screen appearance in the Magnet in Cavan twenty years later, it
            was a case of blink and you missed him.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 9 - This Film is Brought to You by Great Northern Rail
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>This Film is Brought to You by Great Northern Rail</p>
        </div>
      ),
      date: "1956",
      imageURL: CaseStudy9,
      section: (
        <p>
          By the mid-1950s, the Luxor cinema in Clones was running a dynamic
          weekly programme consisting of up to five different feature films over
          the course of six evenings. Unlike in urban centres where cinema-goers
          potentially had multiple cinema programmes to choose from on a given
          night, in rural areas, the small-town cinema owner typically had a
          monopoly on audiences.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Everybody is leaving the area and we will soon have nobody left
            except the very old and the very young. There have been reductions
            on the railway
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>Captain Edward Cassidy, The Argus, 23 June 1956</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            And at a time when the cinema was often the main social outlet for
            rural cinema-goers, this was seemingly an advantage for the
            small-town exhibitor. Nevertheless, the Luxor’s practice of showing
            a different film at least every second night is indicative of how
            they actively sought to engage their (somewhat) captive audience.
          </p>
          <br></br>
          <p>
            When considering this aspect of the Luxor’s history, it is also
            important to think more broadly about the cinema’s geographic
            location in a town that, at that time, was extremely well connected
            by rail. The extension of the Great Northern Railway to Clones in
            1858 played a significant role in the evolution of the town’s
            economic and social history. The station at Clones was a major
            junction point within the rail network, allowing passengers to
            connect with trains travelling along the East-West line (between
            Enniskillen and Dundalk) and the North-South line (between Belfast
            and Cavan) with numerous intermediary connection points along the
            way.
          </p>
          <br></br>
          <p>
            This interconnectedness was significant to the Luxor’s business for
            two main reasons: firstly, it ensured that films could be easily
            transported from the cinema’s distributors in Dublin. Clones’s train
            links and proximity to the border with Northern Ireland also
            provided the opportunity to draw in additional cinema-goers from
            towns like Lisnaskea and Enniskillen in County Fermanagh.
            Significantly, cinemas in Northern Ireland were not permitted to
            open on Sundays under the Sunday Entertainments Act of 1932 and as
            Luxor cinema-goer Hugo recalls, people would travel across the
            border to attend cinemas in Monaghan. For those eager cinema-goers
            in search of a Sunday show, the trainline facilitated a literal
            escape to Clones where the Luxor was ready to transport audiences to
            the world of Hollywood and beyond.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/ENLt0O1xkk4" />
          </div>
          <br></br>
          <p>
            The Luxor’s connection with the Great Northern Railway is also
            reflected in the fact that the cinema was used on multiple occasions
            to host G.N.R meetings and talks. With a capacity of 520, the Luxor
            was well suited to accommodate a large meeting of the G.N.R
            Permanent Way Institution in October 1956. The meeting featured an
            illustrated lecture from a British railway engineer by the name of
            L.G. Rock who, according to a report in <i>The Argus</i>, availed of
            the cinema’s screen to show slides during his presentation (27
            October 1956).
          </p>
          <br></br>
          <p>
            The timing of this meeting in 1956 is significant as the G.N.R’s
            service throughout Ulster was already under threat due to
            accumulating debt and political differences about how the
            cross-border network should be managed. As the quotation from
            Captain Edward Cassidy at the start of this section suggests, the
            potential disappearance of the railway from Clones and the
            surrounding areas was tied up with concerns about emigration and the
            erosion of the town’s economic and social life. Unfortunately just
            one year later, on 30 September 1957, the cross-border train service
            from Clones to Enniskillen ceased operation. The Clones to Dundalk
            section of the line closed shortly after on 10 October 1957. In the
            absence of a rail service that easily connected the people of Clones
            to realities beyond the town, the Luxor arguably now had an even
            more important role to play in fulfilling the demand for a source of
            escapism.
          </p>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Case Study 10 - The Arrival of Cinemascope at the Luxor
    /////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    {
      title: (
        <div>
          <p>The Arrival of Cinemascope at the Luxor</p>
        </div>
      ),
      date: "1958",
      imageURL: CaseStudy10,
      section: (
        <p>
          Twelve years after the Luxor first opened, renovations were carried
          out to upgrade the town’s only cinema. The upgrade would enhance the
          cinema-going experience both in terms of comfort and technical
          innovation.
        </p>
      ),
      id: uuidv4(),
      quote: (
        <div>
          <h1 className="quotation-marks">“</h1>
          <h1 className="quotation">
            Work is in progress presently on the installation of a new screen to
            facilitate the showing of CinemaScope films at the Luxor Cinema,
            Clones
          </h1>
        </div>
      ),
      quoteDescription: (
        <div>
          <p>The Argus, 23 August 1958</p>
        </div>
      ),
      readMore: (
        <div className="read-more-body">
          <br></br>
          <p>
            As the Luxor headed into its 1958 autumn/winter programme, the
            installation of central heating became an added selling point for
            the cinema. Indeed, from October 1958 onwards it was highlighted on
            the header of their weekly programme listings in The Argus newspaper
            (as can be seen in the newspaper clipping above). While the town of
            Clones had been connected to the national electricity grid (powered
            by the Shannon Scheme) since 1931, the electrification of homes in
            the surrounding villages and parishes was still in progress in the
            late 1950s. The nearby villages of Smithboro and Newbliss were not
            fully electrified until June 1960 and February 1961 respectively (
            <a
              href="https://esbarchives.ie/2016/10/13/monaghan-rural-areas-launched-online/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ESB Archives
            </a>
            ). Jimmy, a regular cinema-goer at the Luxor, recalls the sense of
            wonder that he experienced as a boy when electricity was rolled out
            to his family’s home. For cinema-goers like Jimmy, the installation
            of central heating at the Luxor offered an additional comfort, but
            it was the advent of CinemaScope that really captured the
            imagination.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/nOQSLkSpfFE" />
          </div>
          <br></br>
          <p>
            A report in <i>The Argus</i> on 27 September 1958 announced the
            arrival of CinemaScope in Clones. A new thirty-foot screen had been
            installed to facilitate the wide-screen format. To enhance the
            visual impact, alterations were also made to the curtains around the
            proscenium to accommodate the wider screen. The first CinemaScope
            film to be shown at the Luxor was the musical <i>Oklahoma</i> (US:
            Rodgers and Hammerstein, 1955). Hugo, a thirteen year old at the
            time, recalls the buildup of excitement running through the town
            ahead of the first screening. According to the film listings
            published in <i>The Argus</i> on 27 September 1958, <i>Oklahoma</i>{" "}
            ran for just two nights, but Hugo’s childhood memory of people
            “queuing on the streets for weeks” is perhaps an indication of the
            sense of anticipation that surrounded those first CinemaScope
            screenings at the Luxor:
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/HQElxGS07pI" />
          </div>
          <br></br>
          <p>
            The idea of the town coming together to experience this new
            technical innovation is also reflected in Jimmy’s memories of
            CinemaScope. During this period, he recalls family outings to the
            Luxor with his parents to see Mario Lanza films like The Student
            Prince (USA: Thorpe, 1954).
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/fBrEaLOrBBo" />
          </div>
          <br></br>
          <p>
            Having a programme that would appeal across the generations was
            important for the small-town cinema owner, but this was particularly
            the case in Clones in the late 1950s when television was becoming
            more commonplace in the family home. The town’s proximity to the
            border made it possible to pick up the BBC at a time when RTÉ,
            Ireland’s national broadcaster, had not yet launched. Hugo explains
            that his family were very early adopters of the new medium, getting
            their first television set in 1956. For small-town cinemas like the
            Luxor, the arrival of television gradually caused audience numbers
            to decline to a degree that, by the late 1960s and 1970s, many of
            Ireland’s small-town cinemas were forced to close their doors.
          </p>
          <br />
          <div className="video-container-2">
            <ResponsiveEmbed src="https://www.youtube.com/embed/zFGdxCoDdUM" />
          </div>
        </div>
      ),
    },

    /////////////////////////////////////////////////////////////////////////////
    //ADD MORE CASE STUDIES HERE
  ];
}

export default caseStudy2_array;
