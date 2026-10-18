import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const rawBase = process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? '/luxury-smartwatch-landing/' : '/');
const normalizedBase = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

// https://vite.dev/config/
export default defineConfig({
  base: normalizedBase,
  plugins: [
    react(),
    tailwindcss(),
  ],
})
