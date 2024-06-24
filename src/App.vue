<template>
  <div>
    <h1>Menu</h1>
    <ul>
      <li v-for="item in menu" :key="item.menu_id">
        <h2>{{ item.item_name }}</h2>
        <p>{{ item.item_description }}</p>
        <p>Price: {{ item.price }}</p>
        <p>Category: {{ item.category }}</p>
        <p>Available: {{ item.available ? 'Yes' : 'No' }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getMenu } from './api/MosPosApi.ts'
import { Menu } from './interfaces/Menu.ts'

const menu = ref<Menu[]>([])

onMounted(async () => {
  try {
    menu.value = await getMenu()
  } catch (error) {
    console.error('Error fetching menu:', error)
  }
})
</script>
