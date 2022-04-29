import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps } from "next";
import { PageProps } from "../components/Layout";

export type Props = PageProps;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      title: "CV",
    },
  };
};

export default () => {
  return (
    <>
      <h1>Sergey Shishkin</h1>
      <p>
        🌐 Remotely from Europe | ✉️ 
        <a href="mailto:sergey@shishkin.org">sergey@shishkin.org</a> | 🔗 
        <a href="https://shishkin.org">shishkin.org</a> |
        <FontAwesomeIcon icon={faLinkedin} /> 
        <a href="https://linkedin.com/in/serega">linkedin.com/in/serega</a> |
        <FontAwesomeIcon icon={faGithub} />
        <a href="https://github.com/shishkin">github.com/shishkin</a>
      </p>

      <h2>About</h2>
      <p>
        <strong>Software Engineer, Consultant and Coach</strong> with 20 years
        of experience. As continuous learner, knowledge multiplayer and software
        gardener, I help teams increase productivity, establish continuous
        learning culture and steadily deliver customer value. I have both deep
        and broad expertise in software development practices. I'm an active
        member of various professional software development communities and
        occasional conference speaker on topics of interest and expertise. My
        interests include functional programming languages, systems thinking,
        organizational dynamics and coaching.
      </p>

      <h2>Skills</h2>
      <ul>
        <li>
          <strong>Lean</strong> and <strong>agile</strong> software development
          across all stages of the lifecycle including product and{" "}
          <strong>backlog planning</strong>, high-level
          <strong>architecture</strong> and design,{" "}
          <strong>test-driven development</strong> and pair programming,
          left-shifting of quality through{" "}
          <strong>continuous integration</strong>
          and <strong>continuous delivery</strong>. <strong>DevOps</strong> and
          automation of all repetitive tasks and quality gates.
        </li>
        <li>
          Individual and team <strong>coaching</strong> through a blameless,
          solution-focused approach. Mentoring and training in software
          development-related topics.
        </li>
        <li>
          Functional, reactive and object-oriented programming. Design patterns,
          clean code, test-driven development, refactoring, working with legacy
          code.
        </li>
        <li>
          Solid experience across <strong>JavaScript</strong>,{" "}
          <strong>JVM</strong> and <strong>.NET</strong> stacks.{" "}
          <strong>Web</strong>, <strong>backend</strong>,{" "}
          <strong>microservices</strong> and data pipeline development. Project
          experience with <strong>Scala</strong>, <strong>Java</strong>,{" "}
          <strong>Clojure</strong>, <strong>F#</strong>, <strong>C#</strong>,{" "}
          <strong>TypeScript</strong>, <strong>JavaScript</strong>,{" "}
          <strong>Elm</strong>, <strong>HTML/CSS</strong>,{" "}
          <strong>SQL/NoSQL</strong> and many more. <strong>Cloud</strong> and{" "}
          <strong>PaaS</strong> environments.
        </li>
      </ul>

      <h2>Work Experience</h2>
      <ul className="timeline">
        <li>
          <time>08/2021–present</time>
          <strong>Software Engineer, Consultant and Coach</strong>
          at shishkin.org
          <p>
            Offering all of my skills and experience via consulting, training,
            workshops and project contracting.
          </p>
        </li>

        <li>
          <time>07/2017–08/2021</time>
          <strong>Technical Lead, Solution Architect</strong> at Standard
          Chartered Bank (Singapore)
          <p>
            Led an agile product development team. Introduced{" "}
            <strong>technical excellence</strong> practices of{" "}
            <strong>test automation</strong>, <strong>CI/CD</strong>,{" "}
            <strong>peer code reviews</strong>, regular architecture and design
            sessions. Hired and developed strong engineers. Ran initiative to
            containerize the application and replatform from enterprise
            application server on internal on-prem{" "}
            <strong>Kubernetes PaaS</strong>.
          </p>
          <p>
            Promoted <strong>agile</strong> ways of working and product
            management within the technology department. Managed business
            stakeholders, infrastructure teams and internal process control
            owners. Helped to devise the business unit’s technical strategy and
            enterprise architecture.
          </p>
          <p>
            Led efforts to design and roll out a bespoke{" "}
            <strong>talent development</strong> program for emerging{" "}
            <strong>technical leaders</strong>.
          </p>
        </li>

        <li>
          <time>10/2015–04/2017</time>
          <strong>Data Scientist</strong> at Teralytics (Singapore)
          <p>
            Reengineered a big data analytics pipeline for performance using{" "}
            <strong>Apache Spark</strong>, <strong>Mesos</strong>,{" "}
            <strong>Parquet</strong>, <strong>HDFS</strong>. Improved{" "}
            <strong>CI</strong> infrastructure and
            <strong>development workflow</strong>. Driven{" "}
            <strong>technical excellence</strong> in the engineering team,
            internal and external open-source, and{" "}
            <strong>community engagements</strong>. Raised team’s competence
            with <strong>Scala</strong> and{" "}
            <strong>functional programming</strong>.
          </p>
        </li>

        <li>
          <time>05/2014–08/2015</time>
          <strong>Agile Coach</strong> at JPMorgan Chase Bank (Singapore)
          <p>
            <strong>Coached</strong> teams in <strong>lean</strong> and{" "}
            <strong>agile</strong> software development and{" "}
            <strong>architecture</strong>. Coached program leaders in lean and
            systems thinking. Led by example while working in the product
            development teams. Taught developers{" "}
            <strong>test-driven development</strong> and{" "}
            <strong>clean code</strong> practices through{" "}
            <strong>pair-programming</strong> and internal{" "}
            <strong>communities of practice</strong>. Implemented parts of the{" "}
            <strong>continuous delivery</strong> pipeline using{" "}
            <strong>Jenkins</strong>. Taught functional and reactive programming
            with <strong>Scala</strong> and <strong>Akka</strong>.
          </p>
        </li>

        <li>
          <time>01/2012–04/2014</time>
          <strong>Independent Software Consultant and Coach</strong>
          (Düsseldorf, Germany)
          <p>
            Coached a client’s software development teams and stakeholders in{" "}
            <strong>Kanban</strong> and <strong>Scrum</strong>. Helped implement
            the <strong>continuous delivery</strong> pipeline using{" "}
            <strong>TeamCity</strong> and <strong>F#</strong> scripting tools.
            Coached developers in <strong>OO design principles</strong>,{" "}
            <strong>TDD</strong>, <strong>refactoring</strong> and working with{" "}
            <strong>legacy code</strong>.
          </p>
          <p>
            Designed and developed hypermedia <strong>web API</strong>
            and a high throughput event processing system for a telecom provider
            using <strong>Scala</strong>, <strong>Akka</strong>,{" "}
            <strong>Hadoop</strong>, <strong>MongoDB</strong> and{" "}
            <strong>Kafka</strong>. Introduced <strong>Kanban</strong> as a
            method of an evolutionary change that helped increase delivery
            throughput and release predictability.
          </p>
        </li>

        <li>
          <time>04/2010–12/2011</time>
          <strong>Senior Consultant</strong> at MT AG (Ratingen, Germany)
          <p>
            Developed backend, client-server and portal software systems using{" "}
            <strong>.NET</strong> technology for various clients. Authored and
            conducted <strong>trainings</strong> on <strong>lean</strong> and{" "}
            <strong>agile</strong> software development.
          </p>
        </li>

        <li>
          <time>07/2007–03/2010</time> <strong>Software Architect</strong> at
          InterComponentWare AG (Cologne, Germany)
          <p>
            Developed a modularized rich-client and server backend application
            with <strong>.NET</strong> technologies in over 500k LoC in 150
            components with a team of 20 developers. Analyzed and optimized{" "}
            <strong>performance</strong>. Mentored team members and conducted{" "}
            <strong>code reviews</strong>.
          </p>
          <p>
            Introduced <strong>Scrum</strong> in a cross-functional team of 35
            people including product managers, testers, developers and technical
            writers. Trained and conducted <strong>workshops</strong>{" "}
            individually for each group of stakeholders and team members to
            ensure the lasting effect of agile transition. Introduced{" "}
            <strong>automated acceptance testing</strong> and{" "}
            <strong>executable specification</strong> practice with{" "}
            <strong>FitNesse</strong>.
          </p>
        </li>

        <li>
          <time>03/2006–06/2007</time> <strong>Software Engineer</strong> at
          newtelligence AG (Korschenbroich, Germany)
          <p>
            Developed web and backend software systems with{" "}
            <strong>.NET</strong>, <strong>SQL Server</strong>, asynchronous
            messaging, claim-based authentication and{" "}
            <strong>JavaScript</strong>.
          </p>
          <p>
            Authored and delivered developer trainings on .NET and{" "}
            <strong>service-oriented architecture</strong>.
          </p>
        </li>

        <li>
          <time>08/2001–12/2005</time> <strong>Software Developer</strong> at
          Electronic Documents (Novosibirsk, Russia)
          <p>
            Developed line of business intranet and internet applications using{" "}
            <strong>ASP.NET</strong> technologies and{" "}
            <strong>SQL Server</strong> databases. Built dynamic{" "}
            <strong>HTML</strong> applications with asynchronous{" "}
            <strong>JavaScript</strong> requests way before the term{" "}
            <strong>AJAX</strong> was coined and became popular.
          </p>
        </li>
      </ul>

      <h2>Education and Certifications</h2>
      <ul className="timeline">
        <li>
          <time>2021</time>
          <strong>Solution Focused Coach</strong> Training Level 1, ICF ACSTH,
          Academy of Solution Focused Training
        </li>
        <li>
          <time>2021</time>
          Certified <strong>Practitioner of Human-Centered Design</strong>, LUMA
          Institute
        </li>
        <li>
          <time>2019</time>
          Fundamentals of <strong>Co-Active Coaching</strong>, Co-Active
          Training Institute
        </li>
        <li>
          <time>2019</time>
          <strong>Professional Scrum Master I</strong>, Scrum.org
        </li>
        <li>
          <time>2000–2005</time> Diploma,{" "}
          <strong>Engineer of Information Technology</strong>, Novosibirsk State
          University, Russia
        </li>
      </ul>

      <style jsx>{`
        ul.timeline {
          list-style-type: none;
          padding-left: 0em;
        }

        ul.timeline li {
          margin-bottom: 1.5em;
        }

        .timeline time {
          color: #aaa;
          font-weight: bold;
          padding-right: 1em;
        }

        ul.timeline li p {
          padding-left: 2em;
          margin-top: 0.5em;
        }
      `}</style>
    </>
  );
};
