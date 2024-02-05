import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add a type declaration for images
      // Adjust the path if necessary
      'favicon.ico': 'favicon.ico'
    }
  }
})
