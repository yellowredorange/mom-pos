<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="user-page-container">
      <!-- User Profile Section -->
      <q-card class="user-profile-bar">
        <q-card-section class="row items-center">
          <q-btn flat round @click="" icon="fas fa-user" />
          <div class="q-ml-md">
            <div class="text-h6" style="font-weight:700">{{ userStore.user?.userName || 'Guest' }}</div>
            <div>{{ permissionUpper || 'Not logged in' }}</div>
          </div>
        </q-card-section>
      </q-card>

      <q-card v-if="permission" class="logout-bar" @click="logout">
        <q-card-section class="logout-text">
          <div class="text-h6" style="font-weight:700">Logout</div>
        </q-card-section>
      </q-card>

      <q-card v-if="!permission" class="logout-bar" @click="login">
        <q-card-section class="logout-text">
          <div class="text-h6" style="font-weight:700">Login</div>
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

    <!-- Q&A Section -->
    <!-- Q&A Section -->
<div class="qa-container beautiful-shadow">
  <div class="text-h6 flex flex-center qa-title">Q & A</div>
  <div class="qa-list">
    <!-- Question 2 -->
    <div class="qa-item">
      <div class="q-text">
        <strong>Q:</strong> Will you reveal my password?
      </div>
      <div class="a-text">
        <strong>A:</strong> No. I use PasswordHasher in .NET Core, so your password is securely hashed and never actually stored in the database. Don't worry. You can also just use a fake password to register.
      </div>
    </div>

    <!-- Question 3 -->
    <div class="qa-item">
      <div class="q-text">
        <strong>Q:</strong> Did you build this on your own?
      </div>
      <div class="a-text">
        <strong>A:</strong> Yes, I built both the frontend and backend by myself. 
        Click 
        <a href="javascript:void(0)" class="clickable-link" @click="$router.push('/project-details')">here</a>
        to see the details of how I built this. I initially thought it would be a simple website, but it became much more complicated and cost me a lot of time. 🫠 If you'd like to give me some advice, just click 
        <a href="javascript:void(0)" class="clickable-link" @click="$router.push('/feedback')">here</a>. Thank you!
      </div>
    </div>

    <!-- Question 1 -->
    <div class="qa-item">
      <div class="q-text">
        <strong>Q:</strong> Can I become a shopper to build my own menu?
      </div>
      <div class="a-text">
        <strong>A:</strong> Yes, but not yet. It's still in the beta phase. You can click
        <span class="clickable-text" @click="becomeAdmin">here</span>
        to explore the menu editor, but you can't save changes to the backend yet.
      </div>
    </div>
  </div>
</div>

  </q-page>
</template>


<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { useUserStore } from '../stores/userStore';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
import RegisterComponent from '../components/RegisterComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';

import { AxiosError } from 'axios';
import { useQuasar } from 'quasar';
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
  if (confirm('Are you sure you want to logout?')) {
    userStore.logout();
    $q.cookies.remove('token')
    $q.cookies.remove('permission')
    $q.cookies.remove('userId')
    isInitialized=false;
    window.location.href = '/user';
  } 
};

const login = () => {
  showLogin.value=true;
  } 
let isInitialized = false;
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[2]) : null;
}

const token = getCookie('token');
const userId = getCookie('userId');
const permission = getCookie('permission');
const permissionUpper=permission?.toUpperCase()
console.log(token)

const becomeAdmin = () => {
  // Remove the 'permission' cookie
  $q.cookies.remove('permission');

  // Add a new 'permission' cookie with value 'admin'
  $q.cookies.set('permission', 'admin', {
    path: '/', // Ensure the cookie applies to the entire site
    expires: 1, // Optional: Set expiration (1 day in this case)
  });

  window.location.href = `${window.location.origin}/#/menu-editor`;
  setTimeout(() => {
    window.location.reload();
  }, 2000);
};

onMounted(async () => {
  console.log("yooo");
  if (!token || !userId) {
    showLogin.value = true;
    return;
  }
  if(isInitialized){
    return;
  }
  try {
    await userStore.fetchUserInfo(parseInt(userId));
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
  max-width: 1000px;
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
