import nextMDX from '@next/mdx';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //   mdxRs: false,
    // },
};
export default nextMDX({
  options: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
  },
})(nextConfig);