<template>
  <q-card class="rounded-borders" style="max-width: 500px;">
    <q-card-section>
      <div class="text-h6">Edit Profile</div>
    </q-card-section>
    <q-card-section>
      <q-input v-model="user.name" label="Name" outlined dense />
      <q-input v-model="user.email" label="Email" outlined dense />
      <q-input v-model="user.phone" label="Phone" outlined dense />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn label="Save" color="primary" @click="saveProfile" />
      <q-btn flat label="Cancel" color="secondary" @click="$emit('close')" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const user = ref({ ...authStore.user });

const saveProfile = async () => {
  if (!user.value.name || !user.value.email) {
    alert('Name and Email are required.');
    return;
  }

  const success = await authStore.updateProfile(user.value);
  if (success) {
    alert('Profile updated successfully!');
    $emit('close'); // 關閉彈窗
  } else {
    alert('Failed to update profile. Please try again.');
  }
};
</script>
