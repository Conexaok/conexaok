import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/evento/*',
          dest: 'assets/evento'
        }
      ]
    })
  ],
  base: '/conexaok/', // Certifique-se de adicionar o base path aqui
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.JPG', '**/*.webp', '**/*.WEBP']
});
