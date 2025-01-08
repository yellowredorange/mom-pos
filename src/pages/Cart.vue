<template>
  <q-page class="q-pa-md">
    <h5 class="page-title">{{ $t('shopping-cart') }}  </h5>
    <div style="font-size:1rem; margin-bottom: 1rem; text-align: center;">{{ $t('here-is-the-product-you-order') }}</div>
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
            {{ $t('priceDetails', { label: $t('unitPrice'), price: item.price.toFixed(2) }) }}
          </q-item-label>

          <q-item-label v-for="option in item.selectedOptions" :key="option.category" caption>
            {{ option.category }}: {{ option.option }} (+${{ option.additionalPrice.toFixed(2) }})
          </q-item-label>
          <q-item-label caption>
            {{ $t('priceDetails', { label: $t('total'), price: item.totalPrice.toFixed(2) }) }}
          </q-item-label>

        </q-item-section>
        <q-item-section side>
          <div class="normal-font q-mb-sm">
            {{ $t('quantity', { quantity: item.quantity }) }}
          </div>

          <q-btn-group spread>
            <q-btn flat color="secondary" icon="remove" @click="decreaseQuantity(index)" />
            <q-btn flat color="primary" icon="add" @click="increaseQuantity(index)" />
          </q-btn-group>
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else class="text-h6 q-pa-md text-center text-color text-color-primary">
          {{ $t('your-cart-is-empty-now') }} </div>
        <div class="btn-container">
  <q-btn
  v-if="!cart.length"
    color="primary"
    :label="t('buy-now')"
    @click="$router.push('/menu')"
    class="cta-button"
  />
</div>
    <q-separator v-if="cart.length" class="q-my-md" />
  <div v-if="cart.length" class="row justify-between items-center q-mt-md">
    <q-btn outline class="clear-cart" :label="$t('clear-cart')" @click="clearCart" />
    <q-btn
    color="primary"
    @click="handleCheckout"
    class="cta-button">
      <div class="row no-wrap items-center">
        <div class="q-mr-sm text-base">{{ $t('checkout') }}</div>
        <q-separator vertical inset color="white" />
        <div class="q-ml-sm text-base">${{ Math.ceil(cartTotal).toFixed(2) }}</div>
      </div>
    </q-btn>
  </div>
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../stores/menuStore';
import { useQuasar } from 'quasar';

const router = useRouter();
const menuStore = useMenuStore();
const { cart } = storeToRefs(menuStore);
const cartTotal = computed(() => menuStore.cartTotal);
const $q = useQuasar();
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
        title: t('confirm'), // Use the `t` function for translation
        message: t('clearCartMessage'), // Use the `t` function for the message
        ok: { label: t('yes'), color: 'primary' }, // Translate button labels
        cancel: { label: t('no'), color: 'primary', outline: true }, // Translate button labels
        persistent: true,
      }).onOk(() => {
        menuStore.clearCart(); // Clear the cart using your store
        $q.notify({
          color: 'secondary',
          message: t('cartCleared'), // Use translation for notification message
        });
      }).onCancel(() => {
        // Handle cancel action if needed
      });
    };

const checkout = async () => {
  try {
    await menuStore.checkout();
    $q.notify({
      type: 'positive',
      message: t('checkoutSuccess')
    });
    router.push('/order-history');
  } catch (error:any) {
    if (error.response?.status === 401) {
      $q.notify({
        type: 'negative',
        color: 'accent',
        message: t('unauthorized')
      });
      router.push('/user'); // 重定向到用戶頁面
    } else {
      $q.notify({
        type: 'negative',
        color: 'accent',
        message: error.message || t('checkoutError')
      });
    }
  }
};

const handleCheckout = async () => {
  try {
    const dialog = await $q.dialog({
      title: t('confirmation'),
      message: t('proceedCheckout'),
      ok: { label: t('yes'), color: 'primary', outline: false },
      cancel: { label: t('no'), color: 'primary', outline: true },
      persistent: true,
    });

    dialog.onOk(async () => {
      // 檢查用戶是否已登錄
      const token = $q.cookies.get('token');
      if (!token) {
        $q.notify({
          type: 'negative',
          color: 'accent',
          message: t('notLoggedIn'),
        });
        router.push({ path: '/user', query: { from: '/cart' } });
        return;
      }

      // 執行結帳操作
      await checkout();
    });

    // 當用戶點擊 "Cancel" 或關閉對話框
    dialog.onCancel(() => {
    });

    dialog.onDismiss(() => {
      // 可選：處理對話框被關閉的情況
      console.log('Dialog dismissed.');
    });
  } catch (error) {
    // 處理對話框初始化失敗的情況
    console.error('Dialog error:', error);
    $q.notify({
      type: 'negative',
      color: 'accent',
      message: 'An error occurred while opening the confirmation dialog.', // 這裡也可以進行翻譯
    });
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

.cta-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: $primary;
  color: white;
  text-decoration: none;
  border-radius: 5px;
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

.btn-container {
  display: flex;
  justify-content: center; /* Horizontally center the button */
}

.clear-cart{
  font-size: 0.9rem;
  color: $primary;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

</style>