import Link from "next/link";
import Layout from "../components/Layout";

export default function Site() {
  return (
    <Layout title="Home">
      <main>
        <h1>Sergey Shishkin</h1>
        <h2>Independent Software Engineer, Consultant and Coach</h2>
        <p>
          As continuous learner, knowledge multiplayer and software gardener
          with 20 years of experience, I help teams increase productivity,
          establish continuous learning culture and steadily deliver customer
          value. I have both deep and broad expertise in software development
          practices. I'm an active member of various professional software
          development communities and occasional conference speaker on topics of
          interest and expertise. My interests include functional programming
          languages, systems thinking, organizational dynamics and coaching.
        </p>
        <p>
          Write me an{" "}
          <a href="mailto:sergey@shishkin.org?subject=Contact%20via%20website">
            email
          </a>
          . See my{" "}
          <Link href="/CV">
            <a>full CV</a>
          </Link>{" "}
          and my profiles on{" "}
          <a
            href="https://www.linkedin.com/in/serega"
            rel="alternate"
            title="My profile on LinkedIn"
          >
            LinkedIn
          </a>{" "}
          (in English) or{" "}
          <a
            href="https://xing.com/profile/Sergey_Shishkin2"
            rel="alternate"
            title="My profile on Xing"
          >
            Xing
          </a>{" "}
          (in German).
        </p>
      </main>
    </Layout>
  );
}
