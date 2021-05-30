import Layout from "../components/Layout";

export default function Site() {
  return (
    <Layout title="Home">
      <main>
        <h1>Sergey Shishkin</h1>
        <h2>software craftsmanship in practice</h2>
        <p>
          I’m software craftsman, continuous learner and knowledge multiplier
          focused on lean software architecture, agile product development,
          clean code practices and functional programming.
        </p>
        <p>
          I help software development organizations increase productivity,
          establish continuous learning culture and steadily deliver customer
          value. I have experience in software development, architecture,
          engineering leadership, consulting, training and individual as well as
          team coaching.
        </p>
        <p>
          Write me an{" "}
          <a href="mailto:sergey@shishkin.org?subject=Contact%20via%20website">
            email
          </a>
          . See my CV on{" "}
          <a
            href="https://xing.com/profile/Sergey_Shishkin2"
            rel="alternate"
            title="My profile on Xing"
          >
            Xing
          </a>{" "}
          (in German) or{" "}
          <a
            href="https://www.linkedin.com/in/serega"
            rel="alternate"
            title="My profile on LinkedIn"
          >
            LinkedIn
          </a>{" "}
          (in English).
        </p>
      </main>
    </Layout>
  );
}
