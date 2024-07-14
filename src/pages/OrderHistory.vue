<template>
  <q-page padding>
    <h5 class="q-mt-none">Order History</h5>
    <q-list bordered separator>
      <q-expansion-item
        v-for="order in orders"
        :key="order.orderId"
        :label="`Order #${order.orderId} - ${formatDate(order.orderDate)}`"
        :caption="`Total: $${order.totalAmount.toFixed(2)}`"
        group="orders"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <q-list dense>
              <q-item v-for="item in order.orderItems" :key="item.orderItemId">
                <q-item-section>
                  <q-item-label>
                    {{ item.quantity }}x {{ item.menuItemName }}
                    <span v-if="hasValidOptions(item.options)" class="text-grey-8">
    ({{ formatOptions(item.options) }})</span>
                  </q-item-label>
                  <q-item-label caption>
                    Unit Price: ${{ item.unitPrice.toFixed(2) }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  ${{ item.totalPrice.toFixed(2) }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useMenuStore } from '../stores/menuStore';
import { OrderResponse } from '../interfaces/Order';

const menuStore = useMenuStore();
const orders = ref<OrderResponse[]>([]);

onMounted(async () => {
  try {
    orders.value = await menuStore.getAllOrders();
  } catch (error) {
    console.error('Failed to fetch orders:', error);
  }
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const hasValidOptions = (options: string[]): boolean => {
  return options.some(opt => opt.trim() !== '');
};

const formatOptions = (options: string[]): string => {
  return options
    .filter(opt => opt.trim() !== '')
    .join(', ');
};
</script>