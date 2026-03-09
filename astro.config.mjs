// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // base: "/the-durgum-nator.github.io"
  site: 'https://the-durgum-nator.github.io/',

  integrations: [react()]
});