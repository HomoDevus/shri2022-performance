import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs'
import requireTransform from 'vite-plugin-require-transform';

export default defineConfig({
  plugins: [
    // passing string type Regular expression
    requireTransform({}),
  ],
  base: ''
})