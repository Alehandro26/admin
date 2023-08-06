<template>
    <header class="header">
        <img src="../../assets/images/avatar.jpeg" alt="" class="header__image">
        <div class="header__wrapper">
            <span class="header__name">@bot</span>
            <h3 class="header__title">Свинюша</h3>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="less">
.header {
    display: flex;
    align-items: center;

    &__image {
        margin-right: 12px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }

    &__wrapper {}

    &__name {
        margin-bottom: 6px;
        color: #A0AEC0;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
    }

    &__title {
        font-size: 14px;
        font-style: normal;
        font-weight: 800;
        line-height: 100%;
    }
}
</style>