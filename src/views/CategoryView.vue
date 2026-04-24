<script lang="ts" setup>
import Bookmark from '@/components/Bookmark.vue';
import BookmarkSort from '@/components/BookmarkSort.vue';
import CategoryHeader from '@/components/CategoryHeader.vue';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoryStore } from '@/stores/categories.store';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();

const currentCategory = computed(() =>
    categoryStore.getCategoryByAlias(route.params.alias)
);

function sortBookmarks(sort:string){
    console.log(sort);
    bookmarkStore.activeSort = sort;
    bookmarkStore.getCategoryBookmarks(currentCategory.value?.id, bookmarkStore.activeSort);
}

watch(currentCategory, () => {
    bookmarkStore.getCategoryBookmarks(currentCategory.value?.id, bookmarkStore.activeSort);
}, { immediate: true });
</script>

<template>
    <div class="category-view">
        <CategoryHeader v-if="currentCategory" :currentCategory="currentCategory" />
        <BookmarkSort :sortKey="bookmarkStore.activeSort" @sort="sortBookmarks"/>
        <div class="category-list">
            <Bookmark v-for="bookmark in bookmarkStore.bookmarks" v-bind="bookmark" :key="bookmark.id"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.category-view {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 70px;
}

.category-list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>
