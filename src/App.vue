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
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/menu" label="Menu" />
          <q-route-tab to="/cart" :label="`Cart (${cartItemCount})`" />
          <q-route-tab to="/order-history" label="Order History" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer  class="copyright-footer">
      <q-toolbar>
        <q-toolbar-title class="custom-copyright-title">
          <div>&copy; 2024 MomPos. All rights reserved.</div>
        </q-toolbar-title>
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
.copyright-footer{
  background-color: $primary;
  color: white;
}
.custom-copyright-title {
  font-size: 14px;
}
</style>