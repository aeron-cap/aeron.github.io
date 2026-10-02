// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { remarkCodeMeta } from './src/lib/remark-code-meta.ts';
import { CONFIG } from './src/data/config.ts';

import netlify from '@astrojs/netlify';

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
  keepBackground: false,
};

// https://astro.build/config
export default defineConfig({
  site: CONFIG.site.url,
  output: 'server',

  // Astro handles local SSR itself; only production needs Netlify's adapter.
  // Skip the platform emulator (and its Deno runtime) during `astro dev`.
  adapter: process.env.NODE_ENV === 'development' ? undefined : netlify(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm, remarkCodeMeta],
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      syntaxHighlight: false,
    }),
    sitemap(),
  ],

  // markdown: {
  //   syntaxHighlight: false,
  //   remarkPlugins: [remarkGfm, remarkCodeMeta],
  //   rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  // },
});
