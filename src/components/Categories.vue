<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';

const store = useCategoryStore();
onMounted(() => {
    store.fetchCategories();
})
</script>

<template>
    <ul class="category__list list-reset">
        <li class="category__item" v-for="category in store.categories" :key="category.id">
            <a :href="`${category.alias}`">{{ category.name}}</a>
        </li>
    </ul>
</template>

<style scoped>
.category__list{
    margin-top: 40px;
}

.category__item:not(:last-child){
    margin-bottom: 34px;
}

.category__item a{
    font-size: 14px;
    color: var(--card-color);
    text-decoration: none;
    transition: all 0.2s ease-in-out;
}

.category__item a:hover{
    font-size: 24px;
    font-weight: 700;
}
</style>