import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [],
  adapter: node({
    mode: 'standalone'
  }),
  output: 'hybrid',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
