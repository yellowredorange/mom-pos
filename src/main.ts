import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // 引入路由
import './index.css'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-TW' // 或者其他语言
import 'quasar/dist/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router) // 使用路由
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})

app.mount('#app')
