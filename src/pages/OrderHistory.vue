<template>
  <q-page padding>
    <h5 class="page-title">{{ $t('orderHistory.title') }}</h5>
    <div style="font-size:1rem; margin-bottom: 1rem; text-align: center;">
      {{ $t('orderHistory.description') }}
    </div>
    <q-list bordered separator>
      <div v-if="loading" class="loading-overlay">
        <q-spinner-dots color="white" size="50px" />
      </div>
      <q-expansion-item
        v-if="orders && orders.length > 0"
        v-for="order in orders"
        :key="order.orderId"
        :label="`${$t('orderHistory.orderLabel', { orderId: order.orderId, date: formatDate(order.orderDate) })}`"
        :caption="`${$t('orderHistory.total', { totalAmount: order.totalAmount.toFixed(2) })}`"
        group="orders"
        header-class="order-header"
      >
        <q-card>
          <q-card-section>
            <q-list dense>
              <q-item v-for="item in order.orderItems" :key="item.orderItemId">
                <q-item-section>
                  <q-item-label>
                    {{ item.quantity }}x {{ item.menuItemName }}
                    <span v-if="hasValidOptions(item.options)" class="text-grey-8">
                      ({{ formatOptions(item.options) }})
                    </span>
                  </q-item-label>
                  <q-item-label caption>
                    {{ $t('orderHistory.unitPrice', { unitPrice: item.unitPrice.toFixed(2) }) }}
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
      <div v-else class="text-h6 q-pa-md text-center text-color-primary">
        {{ $t('orderHistory.noOrders') }}
        <div class="btn-container">
          <q-btn
            color="primary"
            :label="$t('orderHistory.orderNow')"
            @click="$router.push('/menu')"
            class="cta-button"
          />
        </div>
      </div>
    </q-list>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useMenuStore } from '../stores/menuStore';
import { OrderResponse } from '../interfaces/Order';

const menuStore = useMenuStore();
const orders = ref<OrderResponse[]>([]);
const loading = ref(true);
onMounted(async () => {
  try {
    orders.value = await menuStore.getAllOrders();
  } catch (error) {
    console.error('Failed to fetch orders:', error);
  }
  finally{
    loading.value=false;
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
<style lang="scss" scoped>
::v-deep .order-header{
  font-size: 1rem ;
  color: $primary;
}
.q-item__label{
  font-size: 0.95rem;
}

::v-deep .text-caption{
  font-size: 0.95rem;
}
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.page-title {
  font-weight: bold;
  text-align: center;
  padding: 1rem;
}

.text-color-primary{
  color: $primary;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: $primary;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
}
.btn-container {
  display: flex;
  justify-content: center; /* Horizontally center the button */
  margin-top: 0rem; /* Add spacing from the text above */
  margin-bottom: 2rem;
}
</style>