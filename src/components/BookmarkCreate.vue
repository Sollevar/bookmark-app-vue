<script lang="ts" setup>
import { ref } from 'vue';
import Input from '@/components/Input.vue';
import AcceptIcon from '@/components/icons/AcceptIcon.vue';
import { useBookmarkStore } from '@/stores/bookmark.store';

const isEdited = ref<boolean>(false);
const inputBookmark = ref<string>();
const bookmarksStore = useBookmarkStore();
const {categoryId} = defineProps<{categoryId: number}>();

function toggle() {
    isEdited.value = !isEdited.value;
}
function createBookmark(){
    if(inputBookmark.value){
        bookmarksStore.createBookmark(inputBookmark.value, categoryId);
        inputBookmark.value = '';
        toggle();
    }
    return;
}
</script>
<template>
    <div class="create">
        <div class="create__label" v-if="isEdited">
            <Input placeholder="Вставьте ссылку" v-model="inputBookmark" />
            <AcceptIcon @click="createBookmark" />
        </div>
        <button class="create__btn" @click="toggle" v-else>
            <span></span>
            <span></span>
        </button>
    </div>
</template>
<style lang="scss" scoped>
.create {
    border-radius: 25px;
    min-height: 345px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed var(--card-color);

    &__label {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__btn {
        padding: 0;
        position: relative;
        border: none;
        border-radius: 100%;
        background-color: var(--primary-color);
        width: 48px;
        height: 48px;
        cursor: pointer;
        transition: opacity 0.2s ease-in-out;

        &:hover {
            opacity: 0.7;
        }

        span {
            position: absolute;
            top: 22px;
            left: 14px;
            display: block;
            width: 20px;
            height: 3px;
            background-color: var(--background-color);

            &:last-child {
                transform: rotate(90deg);
            }
        }
    }
}
</style>
