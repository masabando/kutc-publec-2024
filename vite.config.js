import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BUILD ? "/kutc-publec-2024/" : "/",
  server: {
    host: true,
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, 'index.html')
      }
    }
  },
  plugins: [react(), basicSsl()],
})
