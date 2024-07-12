<template>
  <q-page class="q-pa-md">
    <h5 class="q-mt-none">Your Cart</h5>
    <q-list v-if="cart.length" bordered separator>
      <q-item v-for="(item, index) in cart" :key="index" class="q-py-md">
        <q-item-section avatar>
          <q-img :src="getMenuItemPhotoUrl(item.menuItemId)" style="width: 100px; height: 100px" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption>
            Base Price: ${{ item.price.toFixed(2) }}
          </q-item-label>
          <q-item-label v-for="option in item.selectedOptions" :key="option.category" caption>
            {{ option.category }}: {{ option.option }} (+${{ option.additionalPrice.toFixed(2) }})
          </q-item-label>
          <q-item-label caption>
            Total Price: ${{ item.totalPrice.toFixed(2) }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="text-weight-bold">
            Quantity: {{ item.quantity }}
          </div>
          <q-btn-group spread>
            <q-btn color="negative" icon="remove" @click="decreaseQuantity(index)" />
            <q-btn color="positive" icon="add" @click="increaseQuantity(index)" />
          </q-btn-group>
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else class="text-h6 q-pa-md text-center">Your cart is empty</div>
    <q-separator v-if="cart.length" />
    <div v-if="cart.length" class="text-right q-mt-md">
      <div class="text-h6">Total: ${{ Math.ceil(cartTotal).toFixed(2) }}</div>
      <q-btn color="primary" label="Checkout" @click="checkout" class="q-mt-sm" />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../stores/menuStore';

const router = useRouter();
const menuStore = useMenuStore();
const { cart } = storeToRefs(menuStore);
const cartTotal = computed(() => menuStore.cartTotal);

const getMenuItemPhotoUrl = (menuItemId: number) => {
  const menuItem = menuStore.menuItems.find(item => item.menuItemId === menuItemId);
  return menuItem ? menuItem.photoUrl : '';
};

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

const checkout = () => {
  // Implement checkout logic here
  console.log('Checkout clicked');
};
</script>