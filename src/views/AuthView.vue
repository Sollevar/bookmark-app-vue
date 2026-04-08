<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
    router.push({
        name: 'main',
    })
}
</script>
<template>
    <div class="auth">
        <h1 class="auth__logo">
            Bookmarkly
        </h1>
        <button @click="redirectToMain()" class="auth__btn">войти</button>
    </div>
</template>
<style scoped lang="scss">
.auth {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;

    &__logo {
        margin: 0;
        font-size: 52px;
        font-weight: 700;
    }

    &__btn {
        padding: 12px 32px;
        display: block;
        border-radius: 25px;
        border: 1px solid transparent;
        background-color: var(--primary-color);
        color: var(--background-color);
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            background-color: var(--background-color);
            color: var(--primary-color);
            border-color: var(--primary-color);
        }
    }
}
</style>
