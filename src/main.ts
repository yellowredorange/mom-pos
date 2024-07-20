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
import ScrollReveal from 'scrollreveal';
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(pinia)
router.afterEach(() => {
  window.scrollTo(0, 0);
})
app.use(router)
app.use(ScrollReveal)
app.use(Quasar, {
  plugins: { Notify },
  lang: quasarLang,
  iconSet:quasarIconSet,
  config: {
}})
app.mount('#app')
