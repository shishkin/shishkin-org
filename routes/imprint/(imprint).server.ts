import { html, htmlToResponse } from "@mastrojs/mastro";
import { Layout } from "#components/Layout.ts";

export const GET = async (_req: Request) => {
  return htmlToResponse(
    Layout({
      title: "Sergey Shishkin - Imprint",
      description:
        "The boring stuff that I'm forced to provide when offering services on the internet",
      prose: true,
      children: html`
        <h1>Impressum</h1>

        <p>
          Sergey Shishkin<br />
          Farbit GmbH<br />
          <a href="https://farbit.org">farbit.org</a>
        </p>

        <p>
          Farb 1<br />
          6463 Bürglen<br />
          SWITZERLAND
        </p>

        <p>
          <a href="mailto:info@farbit.org?Subject=Contact%20via%20shishkin.org">info@farbit.org</a
          ><br />
          CHE-366.907.725
        </p>
      `,
    }),
  );
};
