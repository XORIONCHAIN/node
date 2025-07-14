import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 🔓 Accept connections from external hosts (e.g. ngrok, cloudflared)
    port: 5173, // or whatever port you're using
    cors: true, // enable CORS for testing APIs/headers across origins
    origin: 'https://applying-dominican-panels-tampa.trycloudflare.com', // optional: useful for some integrations
  }
});
