import nextMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug],
    providerImportSource: "@mdx-js/react",
  },
});

// @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
