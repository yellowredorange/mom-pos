<template>
  <q-card class="rounded-borders" style="max-width: 400px;">
    <q-card-section>
      <div class="text-h6">Login</div>
    </q-card-section>
    <q-card-section>
      <q-input v-model="account" label="Account" outlined dense />
      <q-input v-model="password" label="Password" type="password" outlined dense />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn label="Login" color="primary" @click="login" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const account = ref('');
const password = ref('');
const authStore = useAuthStore();

const login = async () => {
  if (!account.value || !password.value) {
    alert('Please fill in both fields.');
    return;
  }

  const success = await authStore.login({ account: account.value, password: password.value });
  if (success) {
    alert('Login successful!');
  } else {
    alert('Invalid credentials, please try again.');
  }
};
</script>
