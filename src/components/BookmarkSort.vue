<script lang="ts" setup>
const SORT_OPTIONS = [
    { sortKey: 'date', name: 'По дате' },
    { sortKey: 'title', name: 'По названию' },
];

const { sortKey } = defineProps<{ sortKey: string }>();
const emit = defineEmits<{
    (e: 'sort', sortKey: string): void;
}>();

</script>
<template>
    <div class="sort">
        <button v-for="item in SORT_OPTIONS" :key="item.sortKey" class="sort__btn"
            :class="sortKey == item.sortKey ? 'active' : ''" @click="emit('sort', item.sortKey)">
            {{ item.name }}
        </button>
    </div>
</template>
<style lang="scss" scoped>
.sort {
    display: flex;
    gap: 20px;

    &__btn {
        padding: 0;
        border: none;
        background-color: unset;
        font-size: 16px;
        color: var(--inactive-item-color);
        cursor: pointer;
    }

    &__btn.active {
        color: var(--card-color);
        border-bottom: 2px solid var(--card-color);
        font-weight: 700;
    }
}
</style>
