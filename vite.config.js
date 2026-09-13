import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base MUST match your GitHub repo name, e.g. "/portfolio/"
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
