import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/msbl-gear-simulator/",
  build: {
    outDir: "docs"
  },
  plugins: [react()]
})
