import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://myersjack.dev',
  output: 'static',
  build: {
    format: 'directory',
  },
});
