// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind()],
  adapter: netlify(),
  site: 'https://venuscraft.netlify.app',  // URL do seu site no Netlify
  base: '/',  // Como está na raiz, o base deve ser '/'
});
