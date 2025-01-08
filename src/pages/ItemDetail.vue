<template>
  <q-page class="q-pa-md flex flex-center" v-if="currentMenuItem">
    <q-btn
      icon="arrow_back"
      flat
      round
      dense
      class="absolute-top-left q-ma-md"
      @click="goBack"
      style="z-index: 999;"
    />
    <div class="column items-center" style="width: 100%; max-width: 600px;">
      <div class="full-width flex justify-center q-mb-md">
        <q-img
          v-if="currentMenuItem.photoUrl && currentMenuItem.photoUrl !== ''"
          :src="currentMenuItem.photoUrl"
          :ratio="1"
          fit="cover"
          style="width: 50vh; height: 50vh;"
          spinner-color="primary"
        />
        <q-img
          v-else
          src="@/assets/DefaultItemImage.webp"
          :ratio="1"
          fit="cover"
          style="width: 50vh; height: 20vh;"
          spinner-color="primary"
        />
      </div>
      
      <div class="text-h5 q-mt-md text-center"><strong>{{ currentMenuItem.name }}</strong></div>
      
      <div class="text-h6 q-mt-sm text-center">${{ totalPrice.toFixed(2) }}</div>

      <div class="q-mt-md">
        <q-btn-group>
          <q-btn icon="remove" @click="decreaseQuantity" />
          <q-btn style="font-size: 1.25rem;" :label="quantity" />
          <q-btn icon="add" @click="increaseQuantity" />
        </q-btn-group>
      </div>

      <div v-if="currentMenuItem.menuItemOptions" class="q-mt-md full-width">
        <div v-for="(options, category) in groupedOptions" :key="category" class="q-mb-sm">
          <div class="text-h6 text-center" style="margin-bottom:0.6rem">{{ category }}:</div>
          <div class="row justify-center q-gutter-sm">
            <q-btn
              v-for="option in options"
              :key="option.value"
              :label="`${option.label} +$${option.additionalPrice.toFixed(2)}`"
              :color="selectedOptions[category] === option.value ? 'primary' : 'grey-6'"
              text-color="white"
              @click="selectOption(category, option.value)"
              class="col-auto"
            />
          </div>
        </div>
      </div>

      <q-btn color="primary" class="q-mt-md q-px-xl" :label=" $t('add-to-cart') " @click="addToCart" style="font-size: 1.1rem;"/>

      <div class="text-h6 q-mt-md text-center">{{ currentMenuItem.description }}</div>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 40]">
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
import { SelectedOption } from '../interfaces/Order';

const route = useRoute();
const router = useRouter();
const menuStore = useMenuStore();
const { currentMenuItem, error } = storeToRefs(menuStore);

const quantity = ref(1);
const selectedOptions = ref<Record<string, string>>({});

const cartItemCount = computed(() => menuStore.cartItemCount);

const groupedOptions = computed(() => {
  if (!currentMenuItem.value || !currentMenuItem.value.menuItemOptions) return {};
  return currentMenuItem.value.menuItemOptions.reduce((acc: Record<string, {label: string, value: string, additionalPrice: number}[]>, option) => {
    if (!acc[option.optionCategory]) {
      acc[option.optionCategory] = [];
    }
    acc[option.optionCategory].push({
      label: option.option,
      value: option.option,
      additionalPrice: option.additionalPrice
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
        const firstOption = groupedOptions.value[option.optionCategory][0];
        selectedOptions.value[option.optionCategory] = firstOption.value;
      }
    });
  }
});

const selectOption = (category: string, value: string) => {
  selectedOptions.value[category] = value;
};

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
const goBack = () => {
  router.push('/menu');
};

const totalPrice = computed(() => {
  let price = currentMenuItem.value ? currentMenuItem.value.price : 0;
  Object.entries(selectedOptions.value).forEach(([category, option]) => {
    const menuItemOption = currentMenuItem.value?.menuItemOptions.find(
      o => o.optionCategory === category && o.option === option
    );
    if (menuItemOption) {
      price += menuItemOption.additionalPrice;
    }
  });
  return price * quantity.value;
});
</script>
<style scoped lang="scss">



</style>