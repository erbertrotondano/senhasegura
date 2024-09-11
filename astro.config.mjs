import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// Import /serverless for a Serverless SSR site
import vercelServerless from '@astrojs/vercel/serverless';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  output: 'server',
  adapter: netlify(),
});