<template>
  <q-card class="rounded-borders" style="max-width: 400px;">
    <q-card-section>
      <div class="text-h6 text-center ">Welcome!</div>
    </q-card-section>
    <q-card-section>
      <div class="flex-center">
      <img
        :src="logoSrc"
        spinner-color="white"
        class="login-image"
      />
    </div>
      <q-input v-model="account" label="Account" outlined dense />
      <q-input v-model="password" label="Password" type="password" outlined dense />
    </q-card-section>
    <q-card-actions align="center">
      <q-btn label="Login" color="primary" @click="login" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const account = ref('');
const password = ref('');
import lightLogo from '@/assets/MomPosMainPage.webp';
import darkLogo from '@/assets/MomPosMainPageDark.webp';
import { useThemeStore } from '@/stores/themeStore'; // Adjust the path to your theme store

const themeStore = useThemeStore();
const login = async () => {
  if (!account.value || !password.value) {
    alert('Please fill in both fields.');
    return;
  }
  
  alert('Login successful!');
};

// Dynamic logo source based on theme
const logoSrc = computed(() =>
        themeStore.isDarkMode ? darkLogo : lightLogo
      );

</script>

<style scoped>
.login-image {
  height: auto;
  width: 100%;
  max-width: 10rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-center {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  height: 100%; /* 可選，確保容器有高度 */
}
</style>
