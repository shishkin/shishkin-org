import { type Html, html } from "@mastrojs/mastro";
import { Icon } from "./Icon.ts";

interface Props {
  children: Html;
  title?: string;
  description?: string;
  prose?: boolean;
}

export const Layout = ({ title = "Sergey Shishkin", description, prose, children }: Props) => html`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Sergey Shishkin" />
      <meta name="description" content="${description}" />
      <title>${title}</title>
      <link rel="stylesheet" href="/styles.css" />
      <link rel="canonical" href="https://shishkin.org" />
      <link rel="openid.delegate" href="https://shishkin.org/" />
      <link rel="openid.server" href="https://openid.indieauth.com/openid" />
    </head>

    <body>
      <div>
        <header>
          <nav>
            <a href="/">${Icon({ name: "fa:home", alt: "Home" })}</a>
            <a href="/#areas-of-expertise">Areas of Expertise</a>
            <a href="/#what-i-do">What I Do</a>
            <a href="/CV/">CV</a>
            <div class="spacer"></div>
            <a href="http://feeds.feedburner.com/SergeyShishkin" rel="alternate" title="RSS Feed"
              >${Icon({ name: "ion:logo-rss" })}</a
            >
            <a href="https://bsky.app/profile/shishkin.org" rel="me" title="Follow me on Bluesky"
              >${Icon({ name: "carbon:logo-bluesky" })}</a
            >
            <a href="https://www.linkedin.com/in/serega" rel="me" title="My profile on LinkedIn"
              >${Icon({ name: "fa:linkedin" })}</a
            >
            <a href="https://github.com/shishkin" rel="me" title="My profile on GitHub"
              >${Icon({ name: "fa:github" })}</a
            >
          </nav>
        </header>
        <main class="${prose ? "prose" : ""}">${children}</main>
        <footer>
          <p>
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              rel="license"
              title="Creative Commons Attribution License"
              >${Icon({ name: "fa:creative-commons" })}</a
            >
            Sergey Shishkin.
            <a href="/imprint/">Imprint</a>
          </p>
        </footer>
      </div>
    </body>
  </html>
`;
