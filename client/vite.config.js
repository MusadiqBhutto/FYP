import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/api': {
        target: "real-estate-3xu5yyxsx-muhammad-ali-maliks-projects.vercel.app",
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      external: ['mongoose'], // Externalize mongoose
    },
  },

  plugins: [react()],
})
