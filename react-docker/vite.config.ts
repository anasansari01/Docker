import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,           // exposes server to local network / host
    port: 5173,           // match your docker -p 5173:5173
    watch: {
      usePolling: true,   // needed for Docker/VM environments
      interval: 100,      // optional: tweak polling speed
    },
  },
})
