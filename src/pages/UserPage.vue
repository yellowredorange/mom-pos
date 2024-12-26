<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="user-page-container">
      <!-- 用戶資料條 -->
      <q-card class="user-profile-bar" @click="showProfile = true">
        <q-card-section class="flex flex-center">
          <q-avatar size="100px" />
          <div class="q-ml-md">
            <div class="text-h6">{{ authStore.user?.name || 'Guest' }}</div>
            <div>{{ authStore.user?.email || 'Not logged in' }}</div>
          </div>
        </q-card-section>
      </q-card>

      <!-- 歷史訂單 -->
      <q-card class="order-history-bar">
        <q-card-section>
          <div class="text-h6">History Orders</div>
        </q-card-section>
        <q-list>
          <q-item v-for="order in orders" :key="order.id" clickable @click="viewOrder(order)">
            <q-item-section>{{ order.date }}</q-item-section>
            <q-item-section>{{ order.total }}</q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <!-- 登出條 -->
      <q-card class="logout-bar" @click="logout">
        <q-card-section class="flex flex-center">
          <div class="text-h6">Logout</div>
        </q-card-section>
      </q-card>

      <!-- 彈窗 -->
      <q-dialog v-model="showLogin">
        <login-component />
      </q-dialog>
      <q-dialog v-model="showProfile">
        <user-profile-component @close="showProfile = false" />
      </q-dialog>
      <q-dialog v-model="showOrderDetails">
        <user-history-order-component :order="selectedOrder" @close="showOrderDetails = false" />
      </q-dialog>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import LoginComponent from '../components/LoginComponent.vue';
import UserProfileComponent from '../components/UserProfileComponent.vue';
import UserHistoryOrderComponent from '../components/UserHistoryOrderComponent.vue';

const authStore = useAuthStore();
const orders = ref([
  { id: 1, date: '2024-12-01', total: '$100', items: [{ id: 1, name: 'Item A', quantity: 2, price: '$50' }] },
  { id: 2, date: '2024-12-15', total: '$150', items: [{ id: 2, name: 'Item B', quantity: 3, price: '$50' }] },
]);

const showLogin = ref(false);
const showProfile = ref(false);
const showOrderDetails = ref(false);
const selectedOrder = ref(null);

const viewOrder = (order: null) => {
  selectedOrder.value = order;
  showOrderDetails.value = true;
};

const logout = () => {
  if (confirm('Are you sure you want to logout?')) {
    authStore.logout();
    window.location.href = '/user';
  } 
};
</script>

<style scoped>
.user-page-container {
  width: 100%;
  max-width: 1000px;
}

.user-profile-bar {
  height: 20vh;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.order-history-bar {
  height: 60vh;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.logout-bar {
  height: 10vh;
  border-radius: 12px;
}
</style>
