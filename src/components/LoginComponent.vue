<template>
  <q-card class="rounded-borders">
    <q-card-section>
      <div class="text-h6 text-center ">{{ $t('welcome') }}</div>
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
        <div>{{ $t('noAccount') }}</div>
        <div 
          style="color: #FDA300; cursor: pointer; font-weight: bold;" 
          @click="$emit('open-register')">
          {{ $t('clickForRegister') }}
        </div>
      </div>
      <q-input v-model="account" :label="$t('account')" outlined dense />
      <q-input v-model="password" :label="$t('password')" type="password" outlined dense />
    </q-card-section>
    <q-card-actions align="center">
      <q-btn 
        :label="$t('login')" 
        color="primary" 
        :disable="!account || !password" 
        @click="tryLogin" 
        class="login-button" 
      />
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n(); // 使用 i18n 的翻譯方法

const tryLogin = async () => {
  // Validate account and password
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
    return; // Stop login process if validation fails
  }

  try {
    await login({ account: account.value, password: password.value });
    Notify.create({
      type: 'positive',
      message: t('loginSuccess'),
    });
    router.push(redirectTo);
    setTimeout(() => {
      window.location.reload();
    }, 0);
  } catch (error: any) {
    Notify.create({
      type: 'negative',
      message: error.message || t('loginFailed'),
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
