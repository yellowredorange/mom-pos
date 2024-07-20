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
        <q-card class="all-card">
          <q-img
            v-if="item.photoUrl && item.photoUrl !== ''"
            :src="item.photoUrl"
            :ratio="$q.screen.lt.sm?16/9:4/3"
            class="card-image" />
          <q-img v-else src="../assets/DefaultItemImage.webp"
          :ratio="$q.screen.lt.sm?16/9:4/3"
          class="card-image" />
          <q-card-section class="card-content">
            <div class="text-h6 ellipsis-2-lines"><strong>{{ item.name }}</strong></div>
            <div class="text-subtitle2 ellipsis-2-lines">{{ item.description }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none card-footer">
            <div class="row items-center no-wrap q-mt-sm q-mb-xs">
            <div class="text-h6 col">
              ${{ item.price.toFixed(2) }}</div>
              <div class="col-auto">
              <q-btn color="primary" label="Add to Cart" @click="viewDetails(item)" /></div>
              </div>
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
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../stores/menuStore';

const router = useRouter();
const menuStore = useMenuStore();
const { categories } = storeToRefs(menuStore);
const currentCategory = computed({
  get: () => menuStore.currentCategory?.categoryId || null,
  set: (value: number | null) => menuStore.setCurrentCategory(value)
});
const currentItems = computed(() =>
  currentCategory.value ? categories.value.find(c => c.categoryId === currentCategory.value)?.menuItems : []
);

const cartItemCount = computed(() => menuStore.cartItemCount);

onMounted(async () => {
  await menuStore.checkMenuUpdate();
  if (menuStore.lastSelectedCategory !== null) {
    currentCategory.value = menuStore.lastSelectedCategory;
  } else if (categories.value.length > 0) {
    currentCategory.value = categories.value[0].categoryId;
  }
});

const viewDetails = (item: { menuItemId: any; }) => {
  router.push(`/item/${item.menuItemId}`);
};

const goToCart = () => {
  router.push('/cart');
};

watch(currentCategory, (newValue) => {
  if (newValue !== null) {
    menuStore.lastSelectedCategory = newValue;
  }
});
</script>
<style scoped>
.all-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-image {
  max-height: 18.75rem;
  object-fit: cover;
}

.card-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-footer {
  margin-top: auto;
}

.ellipsis-2-lines {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 599px) {
  .card-image {
    max-height: 6.25rem;
  }
}
</style>