<script setup lang="ts">
import Profile from '../components/Profile.vue';
import Categories from '../components/Categories.vue';
</script>

<template>
  <main class="main">
    <div class="panel">
      <Profile/>
      <Categories/>
    </div>
    <RouterView/>
  </main>
</template>

<style scoped lang="scss">
.main{
  margin: 140px auto 0 auto;
  display: flex;
  max-width: 1450px;
}
.panel{
  min-width: 320px;
}
</style>
