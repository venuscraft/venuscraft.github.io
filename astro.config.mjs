// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind()],
  adapter: netlify(),
  site: 'https://venuscraft.netlify.app', // URL do seu site
  base: '/',  // Base da URL, para garantir que o caminho seja correto
});
