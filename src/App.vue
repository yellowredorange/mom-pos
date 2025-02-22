<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <router-link to="/" class="q-toolbar-title-link gt-xs">
          <q-toolbar-title :class="{ 'fade-out': isFadeOut, 'fade-in': isFadeIn }">
            MomPos
          </q-toolbar-title>

          
        </router-link>
        <q-btn
        flat
        round
        icon="brightness_6"
        @click="toggleDarkMode"
        :label="buttonLabel"
        class="dark-mode-btn"
      />
      <q-button @click="toggleLanguage" class="language-icon">
        <q-img
          src="@/assets/LanguageSwitch.png"
          alt="{{ $t('language') }}"
          class="language-icon"
        />
      </q-button>
        <q-space></q-space>
        <div class="gt-xs">
      <q-tabs align="right">
        <q-route-tab :to="'/'" :label="$t('home')" icon="home" />
        <q-route-tab :to="'/menu'" :label="$t('menu')" icon="restaurant_menu" />
        <q-route-tab 
          :to="'/cart'" 
          :label="`${$t('cart')} (${cartItemCount})`" 
          icon="shopping_cart"
        >
          <q-badge color="accent" floating>{{ cartItemCount }}</q-badge>
        </q-route-tab>
        <q-route-tab 
          v-if="shopper || admin" 
          :to="'/menu-editor'" 
          :label="$t('editor')" 
          icon="edit" 
        />
        <q-route-tab 
          v-if="customer || admin" 
          :to="'/order-history'" 
          :label="$t('history')" 
          icon="history" 
        />
        <q-route-tab :to="'/user'" :label="$t('user')" icon="fas fa-user-circle" />
      </q-tabs>
    </div>

        <div class="lt-sm full-width row items-center justify-between">
          <div class="marquee-container col">
            <div class="marquee" @animationiteration="onMarqueeIteration">
              🐎 &copy; 2024 MomPos. Created by Hendrix Huang. 🌟✨🐕
            </div>
          </div>
          <div class="col-5 phone-icon">
            <q-btn flat round icon="mdi-github" type="a" href="https://github.com/yellowredorange" target="_blank" />
            <q-btn flat round icon="mdi-linkedin" type="a" href="https://www.linkedin.com/in/hendrixhuang/" target="_blank" />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="copyright-footer gt-xs">
      <q-toolbar class="toolbar">
        <q-toolbar-title class="custom-copyright-title">
          <div class="desktop-display">
            &copy; 2024 MomPos. Created by Hendrix Huang.
            <q-btn flat round icon="mdi-github" type="a" href="https://github.com/yellowredorange" target="_blank" />
            <q-btn flat round icon="mdi-linkedin" type="a" href="https://www.linkedin.com/in/hendrixhuang/" target="_blank" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-footer class="lt-sm">
      <q-tabs align="justify" class="bg-primary text-white">
        <q-route-tab to="/" icon="home" />
        <q-route-tab to="/menu" icon="restaurant_menu" />
        <q-route-tab :to="'/cart'" icon="shopping_cart">
          <q-badge color="accent" floating>{{ cartItemCount }}</q-badge>
        </q-route-tab>
        <q-route-tab v-if="shopper || admin" to="/menu-editor" icon="edit" />
        <q-route-tab v-if="customer || admin" to="/order-history" icon="history" />
        <q-route-tab to="/user" icon="fas fa-user-circle" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
import { storeToRefs } from 'pinia';
import { useMenuStore } from './stores/menuStore';
import { computed, onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useThemeStore } from './stores/themeStore';
import { useAuthStore } from './stores/authStore';
const $q = useQuasar();
import { useLanguageStore } from '@/stores/languageStore';
const languageStore = useLanguageStore();

const menuStore = useMenuStore();
const { cartItemCount } = storeToRefs(menuStore);
const isFadeOut = ref(false);
const isFadeIn = ref(false);
const loading = ref(true);
languageStore.initializeLanguage();

const isDark = ref($q.dark.isActive)

const themeStore = useThemeStore();

// Sync Quasar's dark mode with Pinia
themeStore.loadDarkMode();
$q.dark.set(themeStore.isDarkMode);

const toggleLanguage = () => {
  languageStore.toggleLanguage();
};

// Toggle dark mode
const toggleDarkMode = () => {
  $q.dark.toggle(); // Toggle Quasar dark mode
  themeStore.setDarkMode($q.dark.isActive); // Update Pinia and localStorage
};

// Dynamic label for the button
const buttonLabel = computed(() => {
  return $q.screen.lt.sm ? '' : isDark.value ? '' : '';
});

const authStore = useAuthStore();
const shopper = computed(() => authStore.permission === 'shopper');
const customer = computed(() => authStore.permission === 'customer');
const admin = computed(() => authStore.permission === 'admin');

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
const onMarqueeIteration = () => {
  isFadeOut.value = true;
  isFadeIn.value = false;
  
  setTimeout(() => {
    isFadeOut.value = false;
    isFadeIn.value = true;
  }, 7500);}

</script>

<style scoped lang="scss">
.copyright-footer {
  background-color: $primary;
  color: white;
  height: 6vh;
  display: flex;
  align-items: center;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.3);
}

.custom-copyright-title {
  text-align: center;
  font-size: 3vh;
  width: 100%;
}

.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
}

.marquee {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.desktop-display {
  display: block;
}

.dark-mode-btn {
  margin-left: 16px; /* MomPos 和按鈕的距離 */
}

@media (max-width: 599px) {
  .marquee-container {
    font-size: 2vh;
  }
  
.dark-mode-btn {
  margin-left: 0px; /* MomPos 和按鈕的距離 */
}
}


body {
  transition: background-color 0.3s, color 0.3s;
}

.language-icon {
    width: 3rem !important; /* Override global styles */
    height: auto !important; /* Maintain aspect ratio */
    object-fit: contain;
    margin: 0 0.1rem !important;
    cursor: pointer !important;
}

.phone-icon{
  margin-right: 2rem;
}

</style>