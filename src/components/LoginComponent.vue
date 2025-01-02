<template>
  <q-card class="rounded-borders">
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
    <div style="font-size: 1rem; text-align: center; margin-bottom: 1rem;">
  <div>Do not have account?</div>
  <div 
    style="color: #FDA300; cursor: pointer; font-weight: bold;" 
    @click="$emit('open-register')">
    Click For Register!
  </div>
</div>

      <q-input v-model="account" label="Account" outlined dense />
      <q-input v-model="password" label="Password" type="password" outlined dense />
    </q-card-section>
    <q-card-actions align="center">
      <q-btn label="Login" color="primary" :disable="!account || !password" @click="tryLogin" class="login-button" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Notify } from 'quasar';
import lightLogo from '@/assets/MomPosMainPage.webp';
import darkLogo from '@/assets/MomPosMainPageDark.webp';
import { useThemeStore } from '@/stores/themeStore';
import { login } from '../api/MomPosApi';
const account = ref('');
const password = ref('');
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const redirectTo = typeof route.query.from === 'string' ? route.query.from : '/'



const themeStore = useThemeStore();
const tryLogin = async () => {
  // Validate account and password
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
    return; // Stop login process if validation fails
  }

  try {
    await login({ account: account.value, password: password.value });
    Notify.create({
      type: 'positive',
      message: 'Login successful!',
    });
    router.push(redirectTo);
    setTimeout(() => {
      window.location.reload();
    }, 0);
  } catch (error: any) {
    Notify.create({
      type: 'negative',
      message: error.message || 'Login failed. Please try again.', // Use the thrown error message
    });
  }
};



// Dynamic logo source based on theme
const logoSrc = computed(() =>
        themeStore.isDarkMode ? darkLogo : lightLogo
      );

</script>

<style scoped>
.login-image {
  height: auto;
  max-width: 20vh;
  max-height: 20vh;
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
.login-button{
  margin-bottom: 1rem;
}
</style>
