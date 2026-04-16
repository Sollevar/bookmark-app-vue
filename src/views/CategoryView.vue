<script lang="ts" setup>
import CategoryHeader from '@/components/CategoryHeader.vue';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoryStore } from '@/stores/categories.store';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();


const currentCategory = computed(() =>
    categoryStore.getCategoryByAlias(route.params.alias)
);

watch(currentCategory, () => {
    bookmarkStore.getCategoryBookmarks(currentCategory.value?.id);
}, { immediate: true })
</script>

<template>
    <CategoryHeader v-if="currentCategory" :currentCategory="currentCategory"/>
</template>

<style scoped lang="scss">

</style>
