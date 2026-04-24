<script lang="ts" setup>
import AcceptIcon from '@/components/icons/AcceptIcon.vue';
import DeleteCategoryIcon from '@/components/icons/DeleteCategoryIcon.vue';
import EditCategoryIcon from '@/components/icons/EditCategoryIcon.vue';
import Input from '@/components/Input.vue';
import type { ICategory } from '@/interfaces/category.interface';
import { useCategoryStore } from '@/stores/categories.store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { currentCategory } = defineProps<{ currentCategory: ICategory }>();
const isEdited = ref<boolean>(false);
const newCategoryName = ref<string>(currentCategory.name);
const categoryStore = useCategoryStore();
const router = useRouter();

function toggle() {
    isEdited.value = !isEdited.value;
}

function updateCategory() {
    if (newCategoryName.value) {
        categoryStore.updateCategory(newCategoryName.value, currentCategory);
        toggle();
    }
    return;
}

function deleteCategory(){
    categoryStore.deleteCategory(currentCategory.id);
    router.push({
        name:'main'
    })
}

</script>

<template>
    <div class="category-header">
        <div class="category-header__label" v-if="isEdited">
            <Input v-model="newCategoryName" />
            <AcceptIcon @click="updateCategory" />
        </div>
        <span class="category-header__name" v-else>
            {{ currentCategory.name }}
        </span>
        <div class="category-header__tools">
            <button class="button-icon" @click="deleteCategory">
                <DeleteCategoryIcon />
            </button>
            <button class="button-icon" @click="toggle">
                <EditCategoryIcon />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.category-header {
    display: flex;
    max-height: 50px;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    &__name {
        font-size: 28px;
    }

    &__label {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__tools {
        display: flex;
        gap: 30px;

        svg {
            cursor: pointer;
        }
    }
}
</style>
