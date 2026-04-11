<script lang="ts" setup>
const model = defineModel<string>();
</script>
<template>
    <input class="input" v-model="model">
</template>
<style lang="scss" scoped>
.input {
    min-width: 274px;
    border: none;
    border-bottom: 1px solid var(--card-color);
    color: var(--card-color);
    font-size: 24px;

    &::placeholder {
        color: var(--inactive-item-color);
    }
}
</style>
