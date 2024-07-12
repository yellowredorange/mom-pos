<template>
  <div class="home">
    <h1>Welcome to MomPos</h1>
    <p>Explore our delicious menu and place your order!</p>
    <router-link to="/menu" class="cta-button">View Menu</router-link>
  </div>
</template>

<script lang="ts" setup>
// 首頁暫時不需要特別的邏輯
</script>

<style scoped>
.home {
  padding: 20px;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}
</style>