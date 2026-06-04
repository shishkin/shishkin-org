import { html, htmlToResponse } from "@mastrojs/mastro";
import { Icon } from "#components/Icon.ts";
import { Layout } from "#components/Layout.ts";

export const GET = async (_req: Request) => {
  return htmlToResponse(
    Layout({
      description:
        "Sergey Shishkin - technical consultant and coach specializing in business agility and technical excellence",
      children: html`
        <section class="preamble">
          <h1>Sergey Shishkin</h1>

          <h2>Technical Consultant and Coach</h2>

          <p>
            As continuous learner and software crafter I find simple and elegant solutions to
            complex problems, build solid software systems and steadily deliver customer value. I
            have both deep and broad expertise in software development practices and programming
            ecosystems across the stack. My interests include decentralized and distributed systems,
            functional programming, systems thinking and organizational dynamics.
          </p>
        </section>

        <h2 id="areas-of-expertise">Areas of Expertise</h2>

        <div class="blocks">
          <section>
            <h3>${Icon({ name: "ion:navigate-outline" })} Business Agility</h3>

            <p>
              What's the point of a high-performing agile development team, if the product backlog
              for the next two years is set in stone?
            </p>

            <p>
              Studies in complex adaptive systems show that businesses need to learn to respond to
              complex world by probing and sensing, rather than analyzing. While successful
              innovative products look like magic, they're fruits of deliberate work and
              experimentation. <strong>Design Thinking</strong>,
              <strong>Human-Centered Design</strong> and <strong>Design Sprint</strong>
              consistently help sensing market needs, formulating and executing experimental probes
              in a lean way.
            </p>

            <p>
              Psychological safety is a prerequisite for organizations to start turning failures
              into learning and learning into successes.
            </p>
          </section>
          <section>
            <h3>${Icon({ name: "ion:rocket-outline" })} Technical Excellence</h3>

            <p>
              Great technology contributes significantly to speed of delivery. Great use of
              technology even more so!
            </p>

            <p>
              Technology buzzwords of the day matter only if they bring measurable net-positive
              effect on the organization. Strategic <strong>Domain-Driven Design</strong> helps
              tackle technical debt where it matters most. <strong>Observability</strong> supports
              data-driven decision making. <strong>CI/CD</strong> automation reduces risk of
              failures and shifts left quality and security controls. <strong>Cloud</strong> and
              <strong>serverless</strong> infrastructure align IT costs with revenue growth and make
              experimentation cheaper.
            </p>

            <p>
              On top of that, continuous and sustainable pace of technology innovation attracts and
              retains top talent. And that feeds into self-reinforcing positive cycle.
            </p>
          </section>
        </div>

        <h2 id="what-i-do">What I Do</h2>

        <div class="blocks">
          <section>
            <h3>${Icon({ name: "ion:trail-sign-outline" })} Consulting</h3>

            <p>
              During over two decades in the IT industry I've worked in small startups and regulated
              multi-national corporations. In the end of the day, everyone wants to ship better
              products cheaper and faster. Although every team and situation is different, there are
              good practices worth knowing. On top of that teams and organizations need to establish
              an adaptable culture that can deal with changing circumstances without much drama. If
              your organization is stuck in a transformation, I can help you out.
            </p>

            <p>
              Arrange 1 free consulting session with me:
              <a href="mailto:sergey@shishkin.org?subject=Consulting%20request">drop me a note</a>
              describing what you need help with.
            </p>
          </section>
          <section>
            <h3>${Icon({ name: "ion:construct-outline" })} Development</h3>

            <p>
              I develop rapid prototypes and large-scale high-quality software systems using modern
              cloud-native technologies on Rust, Node.js and JVM. I'm functional programming
              enthusiast, polyglot programmer and work throughout the application stack:
            </p>

            <ul>
              <li>automation of cloud infrastructure provisioning;</li>
              <li>robust, secure and scalable back-ends and event-driven data pipelines;</li>
              <li>modern responsive Web UI and data visualization;</li>
            </ul>

            <p>
              I value simple, pragmatic solutions and automation of repetitive and error-prone tasks
              like testing and deployment.
            </p>
          </section>
          <section>
            <h3>${Icon({ name: "ion:shield-checkmark-outline" })} Architecture and Code Review</h3>

            <p>
              Skeptical of silver bullet solutions, I offer solutions tailored to socio-technical
              background of the organization. My expertise covers:
            </p>

            <ul>
              <li>Systems architecture assessment;</li>
              <li>Plan architecture evolution to support business and tech strategy;</li>
              <li>Code quality reviews and technical debt assessment;</li>
              <li>Facilitate participatory technical decision making based on data;</li>
              <li>Identify and mitigate performance and scalability issues.</li>
            </ul>
          </section>
          <section>
            <h3>${Icon({ name: "carbon:crop-growth" })} Interim Technical Leadership</h3>

            <p>
              Great technology teams deliver with consistently high quality. Engineering culture has
              a flywheel effect and forms either virtuous or vicious cycle. I can help you seed and
              grow top technology teams or turn around challenging projects. Through coaching and
              mentoring practice I foster engineering excellence and continuous improvement culture.
            </p>
          </section>
          <section>
            <h3>${Icon({ name: "ion:easel-outline" })} Training</h3>

            <p>
              I enjoy sharing my knowledge with others and am available for in-house and online
              trainings. Topics include:
            </p>

            <ul>
              <li>Solution Focused Team Retrospectives;</li>
              <li>Lean Architecture;</li>
              <li>Serverless;</li>
              <li>and more.</li>
            </ul>
          </section>
          <section>
            <h3>${Icon({ name: "ion:chatbubbles-outline" })} Coaching</h3>

            <p>
              <a href="https://coachingfederation.org/about">Coaching is</a> partnering with clients
              in a thought-provoking and creative process that inspires them to maximize their
              potential. As a coach I don't diagnose or prescribe solution but invite you to explore
              different perspectives and build skills and resilience of your own.
            </p>

            <p>
              I'm trained solution-focused coach (by
              <a href="http://www.sf-academy.com">Academy of Solution Focused Training</a>),
              Certified Solution-Focused Practitioner (<a href="http://www.iasti.org/">IASTI</a>)
              and Co-Active coaching practitioner (<a href="https://coactive.com/">CTI</a>).
            </p>

            <p>
              Arrange 1 free coaching session with me:
              <a rel="me" href="mailto:sergey@shishkin.org?subject=Coaching%20request"
                >drop me a note</a
              >
              introducing yourself and your goals.
            </p>
          </section>
        </div>

        <p>
          Write me an
          <a rel="me" href="mailto:sergey@shishkin.org?subject=Contact%20via%20website">email</a>.
          See my <a href="/CV">full CV</a> and my profiles on
          <a href="https://www.linkedin.com/in/serega">LinkedIn</a>.
        </p>
      `,
    }),
  );
};
