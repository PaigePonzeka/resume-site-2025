import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  //base: '/resume-site-2025/',
  plugins: [
    react(),
    svgr(),
  ],
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
});