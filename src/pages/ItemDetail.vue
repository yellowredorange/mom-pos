<template>
  <q-page class="q-pa-md" v-if="currentMenuItem">
    <q-img :src="currentMenuItem.photoUrl" style="height: 200px;" />

    <div class="text-h4 q-mt-md">{{ currentMenuItem.name }}</div>

    <div class="q-mt-md">
      <q-btn-group>
        <q-btn icon="remove" @click="decreaseQuantity" />
        <q-btn :label="quantity" />
        <q-btn icon="add" @click="increaseQuantity" />
      </q-btn-group>
    </div>

    <div v-if="currentMenuItem.menuItemOptions" class="q-mt-md">
      <div class="text-h6">Options:</div>
      <q-option-group
        v-for="(options, category) in groupedOptions"
        :key="category"
        :options="options"
        type="radio"
        v-model="selectedOptions[category]"
      />
    </div>

    <q-btn color="primary" class="full-width q-mt-md" label="Add to Cart" @click="addToCart" />

    <div class="text-body1 q-mt-md">{{ currentMenuItem.description }}</div>
    <div class="text-caption q-mt-sm">Supporting line text lorem ipsum dolor sit amet, consectetur.</div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="shopping_cart" color="primary" @click="goToCart">
        <q-badge color="red" floating>{{ cartItemCount }}</q-badge>
      </q-btn>
    </q-page-sticky>
  </q-page>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <q-inner-loading showing>
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useMenuStore } from '../stores/menuStore';
import{SelectedOption} from'../interfaces/Order'
const route = useRoute();
const router = useRouter();
const menuStore = useMenuStore();
const { currentMenuItem, error } = storeToRefs(menuStore);

const quantity = ref(1);
const selectedOptions = ref<Record<string, string>>({});

const cartItemCount = computed(() => menuStore.cartItemCount);

const groupedOptions = computed(() => {
  if (!currentMenuItem.value || !currentMenuItem.value.menuItemOptions) return {};
  return currentMenuItem.value.menuItemOptions.reduce((acc: Record<string, {label: string, value: string}[]>, option) => {
    if (!acc[option.optionCategory]) {
      acc[option.optionCategory] = [];
    }
    acc[option.optionCategory].push({
      label: `${option.option} (+$${option.additionalPrice.toFixed(2)})`,
      value: option.option
    });
    return acc;
  }, {});
});

onMounted(async () => {
  const itemId = parseInt(route.params.id as string);
  if (menuStore.menuConfigurations.length === 0) {
    await menuStore.fetchAllMenus();
  }
  menuStore.setCurrentMenuItem(itemId);
  if (currentMenuItem.value && currentMenuItem.value.menuItemOptions) {
    currentMenuItem.value.menuItemOptions.forEach(option => {
      if (!selectedOptions.value[option.optionCategory]) {
        selectedOptions.value[option.optionCategory] = '';
      }
    });
  }
});

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  if (currentMenuItem.value) {
    const selectedOptionsList: SelectedOption[] = Object.entries(selectedOptions.value).map(([category, option]) => {
      const menuItemOption = currentMenuItem.value!.menuItemOptions.find(
        o => o.optionCategory === category && o.option === option
      );
      return {
        category,
        option,
        additionalPrice: menuItemOption ? menuItemOption.additionalPrice : 0
      };
    });

    menuStore.addToCart(currentMenuItem.value, quantity.value, selectedOptionsList);
    router.push('/menu');
  }
};

const goToCart = () => {
  router.push('/cart');
};
</script>