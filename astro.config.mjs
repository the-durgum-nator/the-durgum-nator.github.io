// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // base: "/the-durgum-nator.github.io"
  site: 'https://the-durgum-nator.github.io/',

  integrations: [react()]
});