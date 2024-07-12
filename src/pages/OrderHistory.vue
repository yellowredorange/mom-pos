<template>
  <div class="order-history">
    <h2>Order History</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="order in orders" :key="order.orderId" class="order-item">
        <h3>Order #{{ order.orderId }}</h3>
        <p>Date: {{ new Date(order.orderDate).toLocaleString() }}</p>
        <p>Total: ${{ order.totalAmount.toFixed(2) }}</p>
        <h4>Items:</h4>
        <ul>
          <li v-for="item in order.orderItems" :key="item.orderItemId">
            {{ item.menuItemName }} - Quantity: {{ item.quantity }} - ${{ item.unitPrice.toFixed(2) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getOrderHistory } from '../api/MosPosApi';
import { OrderResponse } from '../interfaces/Order';

const orders = ref<OrderResponse[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const fetchOrderHistory = async () => {
  try {
    orders.value = await getOrderHistory();
  } catch (err) {
    error.value = 'Failed to fetch order history';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchOrderHistory);
</script>

<style scoped>
.order-history {
  padding: 20px;
}

.order-item {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
}
</style>