<template>
  <q-card class="rounded-borders" style="max-width: 50rem;">
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
      <q-btn label="Register" color="primary" @click="tryRegister" :disable="!account || !password || !userName"/>
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
const themeStore = useThemeStore();

const logoSrc = computed(() =>
        themeStore.isDarkMode ? darkLogo : lightLogo
      );

const tryRegister = async () => {
  // Validate input fields
  const validateInput = () => {
    let error = '';

    // Account validation
    if (account.value.length < 6 || account.value.length > 20) {
      error += 'Account must be 6-20 characters long. ';
    }
    if (!/^[a-zA-Z0-9._]+$/.test(account.value)) {
      error += 'Account must not include special characters other than "." and "_". ';
    }
    if (/[_\.]{2,}/.test(account.value)) {
      error += 'Account must not include consecutive special characters. ';
    }
    if (!/^[a-zA-Z0-9]/.test(account.value) || !/[a-zA-Z0-9]$/.test(account.value)) {
      error += 'Account must start and end with a letter or number. ';
    }
    if (/\b(admin|root)\b/.test(account.value)) {
      error += 'Account must not include reserved words like "admin" or "root". ';
    }

    // Password validation
    if (password.value.length < 8 || password.value.length > 20) {
      error += 'Password must be 8-20 characters long. ';
    }
    if (!/[a-zA-Z]/.test(password.value) || !/\d/.test(password.value)) {
      error += 'Password must include both letters and numbers. ';
    }

    return error;
  };

  const validationError = validateInput();
  if (validationError) {
    Notify.create({
      type: 'negative',
      message: validationError.trim(),
    });
    return; // Stop registration process if validation fails
  }

  try {
    await register({
      account: account.value,
      password: password.value,
      name: userName.value,
    });

    Notify.create({
      type: 'positive',
      message: 'Registration successful! Please login now',
    });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
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
