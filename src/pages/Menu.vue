<template>
  <div class="q-pa-md">
    <q-list bordered padding class="rounded-borders">
      <q-item
        v-for="item in menuItems"
        :key="item.id"
        clickable
        @click="addToCart(item)"
      >
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption>{{ item.price }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

// 引入购物车 store
const cartStore = useCartStore()

// 菜单项示例
const menuItems = ref([
  { id: 1, name: 'Dish 1', price: '$10' },
  { id: 2, name: 'Dish 2', price: '$12' },
  // 更多菜單項目
])

// 添加到购物车函数
const addToCart = (item: { id: number; name: string; price: string }) => {
  cartStore.addToCart(item)
}
</script>
