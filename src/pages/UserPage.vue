<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="user-page-container">
      <!-- User Profile Section -->
      <q-card class="user-profile-bar">
        <q-card-section class="row items-center">
          <q-btn flat round @click="" icon="fas fa-user" />
          <div class="q-ml-md">
            <div class="text-h6" style="font-weight:700">{{ userStore.user?.userName || $t('guest') }}</div>
            <div>{{ translatedPermission  }}</div>
          </div>
        </q-card-section>
      </q-card>

      <q-card v-if="authStore.permission" class="logout-bar" @click="logout">
        <q-card-section class="logout-text">
          <div class="text-h6" style="font-weight:700">{{ $t('logout') }}</div>
        </q-card-section>
      </q-card>

      <q-card v-if="!authStore.permission" class="logout-bar" @click="login">
        <q-card-section class="logout-text">
          <div class="text-h6" style="font-weight:700">{{ $t('login') }}</div>
        </q-card-section>
      </q-card>

      <!-- Dialogs -->
      <q-dialog v-model="showLogin">
        <login-component @open-register="openRegister" @close="closeLogin" />
      </q-dialog>
      <q-dialog v-model="showRegister">
        <register-component @open-login="openLogin" @close="closeRegister" />
      </q-dialog>
      <q-dialog v-model="showProfile">
        <user-profile-component @close="showProfile = false" />
      </q-dialog>
      <q-dialog v-model="showOrderDetails">
        <user-history-order-component :order="selectedOrder" @close="showOrderDetails = false" />
      </q-dialog>
    </div>

    <div class="qa-container beautiful-shadow">
      <div class="text-h6 flex flex-center qa-title">{{ $t('qaTitle') }}</div>
      <div class="qa-list">

        <div class="qa-item">
  <div class="q-text">
    <strong>{{ $t('question') }}:</strong> {{ $t('passwordRevealQuestion') }}
  </div>
  <div class="a-text">
    <strong>{{ $t('answer') }}:</strong>
    {{ $t('passwordRevealAnswerPart1') }}
    {{ $t('passwordRevealAnswerPart2') }}
  </div>
</div>

          <div class="qa-item">
          <div class="q-text">
            <strong>{{ $t('question') }}:</strong> {{ $t('shopperQuestion') }}
          </div>
          <div class="a-text">
            <strong>{{ $t('answer') }}:</strong>
            {{ $t('shopperAnswerPart1') }}
            <span class="clickable-text" @click="becomeAdmin">{{ $t('shopperAnswerPart3') }}</span>
            {{ $t('shopperAnswerPart4') }}
          </div>
        </div>

        <div class="qa-item">
          <div class="q-text">
            <strong>{{ $t('question') }}:</strong> {{ $t('selfBuildQuestion') }}
          </div>
          <div class="a-text">
            <strong>{{ $t('answer') }}:</strong>
            {{ $t('selfBuildAnswerPart1') }}
            <a href="javascript:void(0)" class="clickable-link" @click="$router.push('/project-details')">{{ $t('selfBuildAnswerPart3') }}</a>
            {{ $t('selfBuildAnswerPart4') }}
            {{ $t('selfBuildAnswerPart5') }}
            <a 
  href="mailto:yellowredorange1999@gmail.com?subject=About%20Project%20MomPos" 
  class="clickable-link"
>{{ $t('selfBuildAnswerPart7') }}</a>
            {{ $t('selfBuildAnswerPart8', { email: 'yellowredorange1999@gmail.com' }) }}
          </div>
        </div>


      </div>

      </div>
  </q-page>
</template>



<script setup lang="ts">
import { ref,onMounted, computed } from 'vue';
import { useUserStore } from '../stores/userStore';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
import RegisterComponent from '../components/RegisterComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';

import { AxiosError } from 'axios';
import {useQuasar } from 'quasar';
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const $q = useQuasar();
const userStore = useUserStore();
const showLogin = ref(false);
const showRegister = ref(false);
const showProfile = ref(false);
const showOrderDetails = ref(false);
const selectedOrder = ref(null);

const openLogin = () => {
  showRegister.value = false;
  showLogin.value = true;
};

const openRegister = () => {
  showLogin.value = false;
  showRegister.value = true;
};

