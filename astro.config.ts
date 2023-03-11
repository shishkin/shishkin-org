import type { AstroIntegration } from "astro";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [mdx() as AstroIntegration],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
