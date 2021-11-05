import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  faCreativeCommons,
  faGithub,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({ children, title = "Index" }: Props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Sergey Shishkin" />
        <title>{title} - Sergey Shishkin</title>
        <link rel="canonical" href="http://shishkin.org" />
        <link href="/favicon.png" rel="icon" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png"></link>
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </Link>

          <Link href="/CV">
            <a>CV</a>
          </Link>

          <a
            href="http://feeds.feedburner.com/SergeyShishkin"
            rel="alternate"
            title="RSS Feed"
          >
            <FontAwesomeIcon icon={faRss} />
          </a>

          <a
            href="https://xing.com/profile/Sergey_Shishkin2"
            rel="alternate"
            title="My profile on GitHub"
          >
            <FontAwesomeIcon icon={faXing} />
          </a>

          <a
            href="https://www.linkedin.com/in/serega"
            rel="alternate"
            title="My profile on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/shishkin"
            rel="alternate"
            title="My profile on GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </nav>
      </header>
      {children}
      <footer>
        <p>
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            rel="license"
            title="Creative Commons Attribution License"
          >
            <FontAwesomeIcon icon={faCreativeCommons} />
          </a>
          {" Sergey Shishkin. "}
          <Link href="/impressum">
            <a>Impressum</a>
          </Link>
        </p>
      </footer>
    </div>
  );
}
