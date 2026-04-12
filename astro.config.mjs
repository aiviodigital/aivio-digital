import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

const sanitizeName = (name) => name?.replace(/[^a-zA-Z0-9_-]/g, '_') ?? 'chunk';

export default defineConfig({
  integrations: [],
  output: 'server',
  adapter: netlify(),
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: (chunkInfo) => `${sanitizeName(chunkInfo.name)}-[hash].mjs`,
          chunkFileNames: (chunkInfo) => `chunks/${sanitizeName(chunkInfo.name)}-[hash].mjs`,
        },
      },
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
