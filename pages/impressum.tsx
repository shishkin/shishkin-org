import Layout from "../components/Layout";

export default function Site() {
  return (
    <Layout title="Impressum">
      <main>
        <h1>Impressum</h1>
        <p>
          Sergey Shishkin
          <br />
          <a href="https://shishkin.org">shishkin.org</a>
        </p>
        <p>
          <br />
          Farb 1<br />
          6463 Bürglen
          <br />
          SWITZERLAND
        </p>
        <p>
          <a href="mailto:sergey@shishkin.org?subject=Contact%20via%20website">
            sergey@shishkin.org
          </a>
        </p>
        <p>
          <a href="https://www.zefix.admin.ch/de/search/entity/list/firm/1508315">
            CHE-250.808.034
          </a>
        </p>
      </main>
    </Layout>
  );
}
