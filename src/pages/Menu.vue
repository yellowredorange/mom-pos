<template>
  <q-page class="q-pa-md">
    <div class="q-mb-md category-tabs-container">
      <q-tabs
        v-model="currentCategory"
        dense
        class="text-primary category-tabs"
        active-color="primary"
        indicator-color="primary"
        inline-label
        outside-arrows
        mobile-arrows
      >
        <q-tab v-for="category in categories" :key="category.categoryId" :name="category.categoryId">
          <template v-slot:default>
            <div class="row items-center">
              {{ category.name }}
            </div>
          </template>
        </q-tab>
      </q-tabs>
    </div>

    <div class="row q-col-gutter-md">
      <div v-for="item in currentItems" :key="item.menuItemId" class="col-12 col-sm-6 col-md-4">
        <q-card class="all-card" @click="viewDetails(item)">
          <q-img
            v-if="item.photoUrl && item.photoUrl !== ''"
            :src="item.photoUrl"
            :ratio="$q.screen.lt.sm?16/9:4/3"
            class="card-image" />
          <q-img v-else src="../assets/DefaultItemImage.webp"
          :ratio="$q.screen.lt.sm?16/9:4/3"
          class="card-image" />
          <q-card-section class="card-content">
            <div class="item-font ellipsis-2-lines">{{ item.name }}</div>
            <div class="text-subtitle2 ellipsis-2-lines">{{ item.description }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none card-footer">
            <div class="row items-center no-wrap q-mt-sm q-mb-xs">
            <div class="price-font col">
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
import { computed, onMounted, watch } from 'vue';
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
const currentItems = computed(() => {
  if (currentCategory.value) {
    const category = categories.value.find(c => c.categoryId === currentCategory.value);
    return category?.menuItems.slice().sort((a, b) => a.sortOrder - b.sortOrder) || [];
  }
  return [];
});

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
<style scoped lang="scss">
.all-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
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
.category-tabs-container {
  position: relative;
  overflow: hidden;
}

.q-tabs {
  overflow-x: auto;
  scrollbar-width: none; /* 對於 Firefox */
  -ms-overflow-style: none; /* 對於 Internet Explorer 和 Edge */
}

.q-tabs::-webkit-scrollbar {
  display: none; /* 對於 Chrome, Safari 和 Opera */
}

.q-tab {
  font-size: 1.5rem;
  font-weight: 500;
}

.scroll-indicator {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(to left, white, transparent);
  padding-left: 20px;
  pointer-events: none;
}
@media (min-width: 1024px) {
  .category-tabs {
    display: flex;
  }

  .category-tabs ::v-deep .q-tabs__content {
    width: 100%;
  }

  .category-tabs ::v-deep .q-tab {
    flex-grow: 1;
    flex-basis: 0;
  }
}
.item-font{
  font-size: 1.3rem;
  font-weight: 550;
  color: rgba(0, 0, 0, 0.8);;
}
.price-font{
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.8);;
}
@media (max-width: 599px) {
  .card-image {
    max-height: 6.25rem;
  }

  .text-h6 {
    font-size: 1.25rem ;
  }

  .text-subtitle2 {
    font-size: 1.1rem !important;
  }

  .q-card-section {
    padding: 12px !important;
  }

  .q-btn {
    font-size: 0.9rem;
    padding: 0.5em 1em; 
  }

}


</style>