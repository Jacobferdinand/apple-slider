import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

// vite.config.js
export default defineConfig({
  plugins: [eslintPlugin({ cache: false })],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './src/main.js',
      },
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].js',
        sourcemap: true,
        inlineDynamicImports: false,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
})
