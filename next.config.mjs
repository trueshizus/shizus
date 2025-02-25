// next.config.mjs
import createMDX from '@next/mdx';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // Enable standalone output for containerization
  output: 'standalone',
  // Other Next.js config options can go here
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

export default withMDX(nextConfig);