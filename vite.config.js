import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    viteImagemin(),
    imagetools()
  ],
  base: ''
})