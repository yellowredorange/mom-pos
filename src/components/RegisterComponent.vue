<template>
  <q-card class="rounded-borders">
    <q-card-section>
      <div class="text-h6 text-center">{{ $t('register') }}</div>
    </q-card-section>
    <q-card-section>
      <div class="flex-center">
        <img
          :src="logoSrc"
          spinner-color="white"
          class="login-image"
        />
      </div>
      <q-input v-model="userName" :label="$t('userName')" outlined dense />
      <q-input v-model="account" :label="$t('account')" outlined dense />
      <q-input v-model="password" :label="$t('password')" type="password" outlined dense />
    </q-card-section>
    <q-card-actions align="center" class="card-margin">
      <q-btn 
        :label="$t('register')" 
        color="primary" 
        @click="tryRegister" 
        :disable="!account || !password || !userName" 
      />
      <q-btn 
        :label="$t('backToLogin')" 
        color="secondary" 
        @click="$emit('open-login')" 
      />
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
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
      error += `${t('accountLengthError')} `;
    }
    if (!/^[a-zA-Z0-9._]+$/.test(account.value)) {
      error += `${t('accountSpecialCharError')} `;
    }
    if (/[_\.]{2,}/.test(account.value)) {
      error += `${t('accountConsecutiveError')} `;
    }
    if (!/^[a-zA-Z0-9]/.test(account.value) || !/[a-zA-Z0-9]$/.test(account.value)) {
      error += `${t('accountStartEndError')} `;
    }
    if (/\b(admin|root)\b/.test(account.value)) {
      error += `${t('accountReservedWordError')} `;
    }

    // Password validation
    if (password.value.length < 8 || password.value.length > 20) {
      error += `${t('passwordLengthError')} `;
    }
    if (!/[a-zA-Z]/.test(password.value) || !/\d/.test(password.value)) {
      error += `${t('passwordComplexityError')} `;
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
      message: t('registerSuccess'),
    });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (error: any) {
    Notify.create({
      type: 'negative',
      message: error.message || t('registerFailed'),
    });
  }
};


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
.card-margin{
  margin-bottom: 1rem;
}
</style>
