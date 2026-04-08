<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain(){
    router.push({
        name:'auth',
    })
}
</script>
<template>
    <div class="not-found">
        <h1 class="not-found__title">
            404
        </h1>
        <button @click="redirectToMain()" class="not-found__btn">На главную</button>
    </div>
</template>
<style scoped>
.not-found{
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.not-found__title{
    margin: 0;
    font-size:152px;
    font-weight: 700;
}

.not-found__btn{
    padding: 12px 32px;
    display: block;
    border-radius: 25px;
    border: 1px solid transparent;
    background-color: var(--primary-color);
    color: var(--background-color);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

}

.not-found__btn:hover{
    background-color:var(--background-color) ;
    color: var(--primary-color);
    border-color: var(--primary-color);
}
</style>

