<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue';

const model = defineModel<string>();
const { isFocused = false } = defineProps<{ isFocused?: boolean }>();
const input = useTemplateRef<HTMLInputElement>('input');

onMounted(() => {
    if (isFocused && input.value) {
        input.value.focus();
    }
})
</script>
<template>
    <input class="input" v-model="model" ref="input" />
</template>
<style lang="scss" scoped>
.input {
    width: 230px;
    border: none;
    border-bottom: 1px solid var(--card-color);
    color: var(--card-color);
    font-size: 24px;

    &::placeholder {
        color: var(--inactive-item-color);
    }
}
</style>
