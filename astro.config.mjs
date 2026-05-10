import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aivio-digital.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
