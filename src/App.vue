<script setup lang="ts">
import Profile from './components/Profile.vue';
import Categories from './components/Categories.vue';
</script>

<template>
  <main class="main">
    <div class="panel">
      <Profile/>
      <Categories/>
    </div>
    <div class="content">
      Контент
    </div>
  </main>
</template>

<style scoped>
.main{
  margin: 140px auto 0 auto;
  display: flex;
  max-width: 1450px;
}
.panel{
  min-width: 400px;
}
</style>
