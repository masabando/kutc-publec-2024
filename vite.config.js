import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BUILD ? "/kutc-publec-2024/" : "/",
  server: {
    host: true,
  },
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
