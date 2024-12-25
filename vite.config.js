import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory for the build
    emptyOutDir: true, // Clears the output directory before building
  },
  server: {
    port: 3000, // Port for development server
  },
  preview: {
    port: 8080, // Port for preview server
  },
});
