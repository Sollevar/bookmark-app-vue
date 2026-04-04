<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store';
import { onMounted } from 'vue';

const store = useProfileStore();

onMounted(() =>{
  store.fetchProfile();
});
</script>

<template>
    <div class="profile" v-if="store.profileData">
        <img src="/public/images/profile-image.jpg" alt="изображение профиля" class="profile__image">
        <span class="profile__desr">
            Привет, <strong>{{ store.profileData.name }}</strong>
        </span>
    </div>
</template>

<style scoped>
.profile{
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 18px;
}
.profile__image{
    width: 80px;
    height: 80px;
    border-radius: 100%;
}
</style>