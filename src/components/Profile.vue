<script setup lang="ts">
const { name } = defineProps<{ name: string }>();
</script>

<template>
    <div class="profile">
        <img src="/public/images/profile-image.jpg" alt="изображение профиля" class="profile__image">
        <span class="profile__desr">
            Привет, <strong>{{ name }}</strong>
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