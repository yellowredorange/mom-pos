import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router'; // 引入路由
import './index.css';
import { Dialog, Notify, Quasar, Cookies } from 'quasar';
import quasarLang from 'quasar/lang/zh-TW'; // 或者其他语言
import 'quasar/dist/quasar.sass';
import '@quasar/extras/material-icons/material-icons.css';
import quasarIconSet from 'quasar/icon-set/material-icons';
import '@/global.scss';
import './css/app.scss';
import { createI18n } from 'vue-i18n';
import zhTW from './locales/zh-tw.json';
import en from './locales/en.json';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
type MessageSchema = typeof zhTW;
const i18n = createI18n<[MessageSchema], 'zh-tw' | 'en'>({
  locale: 'zh-tw', // 默认语言
  fallbackLocale: 'en', // 后备语言
  messages: {
    'zh-tw': zhTW,
    en
  }
});

const app = createApp(App);
app.use(pinia);
app.use(router);

app.use(Quasar, {
  plugins: { Notify, Dialog, Cookies },
  lang: quasarLang,
  iconSet: quasarIconSet,
  config: {
    dark: 'auto', // Ensure dark mode is enabled
  },
});

app.use(i18n);

app.config.globalProperties.$q.dark.set(localStorage.getItem('darkMode') === 'true');

app.mount('#app');
