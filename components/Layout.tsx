import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  FaCreativeCommons,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaRss,
  FaXing,
} from "react-icons/fa";

type Props = PageProps & {
  children?: ReactNode;
};

export type PageProps = {
  title?: string;
};

export default function Layout({ children, title }: Props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Sergey Shishkin" />
        <title>Sergey Shishkin{title ? ` :: ${title}` : ""}</title>
        <link rel="canonical" href="http://shishkin.org" />
        <link href="/favicon.png" rel="icon" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png"></link>
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>
              <FaHome className="icon" /> Home
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
            <FaRss className="icon" />
          </a>

          <a
            href="https://xing.com/profile/Sergey_Shishkin2"
            rel="alternate"
            title="My profile on Xing"
          >
            <FaXing className="icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/serega"
            rel="alternate"
            title="My profile on LinkedIn"
          >
            <FaLinkedin className="icon" />
          </a>

          <a
            href="https://github.com/shishkin"
            rel="alternate"
            title="My profile on GitHub"
          >
            <FaGithub className="icon" />
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            rel="license"
            title="Creative Commons Attribution License"
          >
            <FaCreativeCommons className="icon" />
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
