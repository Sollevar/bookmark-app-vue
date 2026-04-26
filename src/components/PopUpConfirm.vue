<script lang="ts" setup>
const { isOpen, text } = defineProps<{ isOpen: boolean, text: string }>();
const emit = defineEmits<{
    (e: 'accept'): void,
    (e: 'cancel'): void
}>();
</script>
<template>
    <Transition name="fade">
        <Teleport to="body">
            <div class="popup" v-if="isOpen">
                <div class="popup__content">
                    <p class="popup__text">
                        {{ text }}
                    </p>
                    <div class="popup__actions">
                        <button class="popup__btn" @click="emit('accept')">Да</button>
                        <button class="popup__btn" @click="emit('cancel')">Нет</button>
                    </div>
                </div>
            </div>
        </Teleport>
    </Transition>
</template>
<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active, .fade-leave-active{
    transition: opacity 0.3s ease-in-out;
}

.popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--inactive-item-color);


    &__content {
        padding: 20px;
        border-radius: 20px;
        background-color: var(--background-color);
        max-width: 350px;
    }

    &__text {
        color: var(--primary-color);
        font-size: 16px;
    }

    &__actions {
        display: flex;
        gap: 12px;
    }

    &__btn {
        padding: 7px 14px;
        background-color: unset;
        border: none;
        border-radius: 12px;
        background-color: var(--primary-color);
        border: 1px solid var(--primary-color);
        color: var(--background-color);
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color: var(--background-color);
            color: var(--primary-color);
        }
    }
}
</style>
