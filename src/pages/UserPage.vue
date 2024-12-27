<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="user-page-container">
      <!-- 用戶資料條 -->
      <q-card
  class="user-profile-bar"
  @click="showProfile = true"
>
  <q-card-section class="row items-center">
    <!-- 左側頭像 -->
    <q-btn
        flat
        round
        @click=""
        icon="fas fa-user"
      />

    <!-- 右側名稱和電子郵件 -->
    <div class="q-ml-md">
      <div class="text-h6" style="font-weight:700">{{ authStore.user?.name || 'Guest' }}</div>
      <div>{{ authStore.user?.email || 'Not logged in' }}</div>
    </div>
  </q-card-section>
</q-card>


      <!-- 歷史訂單 -->
      <q-card class="order-history-bar  beautiful-shadow">
        <q-card-section>
          <div class="text-h6 flex flex-center history-title" >History Orders</div>
        </q-card-section>
        <q-list>
          <q-item v-for="order in orders" :key="order.id" clickable @click="viewOrder(order)">
            <q-item-section>{{ order.date }}</q-item-section>
            <q-item-section>{{ order.total }}</q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <!-- 登出條 -->
      <q-card class="logout-bar"  @click="logout">
        <q-card-section class="logout-text">
          <div class="text-h6" style="font-weight:700">Logout</div>
        </q-card-section>
      </q-card>

      <!-- 彈窗 -->
      <q-dialog v-model="showLogin" persistent>
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
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';


const authStore = useAuthStore();
const orders = ref([
  { id: 1, date: '2024-12-01', total: '$100', items: [{ id: 1, name: 'Item A', quantity: 2, price: '$50' }] },
  { id: 2, date: '2024-12-15', total: '$150', items: [{ id: 2, name: 'Item B', quantity: 3, price: '$50' }] },
]);

const showLogin = ref(true);
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

<style scoped lang="scss">
.user-page-container {
  width: 100%;
  max-width: 1000px;
}

.beautiful-shadow{
  border: 0.1rem solid #ffcc00; 
  box-shadow: 3px 6px 10px rgba(255, 230, 0, 0.5);
}

.user-profile-bar {
  padding: 1vh;
  height: 15vh;
  border-radius: 1rem;
  background-color: #ffa600;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center; /* 垂直置中 */
  margin-bottom: 1rem;
}

.order-history-bar {
  height: 50vh;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.logout-bar {
  height: 10vh;
  border-radius: 12px;
  background-color: #ffa600;
  display: flex;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.history-title{
  color:#ffa600;
  font-weight:700;
}

.logout-text{
  display: flex;
}

</style>
