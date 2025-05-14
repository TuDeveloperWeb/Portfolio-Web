import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Aquí se inyecta tu archivo global en cada <style lang="scss">
        additionalData: `@use "@/assets/styles/globals" as *;`

      }
    }
  }
})
