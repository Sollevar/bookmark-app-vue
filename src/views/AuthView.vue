<script setup lang="ts">
import { useAuthStore } from "@/stores/auth.store";
import Input from "../components/Input.vue"
import { ref, watch } from 'vue';
import { useRouter } from "vue-router";

const form = ref<{ email?: string, password?: string }>({});
const authStore = useAuthStore();
const router = useRouter();
watch(
    () => authStore.getToken,
    () => {
        if(authStore.getToken){
            router.push({name:'main'});
        }
    }
)
function onSubmit() {
    if (!form.value.email || !form.value.password) {
        return
    }
    authStore.login(form.value.email, form.value.password);
    form.value = {};
}
// email a@a.ru password 1

</script>
<template>
    <div class="auth">
        <h1 class="auth__logo">
            Bookmarkly
        </h1>
        <form class="auth__form" @submit.prevent="onSubmit">
            <Input type="email" placeholder="Email" v-model="form.email" />
            <Input type="password" placeholder="Password" v-model="form.password" />
            <button class="auth__btn" type="submit">Войти</button>
        </form>
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

    &__form {
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
    }

    &__btn {
        padding: 12px 32px;
        display: block;
        max-width: 105px;
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
