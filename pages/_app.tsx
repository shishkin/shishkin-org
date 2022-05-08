import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import "../assets/styles.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
