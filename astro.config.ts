import type { AstroIntegration } from "astro";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

export default defineConfig({
  output: "static",
  integrations: [icon(), mdx() as AstroIntegration],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
