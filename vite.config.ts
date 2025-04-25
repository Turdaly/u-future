import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 3000
  },
  resolve: {
    alias: {
      '@': '/src',
      'app': '/src/app',
      'entities': '/src/entities',
      'features': '/src/features',
      'shared': '/src/shared',
      'widgets': '/src/widgets',
      'pages': '/src/pages'
    }
  }
})
