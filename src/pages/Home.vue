<template>
  <div class="home container mx-auto px-4 py-8">
    <div class="flex flex-col items-center">
      <div class="logo-container mb-8 scroll-reveal">
        <img
          :src="logoSrc"
          alt="MOM POS Logo"
          class="logo max-w-full h-auto"
          loading="lazy"
          @load="onImageLoad"
          :class="{ 'fade-in': imageLoaded }"
        />

      </div>
      <h1 class="text-3xl font-bold text-center mb-3 scroll-reveal">歡迎使用 MomPos</h1>
      <section class="text-center max-w-2xl mx-auto mb-8 scroll-reveal">
        <h2 class="text-xl font-semibold mb-2 scroll-reveal primary-color" >最貼心的點餐 Pos 神器</h2>
        <p class="mb-4">
          MOM POS 是一款專為餐廳設計的銷售點系統（POS），旨在幫助餐廳提高營運效率，方便餐廳店主快速上手。
        </p>
        <v-typical
    class="blink text-lg font-semibold mb-2"
    :steps="[' 媽媽都說', 1000, ' 媽媽都說好用的', 500, ' 媽媽都說好用的 Pos 系統', 1000,' 媽媽都說好用的 Pos 系統👍',500]"
    :loop="2"
    :wrapper="'h2'"
  ></v-typical>
        <p class="mb-4">
          MOM POS 就像媽媽一樣的精打細算、細心周到，幫你省下時間，及精確的掌握店內營銷。包含了線上點餐、顧客追蹤、訂單管理。
        </p>
        <router-link to="/menu" class="cta-button">👉點餐去</router-link>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';
import VTypical from 'vue-typical';
import { useMenuStore } from '@/stores/menuStore';
import { useThemeStore } from '@/stores/themeStore';
import lightLogo from '@/assets/MomPosMainPage.webp';
import darkLogo from '@/assets/MomPosMainPageDark.webp';
import { Cookies } from 'quasar';

// Retrieve stores
const menuStore = useMenuStore();
const themeStore = useThemeStore();

// Dynamically determine the logo based on dark mode
const logoSrc = computed(() =>
  themeStore.isDarkMode ? darkLogo : lightLogo
);

// Handle image load state
const imageLoaded = ref(false);
const onImageLoad = () => {
  imageLoaded.value = true;
};


const token = Cookies.get('token');
console.log('Token from cookie:', token);

const loadToken = async () => {
  console.log('Waiting for token to be available...');
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay for 2 seconds
  const token2 = Cookies.get("token") ? Cookies.get("token") : ""
  console.log('Token from cookie (after delay):', token2);
};


// Scroll reveal animations
onMounted(async () => {
  ScrollReveal().reveal('.scroll-reveal', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    interval: 100,
    opacity: 0,
    scale: 1,
  });

  // Fetch all menus
  await menuStore.fetchAllMenus();
  await loadToken();
});
</script>


<style scoped lang="scss">
.scroll-reveal {
  visibility: hidden;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height:50vh;
  width: 100%;
  max-width: 50vh;
}
.logo {
  max-width: 50vh;
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.logo.fade-in {
  opacity: 1; /* 修改點：圖片加載完成後顯示 */
}

.primary-color {
  color: $primary;
}
.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: $primary;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 0px;
}
p {
  font-size: 1.25rem;
  line-height: 1.6;
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 1.5rem;
}

</style>