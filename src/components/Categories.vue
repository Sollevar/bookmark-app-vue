<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import AddCategoryIcon from './icons/AddCategoryIcon.vue';

const store = useCategoryStore();
onMounted(() => {
    store.fetchCategories();
})

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