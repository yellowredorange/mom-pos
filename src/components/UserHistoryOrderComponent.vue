<template>
  <q-card class="rounded-borders" style="max-width: 600px;">
    <q-card-section>
      <div class="text-h6">Order Details</div>
    </q-card-section>
    <q-card-section>
      <q-list>
        <q-item v-for="item in order.items" :key="item.id">
          <q-item-section>{{ item.name }}</q-item-section>
          <q-item-section>{{ item.quantity }}</q-item-section>
          <q-item-section>{{ item.price }}</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Close" color="secondary" @click="$emit('close')" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['order']);
</script>
