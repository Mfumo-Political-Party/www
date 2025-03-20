import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    assetsDir: 'assets',
    sourcemap: false,
    manifest: true,
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
});