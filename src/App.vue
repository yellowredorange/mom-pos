<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <router-link to="/" class="q-toolbar-title-link gt-xs">
          <q-toolbar-title :class="{ 'fade-out': isFadeOut, 'fade-in': isFadeIn }">
            MomPos
          </q-toolbar-title>
        </router-link>
        <q-space></q-space>
        <div class="gt-xs">
          <q-tabs align="right">
            <q-route-tab to="/" label="Home" icon="home" />
            <q-route-tab to="/menu" label="Menu" icon="restaurant_menu" />
            <q-route-tab :to="'/cart'" :label="`Cart (${cartItemCount})`" icon="shopping_cart">
              <q-badge color="accent" floating>{{ cartItemCount }}</q-badge>
            </q-route-tab>
            <q-route-tab to="/order-history" label="History" icon="history" />
            <q-route-tab to="/menu-editor" label="Editor" icon="edit" />
          </q-tabs>
        </div>
        <div class="lt-sm full-width row items-center justify-between">
          <div class="marquee-container col">
            <div class="marquee" @animationiteration="onMarqueeIteration">
              🐎 &copy; 2024 MomPos. Created by Hendrix Huang. 🌟✨🐕
            </div>
          </div>
          <div class="col-auto">
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
        <q-route-tab to="/order-history" icon="history" />
        <q-route-tab to="/menu-editor" icon="edit" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useMenuStore } from './stores/menuStore';
import { onMounted, ref } from 'vue';

const menuStore = useMenuStore();
const { cartItemCount } = storeToRefs(menuStore);
const isFadeOut = ref(false);
const isFadeIn = ref(false);
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000); // 给足够的时间加载样式
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

@media (max-width: 599px) {
  .marquee-container {
    font-size: 2vh;
  }
}
</style>