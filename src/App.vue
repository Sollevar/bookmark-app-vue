<script setup lang="ts">
import { onMounted } from 'vue';
import Profile from './components/Profile.vue';
import { API_ROUTES } from './api';
import type { IProfile } from './interfaces/profile.interface';
import { useProfileStore } from './stores/profile.store';

const store = useProfileStore();

async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile);
  const res = await data.json() as IProfile;
  store.profileData = res;
};

onMounted(() =>{
  fetchProfile()
});
</script>

<template>
  <main class="main">
    <Profile v-if="store.profileData" :name="store.profileData?.name"/>
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
