<template>
  <div class="q-pa-md">
    <q-list bordered padding class="rounded-borders">
      <q-item
        v-for="item in menuItems"
        :key="item.menu_id"
        clickable
        @click="addToCart(item)"
      >
        <q-item-section avatar>
          <q-img src="https://i.imgur.com/ksUioso.png" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.item_name }}</q-item-label>
          <q-item-label caption>{{ item.item_description }}</q-item-label>
          <q-item-label caption>{{ item.price }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" label="結帳" @click="goToCart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { getMenu } from '@/api/MosPosApi'
import { Menu } from '@/interfaces/Menu'
import { Notify } from 'quasar'
const cartStore = useCartStore()
const router = useRouter()
const menuItems = ref<Menu[]>([])

const addToCart = (item: Menu) => {
  cartStore.addToCart(item)
  Notify.create({
    message: '已經成功加到購物車了',
    color: 'positive',
    position: 'top',
  })
}

const goToCart = () => {
  router.push('/cart')
}

const fetchMenu = async () => {
  try {
    menuItems.value = await getMenu()
  } catch (error) {
    console.error('Failed to fetch menu:', error)
  }
}

onMounted(fetchMenu)
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
