import type { AppProps } from "next/app";
import "../assets/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
