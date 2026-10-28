import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Every folder in /team that contains an index.html becomes its own page,
// e.g. team/sarnali-basak/index.html  ->  /team/sarnali-basak/
const teamDir = resolve(__dirname, 'team');
const profilePages = Object.fromEntries(
  readdirSync(teamDir)
    .filter((d) => existsSync(resolve(teamDir, d, 'index.html')))
    .map((d) => [d, resolve(teamDir, d, 'index.html')])
);

export default defineConfig({
  // Relative asset paths, so the site works from any folder
  // (e.g. GitHub Pages at /Smart_Wheelchair/).
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html'), ...profilePages },
    },
  },
});
