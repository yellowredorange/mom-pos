<template>
  <q-page class="q-pa-md">
    <div class="q-mb-md">
      <q-tabs
        v-model="currentCategory"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab v-for="category in categories" :key="category.categoryId" :name="category.categoryId" :label="category.name" />
      </q-tabs>
    </div>

    <div class="row q-col-gutter-md">
      <div v-for="item in currentItems" :key="item.menuItemId" class="col-12 col-sm-6 col-md-4">
        <q-card class="my-card">
          <q-img :src="item.photoUrl" />

          <q-card-section>
            <div class="text-h6">{{ item.name }}</div>
            <div class="text-subtitle2">{{ item.description }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5 q-mt-sm q-mb-xs">${{ item.price.toFixed(2) }}</div>
            <q-btn color="primary" label="Add to Cart" @click="viewDetails(item)" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="shopping_cart" color="primary" @click="goToCart">
        <q-badge color="red" floating>{{ cartItemCount }}</q-badge>
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../stores/menuStore';

const router = useRouter();
const menuStore = useMenuStore();
const { categories } = storeToRefs(menuStore);
const currentCategory = ref<number | null>(null);
const currentItems = computed(() =>
  currentCategory.value ? categories.value.find(c => c.categoryId === currentCategory.value)?.menuItems : []
);

const cartItemCount = computed(() => menuStore.cartItemCount);

onMounted(async () => {
  await menuStore.fetchAllMenus();
  if (categories.value.length > 0) {
    currentCategory.value = categories.value[0].categoryId;
  }
});

const viewDetails = (item: { menuItemId: any; }) => {
  router.push(`/item/${item.menuItemId}`);
};

const goToCart = () => {
  router.push('/cart');
};
</script>