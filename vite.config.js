import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages project site -> https://thiagobjcarvalho-cw.github.io/profile/
  base: '/profile/',
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
    port: 3000,
    strictPort: true,
  },
})
