import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

export default defineConfig({
  output: "static",
  integrations: [icon(), mdx()],
  devToolbar: { enabled: false },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
