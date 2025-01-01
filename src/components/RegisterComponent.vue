<template>
  <q-card class="rounded-borders" style="max-width: 400px;">
    <q-card-section>
      <div class="text-h6 text-center">Register</div>
    </q-card-section>
    <q-card-section>
      <div class="flex-center">
      <img
        :src="logoSrc"
        spinner-color="white"
        class="login-image"
      />
    </div>
     <q-input v-model="userName" label="User Name" outlined dense />
      <q-input v-model="account" label="Account" outlined dense />
      <q-input v-model="password" label="Password" type="password" outlined dense />
    </q-card-section>
    <q-card-actions align="center" class="card-margin">
      <q-btn label="Register" color="primary" @click="tryRegister" class="" />
      <q-btn label="Back to Login" color="secondary" @click="$emit('open-login')" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Notify } from 'quasar';
import { register } from '../api/MomPosApi';
import { useThemeStore } from '@/stores/themeStore';
import lightLogo from '@/assets/MomPosMainPage.webp';
import darkLogo from '@/assets/MomPosMainPageDark.webp';
const account = ref('');
const password = ref('');
const userName = ref('');
const showLogin = ref(false); // Control LoginComponent visibility
const themeStore = useThemeStore();
const openLogin = () => {
  showLogin.value = true;
};

const logoSrc = computed(() =>
        themeStore.isDarkMode ? darkLogo : lightLogo
      );
      
const tryRegister = async () => {
  try {
    // const result = await register({ account: account.value, password: password.value });
    Notify.create({
      type: 'positive',
      message: 'Registration successful!',
    });
  } catch (error: any) {
    Notify.create({
      type: 'negative',
      message: error.message || 'Registration failed. Please try again.',
    });
  }
};
</script>

<style scoped>
.login-image {
  height: auto;
  width: 100%;
  max-width: 10rem;
  margin-bottom: 1rem;
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
.card-margin{
  margin-bottom: 1rem;
}
</style>
