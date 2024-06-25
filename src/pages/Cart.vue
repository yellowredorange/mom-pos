<template>
  <div class="flex flex-center q-pa-md">
    <q-list>
      <q-item v-for="(item, index) in cartItems" :key="index">
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption>{{ item.price }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn dense round icon="delete" @click="removeFromCart(index)" />
        </q-item-section>
      </q-item>
    </q-list>
    <div class="text-h6 q-mt-md">總計: {{ cartTotal }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.cartItems)
const cartTotal = computed(() => cartStore.cartTotal)

const removeFromCart = (index: number) => {
  cartStore.removeFromCart(index)
}
</script>
