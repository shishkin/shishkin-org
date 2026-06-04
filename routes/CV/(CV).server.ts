import { html, htmlToResponse } from "@mastrojs/mastro";
import { Icon } from "#components/Icon.ts";
import { Layout } from "#components/Layout.ts";

export const GET = async (_req: Request) => {
  return htmlToResponse(
    Layout({
      title: "Sergey Shishkin - CV",
      description:
        "CV of Sergey Shishkin - technical consultant and coach specializing in business agility and technical excellence",
      prose: true,
      children: html`
        <h1>Sergey Shishkin</h1>

        <p>
          🇨🇭 Switzerland and 🌐 Remote | ✉️
          <a href="mailto:sergey@shishkin.org">sergey@shishkin.org</a> | 🔗
          <a href="https://shishkin.org">shishkin.org</a> | ${Icon({ name: "fa:linkedin" })}
          <a href="https://linkedin.com/in/serega">linkedin.com/in/serega</a> |
          ${Icon({ name: "fa:github" })}
          <a href="https://github.com/shishkin">github.com/shishkin</a>
        </p>

        <h2>About</h2>

        <p>
          <strong>Software Engineer, Consultant and Coach</strong> with 25+ years of experience. As
          continuous learner and software crafter I find simple and elegant solutions to complex
          problems, build solid software systems and steadily deliver customer value. I have both
          deep and broad expertise in software development practices and programming ecosystems
          across the stack. My interests include decentralized and distributed systems, functional
          programming, systems thinking and organizational dynamics.
        </p>

        <h2>Skills</h2>

        <ul>
          <li>
            💻 Solid experience across <strong>Node.js</strong>, <strong>JVM</strong> and
            <strong>.NET</strong> stacks. <strong>Web</strong>, <strong>API</strong>,
            <strong>backend</strong>, <strong>microservices</strong> and
            <strong>data engineering</strong>. Project experience with <strong>Rust</strong>,
            <strong>TypeScript/JavaScript</strong>, <strong>Scala/Java</strong>,
            <strong>F#/C#</strong>, <strong>HTML/CSS</strong> as well as <strong>Rect</strong> and
            similar UI frameworks, <strong>SQL/NoSQL</strong> databases and many more.
            <strong>AWS</strong> and <strong>Azure</strong> clouds,
            <strong>Docker/Kubernetes</strong> as well as various
            <strong>PaaS</strong> environments.
          </li>

          <li>
            📐 Functional, reactive and object-oriented programming. Design patterns, clean code,
            test-driven development, refactoring, working with legacy code.
          </li>

          <li>
            🧠 <strong>Design thinking</strong> that starts product development on the right foot by
            identifying user needs and value proposition. Creative problem solving and participatory
            decision making. <strong>Human-centered design</strong> and
            <strong>design sprint</strong>.
          </li>

          <li>
            📈 <strong>Lean</strong> and <strong>agile</strong> approach to all steps of the
            software development life-cycle. High-level <strong>architecture</strong> and design.
            <strong>Test-driven development</strong> and pair programming. Left-shifting of quality
            through <strong>continuous integration</strong> and
            <strong>continuous delivery</strong>. <strong>DevOps</strong> and automation of all
            repetitive tasks and quality gates.
          </li>

          <li>
            🪄 Individual and team <strong>coaching</strong> through a blameless, solution-focused
            approach. Mentoring and training in software development-related topics.
          </li>
        </ul>

        <h2>Work Experience</h2>

        <section class="timeline">
          <ul>
            <li>
              <time>08/2023–present</time> <strong>Founder and Consultant</strong> at
              <a href="https://farbit.org">Farbit GmbH</a>

              <p>
                🧙‍♂️ Consulting and contracting. Building enterprise information system with
                <strong>Node.js</strong>, <strong>Astro</strong>, <strong>GraphQL</strong>,
                3rd-party SaaS integrations, search index and <strong>AI</strong> capabilities.
              </p>

              <p>
                🔐 Prototyping and research of end-to-end encrypted, peer-to-peer networks with
                <strong>Rust</strong>, <strong>CRDTs</strong> and group key agreement.
              </p>
            </li>

            <li>
              <time>08/2021–08/2023</time>
              <strong>Software Engineer, Consultant and Coach</strong> at shishkin.org

              <p>
                🚀 Performed design thinking training for startup founders covering stakeholder
                mapping, customer value proposition, business model, story-boarding, agile and rapid
                prototyping.
              </p>

              <p>
                🏗 Developed a serverless application, data pipeline and a chatbot application for
                real estate industry. Using: <strong>AWS Lambda</strong> in
                <strong>TypeScript</strong> with <strong>DynamoDB</strong> for cost-effective
                backend; <strong>AWS CDK</strong> infrastructure as code deployment automation
                eliminates manual infrastructure drift in the cloud across production and
                development environments; <strong>AWS Textract</strong> and
                <strong>ML</strong> tools for intelligent data processing;
                <strong>Astro</strong> and <strong>SolidJS</strong> stack for efficient, interactive
                and server-side rendered web application; Integration with
                <strong>Telegram API</strong> for conversational UI capabilities.
              </p>

              <p>
                📖 Developed a company internal employee handbook and knowledge base using
                <strong>JavaScript</strong> and <strong>Antora</strong>. Custom Antora extensions
                for mirroring content from <strong>Confluence</strong> and <strong>Slack</strong>.
                Content management via <strong>GitLab</strong>, including
                <strong>CI/CD</strong> pipeline and discussions via automated issue templates.
                Custom UI and corporate branding.
              </p>
            </li>

            <li>
              <time>07/2017–08/2021</time> <strong>Technical Lead, Solution Architect</strong> at
              Standard Chartered Bank (Singapore)

              <p>
                🏎 Led an agile product development team. Introduced
                <strong>technical excellence</strong> practices of <strong>test automation</strong>,
                <strong>CI/CD</strong>, <strong>peer code reviews</strong>, regular architecture and
                design sessions. Hired and developed strong engineers. Ran initiative to
                containerize the application and re-platform from enterprise application server on
                internal on-prem <strong>Kubernetes PaaS</strong>.
              </p>

              <p>
                🌱 Promoted <strong>agile</strong> ways of working and product management within the
                technology department. Managed business stakeholders, infrastructure teams and
                internal process control owners. Helped to devise the business unit’s technical
                strategy and enterprise architecture.
              </p>

              <p>
                🎓 Led efforts to design and roll out a bespoke
                <strong>talent development</strong> program for emerging
                <strong>technical leaders</strong>.
              </p>
            </li>

            <li>
              <time>10/2015–04/2017</time> <strong>Data Scientist</strong> at Teralytics (Singapore)

              <p>
                🦾 Re-engineered a big data analytics pipeline for performance using
                <strong>Apache Spark</strong>, <strong>Mesos</strong>, <strong>Parquet</strong>,
                <strong>HDFS</strong>. Improved <strong>CI</strong> infrastructure and
                <strong>development workflow</strong>. Driven
                <strong>technical excellence</strong> in the engineering team, internal and external
                open-source, and <strong>community engagements</strong>. Raised team’s competence
                with <strong>Scala</strong> and <strong>functional programming</strong>.
              </p>
            </li>

            <li>
              <time>05/2014–08/2015</time> <strong>Agile Coach</strong> at JPMorgan Chase Bank
              (Singapore)

              <p>
                <strong>Coached</strong> teams in <strong>lean</strong> and
                <strong>agile</strong> software development and <strong>architecture</strong>.
                Coached program leaders in lean and systems thinking. Led by example while working
                in the product development teams. Taught developers
                <strong>test-driven development</strong> and <strong>clean code</strong> practices
                through <strong>pair-programming</strong> and internal
                <strong>communities of practice</strong>. Implemented parts of the
                <strong>continuous delivery</strong> pipeline using <strong>Jenkins</strong>. Taught
                functional and reactive programming with <strong>Scala</strong> and
                <strong>Akka</strong>.
              </p>
            </li>

            <li>
              <time>01/2012–04/2014</time>
              <strong>Independent Software Consultant and Coach</strong> (Düsseldorf, Germany)

              <p>
                Coached a client’s software development teams and stakeholders in
                <strong>Kanban</strong> and <strong>Scrum</strong>. Helped implement the
                <strong>continuous delivery</strong> pipeline using <strong>TeamCity</strong> and
                <strong>F#</strong> scripting tools. Coached developers in
                <strong>OO design principles</strong>, <strong>TDD</strong>,
                <strong>refactoring</strong> and working with <strong>legacy code</strong>.
              </p>

              <p>
                Designed and developed hypermedia <strong>web API</strong> and a high throughput
                event processing system for a telecom provider using <strong>Scala</strong>,
                <strong>Akka</strong>, <strong>Hadoop</strong>, <strong>MongoDB</strong> and
                <strong>Kafka</strong>. Introduced <strong>Kanban</strong> as a method of an
                evolutionary change that helped increase delivery throughput and release
                predictability.
              </p>
            </li>

            <li>
              <time>04/2010–12/2011</time> <strong>Senior Consultant</strong> at MT AG (Ratingen,
              Germany)

              <p>
                Developed backend, client-server and portal software systems using
                <strong>.NET</strong> technology for various clients. Authored and conducted
                <strong>trainings</strong> on <strong>lean</strong> and
                <strong>agile</strong> software development.
              </p>
            </li>

            <li>
              <time>07/2007–03/2010</time> <strong>Software Architect</strong> at InterComponentWare
              AG (Cologne, Germany)

              <p>
                Developed a modularized rich-client and server backend application with
                <strong>.NET</strong> technologies in over 500k LoC in 150 components with a team of
                20 developers. Analyzed and optimized <strong>performance</strong>. Mentored team
                members and conducted <strong>code reviews</strong>.
              </p>

              <p>
                Introduced <strong>Scrum</strong> in a cross-functional team of 35 people including
                product managers, testers, developers and technical writers. Trained and conducted
                <strong>workshops</strong> individually for each group of stakeholders and team
                members to ensure the lasting effect of agile transition. Introduced
                <strong>automated acceptance testing</strong> and
                <strong>executable specification</strong> practice with <strong>FitNesse</strong>.
              </p>
            </li>

            <li>
              <time>03/2006–06/2007</time> <strong>Software Engineer</strong> at newtelligence AG
              (Korschenbroich, Germany)

              <p>
                Developed web and backend software systems with <strong>.NET</strong>,
                <strong>SQL Server</strong>, asynchronous messaging, claim-based authentication and
                <strong>JavaScript</strong>.
              </p>

              <p>
                Authored and delivered developer trainings on .NET and
                <strong>service-oriented architecture</strong>.
              </p>
            </li>

            <li>
              <time>08/2001–12/2005</time> <strong>Software Developer</strong> at Electronic
              Documents (Novosibirsk, Russia)

              <p>
                Developed line of business intranet and internet applications using
                <strong>ASP.NET</strong> technologies and <strong>SQL Server</strong> databases.
                Built dynamic <strong>HTML</strong> applications with asynchronous
                <strong>JavaScript</strong> requests way before the term <strong>AJAX</strong> was
                coined and became popular.
              </p>
            </li>
          </ul>
        </section>

        <h2>Education and Certifications</h2>

        <section class="timeline">
          <ul>
            <li>
              <time>2021</time> <strong>Solution Focused Coach</strong> Training Level 1, ICF ACSTH,
              Academy of Solution Focused Training
            </li>
            <li>
              <time>2021</time> Certified <strong>Practitioner of Human-Centered Design</strong>,
              LUMA Institute
            </li>
            <li>
              <time>2019</time> Fundamentals of <strong>Co-Active Coaching</strong>, Co-Active
              Training Institute
            </li>
            <li><time>2019</time> <strong>Professional Scrum Master I</strong>, Scrum.org</li>
            <li>
              <time>2000–2005</time> University degree,
              <strong>Engineer of Information Technology</strong>, Novosibirsk State University,
              Russia
            </li>
          </ul>
        </section>
      `,
    }),
  );
};
