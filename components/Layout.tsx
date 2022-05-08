import React, { ReactNode } from "react";
import Link from "next/link";
import {
  FaCreativeCommons,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaRss,
  FaXing,
} from "react-icons/fa";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">
            <a>
              <FaHome className="icon" aria-label="Home" />
            </a>
          </Link>

          <Link href="/#areas-of-expertise">
            <a>Areas of Expertise</a>
          </Link>

          <Link href="/#what-i-do">
            <a>What I Do</a>
          </Link>

          <Link href="/CV">
            <a>CV</a>
          </Link>

          <div className="spacer"></div>

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
          <Link href="/imprint">
            <a>Imprint</a>
          </Link>
        </p>
      </footer>
    </div>
  );
}
