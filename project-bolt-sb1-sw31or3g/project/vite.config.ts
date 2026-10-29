import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { contactApiMiddleware } from './contact-mail.mjs';

function contactApiPlugin() {
  return {
    name: 'contact-api',
    configureServer(server) {
      server.middlewares.use(contactApiMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(contactApiMiddleware);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
