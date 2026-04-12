import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  output: 'hybrid',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
