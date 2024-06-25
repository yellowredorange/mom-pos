<template>
  <div>
    <h1>Home Page</h1>
    <q-btn @click="goToMenu" label="Go to Menu" />
    <q-btn @click="goToCart" label="Go to Cart" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToMenu = () => {
  console.log('Navigating to Menu')
  router.push('/menu')
}

const goToCart = () => {
  console.log('Navigating to Cart')
  router.push('/cart')
}
</script>
