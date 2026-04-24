<script lang="ts" setup>
import { useBookmarkStore } from '@/stores/bookmark.store';
import CopyIcon from './icons/CopyIcon.vue';
import DeleteCategoryIcon from './icons/DeleteCategoryIcon.vue';
import type { IBookmark } from "@/interfaces/bookmark.interface";
const { image, title, url, id, category_id } = defineProps<IBookmark>();

function openLink() {
    window.open(url, '_blank');
};

const bookmarkStore = useBookmarkStore();


</script>

<template>
    <div class="bookmark">
        <img :src="image" alt="" class="bookmark__image">
        <p class="bookmark__descr">
            {{ title }}
        </p>
        <div class="bookmark__buttons">
            <button class="button-icon" @click="bookmarkStore.deleteBookmark(id, category_id)">
                <DeleteCategoryIcon fill="#FFFFFF" />
            </button>
            <button class="button-icon" @click="openLink">
                <CopyIcon />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bookmark {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    border-radius: 30px;
    background-color: var(--card-color);
    box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.1);
    gap: 24px;

    &__image {
        width: 100%;
        min-height: 162px;
        border-radius: 20px;
    }

    &__descr {
        margin: 0;
        font-size: 16px;
        color: var(--background-color);
    }

    &__buttons {
        width: 100%;
        display: flex;
        justify-content: space-around;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            border: 3px solid #fff;
            border-radius: 35px;
            cursor: pointer;
        }
    }
}
</style>
