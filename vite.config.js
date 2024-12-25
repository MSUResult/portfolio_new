import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Ensure Render's PORT is used
    strictPort: true,               // Fail if the port is already in use
    host: true,                     // Set to true to bind to all interfaces (required by Render)
  },
})
