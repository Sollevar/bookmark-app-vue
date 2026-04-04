<script setup lang="ts">
import Profile from './components/Profile.vue';
</script>

<template>
  <main class="main">
     <Profile/>
    <div class="panel">
      <nav class="nav">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </nav>  
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
