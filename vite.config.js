import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Root di sini artinya Vite mencari index.html di direktori utama
  build: {
    outDir: 'dist',
  },
});