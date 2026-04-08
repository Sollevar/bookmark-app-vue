<template>
    <div class="index">
        <h2 class="index__title">
            Добро пожаловать в Bookmarkly!
        </h2>
        <p class="index__descr">
            Чтобы начать пользоваться выберите категорию закладок или создайте новую
        </p>
    </div>
</template>

<style scoped lang="scss">
.index {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
        margin: 0;
        margin-bottom: 25px;
        font-size: 24px;
        font-weight: 500;
        color: var(--card-color);
    }

    &__descr {
        margin: 0;
        font-size: 16px;
        color: var(--card-color);
    }
}
</style>
