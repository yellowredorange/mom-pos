<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          MomPos
        </q-toolbar-title>
        <q-tabs>
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

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>&copy; 2023 MomPos. All rights reserved.</div>
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