const closeLogin = () => {
  showLogin.value = false;
};

const closeRegister = () => {
  showRegister.value = false;
};

const logout = () => {
  $q.dialog({
    title: t('confirmLogout'), // 國際化的標題
    message: t('confirmLogoutMessage'), // 國際化的訊息
    ok: { label: t('logout'), color: 'primary' }, // 國際化的按鈕標籤
    cancel: { label: t('cancel'), color: 'primary', outline: true }, // 國際化的按鈕標籤
    persistent: true,
  }).onOk(() => {
    userStore.logout();
    authStore.logout();
    isInitialized = false;
    router.push('/');

    // Notify user of successful logout
    $q.notify({
      color: 'secondary',
      message: t('logoutSuccess'), // 國際化的成功訊息
    });
  }).onCancel(() => {
    // Optional: Log or handle cancel action
    $q.notify({
      color: 'primary',
      message: t('logoutCanceled'), // 國際化的取消訊息
    });
  });
};

const login = () => {
  showLogin.value=true;
  }
let isInitialized = false;

const authStore = useAuthStore();
const translatedPermission = computed(() => {
  const permission = authStore.permission?.toLowerCase();
  if (!permission) return t('notLoggedIn'); // Default for no permission
  return t(`permissions.${permission}`);
});

const becomeAdmin = () => {
  authStore.setPermission('admin');
  router.push('/menu-editor');
};

onMounted(async () => {
  if (!authStore.permission || !authStore.userId) {
    showLogin.value = true;
    return;
  }
  if(isInitialized){
    return;
  }
  try {
    await userStore.fetchUserInfo(parseInt(authStore.userId));
    isInitialized=true;
  } catch (error) {
    if ((error as AxiosError).response?.status === 401) {
      showLogin.value = true;
    } else {
      console.error('Unexpected error:', error);
    }
  }
});

</script>

<style scoped lang="scss">
.user-page-container {
  width: 100%;
  max-width: 50rem;
}

.beautiful-shadow{
  border: 0.1rem solid #ffcc00; 
  box-shadow: 3px 6px 10px rgba(255, 230, 0, 0.5);
}

.user-profile-bar {
  padding: 1vh;
  height: 15vh;
  border-radius: 1rem;
  background-color: #ffa600;
  color: #fff;
  display: flex;
  align-items: center; /* 垂直置中 */
  margin-bottom: 1rem;
}

.order-history-bar {
  height: auto; /* Allow height to adjust to content */
  max-height: 50vh; /* Add a maximum height for scrollable content */
  border-radius: 12px;
  margin-bottom: 1rem;
  padding: 1rem; /* Add padding to avoid content overflowing */
  overflow-y: auto; /* Enable scrolling if content exceeds max-height */
}


.logout-bar {
  height: 10vh;
  border-radius: 12px;
  background-color: #ffa600;
  display: flex;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}

.history-title{
  color:#ffa600;
  font-weight:700;
}

.logout-text{
  display: flex;
}

.qa-container {
  margin-top: 1rem;
  padding: 1rem;
  border: 0.1rem solid #ffcc00;
  box-shadow: 3px 6px 10px rgba(255, 230, 0, 0.5);
  border-radius: 12px;
  max-width: 50rem;
}

.qa-title {
  color: #ffa600;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}

.qa-list {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Adds spacing between Q&A entries */
}

.qa-item {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.q-text,
.a-text {
  margin-bottom: 0.5rem;
  word-wrap: break-word; /* Handle long words or URLs */
}

.q-btn {
  margin-left: 0.5rem;
  font-size: 0.9rem;
}

.clickable-text {
  color: #ffa600; /* Highlight color */
  text-decoration: underline; /* Add underline for link appearance */
  cursor: pointer; /* Change cursor to pointer on hover */
}

.clickable-text:hover {
  color: #ff8800; /* Change color on hover for feedback */
}

.clickable-link {
  color: #ffa600; /* Highlight color */
  text-decoration: underline; /* Underline to resemble a link */
  cursor: pointer; /* Change cursor to pointer */
}

.clickable-link:hover {
  color: #ff8800; /* Change color on hover for feedback */
}

</style>
