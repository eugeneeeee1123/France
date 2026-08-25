import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';
import { cpSync, existsSync } from 'node:fs';

function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const source = resolve(__dirname, 'assets');
      const target = resolve(__dirname, 'dist/assets');
      if (existsSync(source)) {
        cpSync(source, target, { recursive: true });
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyStaticAssets()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        arsenal: resolve(__dirname, 'pages/arsenal.html'),
        statecraft: resolve(__dirname, 'pages/statecraft.html'),
        territories: resolve(__dirname, 'pages/territories.html'),
        arena: resolve(__dirname, 'pages/arena.html'),
        sport: resolve(__dirname, 'pages/sport.html'),
        epochs: resolve(__dirname, 'pages/epochs.html'),
        aesthetics: resolve(__dirname, 'pages/aesthetics.html')
      }
    }
  }
});
