import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { qrcode } from 'vite-plugin-qrcode';
import mkcert from 'vite-plugin-mkcert';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
  resolve: { alias: { '@': '/src' } },
  plugins: [
    react(),
    qrcode(), 
    mkcert(),
    vue()
    ],
});
