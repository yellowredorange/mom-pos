import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router' // 引入路由
import './index.css'
import { Notify, Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-TW' // 或者其他语言
import 'quasar/dist/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import quasarIconSet from 'quasar/icon-set/material-icons'

const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(pinia)
app.use(router) // 使用路由
app.use(Quasar, {
  plugins: { Notify }, // import Quasar plugins and add here
  lang: quasarLang,
  iconSet:quasarIconSet,
  config: {
    brand: {
      primary: '#FFA500',
      secondary: '#FFD700',
      accent: '#FF8C00',
    }
}})

app.mount('#app')
