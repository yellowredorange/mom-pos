import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import 'quasar/src/css/index.sass'
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/quasar-variables.scss'
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base:'./'
})
