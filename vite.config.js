import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-react/', // Repozitoriy nomingiz qanday bo'lsa, shu yozilishi shart!
})