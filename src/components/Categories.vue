<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import AddCategoryIcon from './icons/AddCategoryIcon.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useRouter } from 'vue-router';

const store = useCategoryStore();
const authStore = useAuthStore();
const router = useRouter();
onMounted(() => {
    store.fetchCategories();
})

function logout() {
    authStore.clearToken();
    router.push({name:'auth'});
}

</script>

<template>
    <div class="category">
        <ul class="category__list list-reset">
            <li class="category__item" v-for="category in store.categories" :key="category.id">
                <RouterLink active-class="category__active" :to="`/main/${category.alias}`">
                    {{ category.name }}
                </RouterLink>
            </li>
        </ul>
        <AddCategoryIcon class="category__icon" @click="store.createCategory()" />
        <a href="#" class="category__logout" @click="logout">Выход</a>
    </div>
</template>

<style scoped lang="scss">
.category {
    display: flex;
    flex-direction: column;

    &__list {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    &__logout {
        font-size: 24px;
        color: var(--card-color);
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        font-weight: 700;

        &:hover {
            opacity: 0.5;
        }
    }

    &__item {
        a {
            font-size: 14px;
            color: var(--card-color);
            text-decoration: none;
            transition: all 0.2s ease-in-out;

            &:hover {
                font-size: 24px;
                font-weight: 700;
            }
        }

        &:not(:last-child) {
            margin-bottom: 34px;
        }
    }

    a.category__active {
        font-size: 24px;
        font-weight: 700;
    }

    &__icon {
        margin-bottom: 34px;
        width: 50px;
        height: 50px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
            scale: 1.2;
        }
    }
}
</style>