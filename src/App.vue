<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <router-link to="/" class="q-toolbar-title-link">
        <q-toolbar-title>
          MomPos
        </q-toolbar-title>
      </router-link>
      <q-space></q-space>
        <q-tabs align="right">
          <q-route-tab
            to="/"
            :label="$q.screen.gt.xs ? 'Home' : ''"
            icon="home"
          />
          <q-route-tab
            to="/menu"
            :label="$q.screen.gt.xs ? 'Menu' : ''"
            icon="restaurant_menu"
          />
          <q-route-tab
            to="/cart"
            :label="$q.screen.gt.xs ? `Cart (${cartItemCount})` : ''"
            icon="shopping_cart"
          >
            <q-badge color="accent" floating>{{ cartItemCount }}</q-badge>
          </q-route-tab>
          <q-route-tab
            to="/order-history"
            :label="$q.screen.gt.xs ? 'History' : ''"
            icon="history"
          />
          <q-route-tab
            to="/menu-editor"
            :label="$q.screen.gt.xs ? 'Menu Editor' : ''"
            icon="edit"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="copyright-footer">
      <q-toolbar class="toolbar">
        <q-toolbar-title class="custom-copyright-title">
          <div class="marquee-container">
            <div class="marquee">
              🐎 &copy; 2024 MomPos. Created by Hendrix Huang. 🌟✨🐕
            </div>
          </div>
          <div class="desktop-display">
            &copy; 2024 MomPos. Created by Hendrix Huang.
            <q-btn flat round icon="mdi-github" type="a" href="https://github.com/yellowredorange" target="_blank" />
            <q-btn flat round icon="mdi-linkedin" type="a" href="https://www.linkedin.com/in/hendrixhuang/" target="_blank" />
          </div>
        </q-toolbar-title>
        <div class="mobile-icons">
          <q-btn flat round icon="mdi-github" type="a" href="https://github.com/yellowredorange" target="_blank" />
          <q-btn flat round icon="mdi-linkedin" type="a" href="https://www.linkedin.com/in/hendrixhuang/" target="_blank" />
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useMenuStore } from './stores/menuStore';

const menuStore = useMenuStore();
const { cartItemCount } = storeToRefs(menuStore);
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
  display: none;
}

.marquee {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
}
.desktop-display{
    display: block;
  }
.mobile-icons {
  display: none;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

@media (max-width: 600px) {
  .custom-copyright-title {
    overflow: hidden;
    white-space: nowrap;
  }

  .marquee-container {
    display: block;
  }

  .marquee {
    animation: marquee 15s linear infinite;
  }
  .desktop-display{
    display: none;
  }
  .mobile-icons {
    display: flex;
    position: absolute;
    right: 0px;
    background-color: $primary;
    height: 6vh;
  }
}
</style>
