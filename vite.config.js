import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bible-chronology/',
  build: {
    outDir: 'dist',                    // Output folder
    assetsDir: 'assets',               // Subdirectory for static assets
    sourcemap: true,                   // Generate source maps for debugging
    emptyOutDir: true,                 // Clear the output folder before building
  },
})
