<template>
  <q-page class="q-pa-md">
    <h5 class="page-title">🛒Shopping Cart  </h5>
    <q-list v-if="cart.length" bordered separator class="rounded-borders">
      <q-item v-for="(item, index) in cart" :key="index" class="q-py-md">
        <q-item-section avatar>
          <q-img v-if="item.photoUrl"
                 :src="item.photoUrl"
                 style="width: 100px; height: 100px"
                 :ratio="1"
                 class="rounded-borders" />
          <q-img v-else src="@/assets/PepeBugFly.png"></q-img>
        </q-item-section>
        <q-item-section>
          <q-item-label class="item-name">{{ item.name }}</q-item-label>
          <q-item-label caption>
            Unit: ${{ item.price.toFixed(2) }}
          </q-item-label>
          <q-item-label v-for="option in item.selectedOptions" :key="option.category" caption>
            {{ option.category }}: {{ option.option }} (+${{ option.additionalPrice.toFixed(2) }})
          </q-item-label>
          <q-item-label caption>
            Total: ${{ item.totalPrice.toFixed(2) }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="normal-font q-mb-sm">
            Quantity: {{ item.quantity }}
          </div>
          <q-btn-group spread>
            <q-btn flat color="secondary" icon="remove" @click="decreaseQuantity(index)" />
            <q-btn flat color="primary" icon="add" @click="increaseQuantity(index)" />
          </q-btn-group>
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else class="text-h6 q-pa-md text-center text-color text-color-primary">Your cart is empty</div>
    <q-separator v-if="cart.length" class="q-my-md" />
  <div v-if="cart.length" class="row justify-between items-center q-mt-md">
    <q-btn outline style="font-size: 0.9rem;" color="secondary" label="Clear Cart" @click="clearCart" />
    <q-btn color="primary" @click="checkout">
      <div class="row no-wrap items-center">
        <div class="q-mr-sm text-base">Checkout</div>
        <q-separator vertical inset color="white" />
        <div class="q-ml-sm text-base">${{ Math.ceil(cartTotal).toFixed(2) }}</div>
      </div>
    </q-btn>
  </div>
  </q-page>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../stores/menuStore';
import { useQuasar } from 'quasar';

const router = useRouter();
const menuStore = useMenuStore();
const { cart } = storeToRefs(menuStore);
const cartTotal = computed(() => menuStore.cartTotal);
const loading = ref(false);
const $q = useQuasar();

const increaseQuantity = (index: number) => {
  const item = cart.value[index];
  menuStore.updateCartItemQuantity(index, item.quantity + 1);
};

const decreaseQuantity = (index: number) => {
  const item = cart.value[index];
  if (item.quantity > 1) {
    menuStore.updateCartItemQuantity(index, item.quantity - 1);
  } else {
    menuStore.removeFromCart(index);
  }
};

const clearCart = () => {
  $q.dialog({
    title: 'Confirm',
    message: 'Are you sure you want to clear your cart?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    menuStore.clearCart();
    $q.notify({
      color: 'secondary',
      message: 'Cart cleared successfully'
    });
  });
};

const checkout = async () => {
  loading.value = true;
  try {
    await menuStore.checkout();
    $q.notify({
      color: 'secondary',
      message: 'Order placed successfully!',
      position: 'bottom',
      timeout: 2000
    });
    router.push('/order-history');
  } catch (error) {
    $q.notify({
      color: 'accent',
      message: 'Failed to place order. Please try again.'
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
.q-item {
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba($primary, 0.05);
  }
}

.q-btn-group {
  .q-btn {
    min-width: 40px;
  }
}

.text-color-primary{
  color: $primary;
}

.normal-font{
  font-size: 1rem;
  color:rgba(0, 0, 0, 0.68);
}
::v-deep .text-caption{
  font-size: 1rem;
  color:rgba(0, 0, 0, 0.68);
}

.item-name{
  font-size: 1.15rem;
  color:rgba(0, 0, 0, 0.821);
  font-weight: 550;
}

.page-title {
  font-weight: bold;
  text-align: center;
  padding: 1rem;
}
</style>