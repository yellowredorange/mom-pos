<template>
  <div class="q-pa-md">
    <q-list bordered padding class="rounded-borders">
      <q-item v-for="item in cartItems" :key="item.menu_id">
        <q-item-section avatar>
          <q-img :src="item.image" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.item_name }}</q-item-label>
          <q-item-label caption>{{ item.item_description }}</q-item-label>
          <q-item-label caption>{{ item.price }}</q-item-label>
          <q-item-label caption
            >Quantity:
            <q-btn
              dense
              flat
              round
              icon="remove"
              @click="decreaseQuantity(item.menu_id)" />
            {{ item.quantity }}
            <q-btn
              dense
              flat
              round
              icon="add"
              @click="increaseQuantity(item.menu_id)"
          /></q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-btn icon="remove_circle" @click="removeFromCart(item.menu_id)" />
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" label="清空購物車" @click="clearCart" />
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-item-label>Total: {{ cartTotal }}</q-item-label>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="secondary" label="回到主畫面" @click="goToHome" />
      <q-btn color="secondary" label="回到菜單" @click="goToMenu" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const router = useRouter()
const cartStore = useCartStore()
const cartItems = computed(() => cartStore.cartItems)
const cartTotal = computed(() => cartStore.cartTotal)
const increaseQuantity = (menu_id: number) => {
  cartStore.increaseQuantity(menu_id)
}

const decreaseQuantity = (menu_id: number) => {
  cartStore.decreaseQuantity(menu_id)
}

const goToHome = () => {
  router.push('/')
}

const goToMenu = () => {
  router.push('/menu')
}

const removeFromCart = (menu_id: number) => {
  cartStore.removeFromCart(menu_id)
}

const clearCart = () => {
  cartStore.clearCart()
}
</script>

<style scoped>
.q-list .q-item {
  margin-bottom: 15px;
}
.q-list .q-item-section {
  display: flex;
  align-items: center;
}
.q-list .q-item-section img {
  max-width: 60px;
  max-height: 60px;
  border-radius: 50%;
}
</style>
