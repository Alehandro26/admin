<template>
    <div class="dashboard">
        <router-link to="/menu/statistics/" class="dashboard__link">
            <img src="../../assets/images/statistics_active.svg" alt="" class="dashboard__image">
            <span class="dashboard__text">Статистика</span>
        </router-link>
        <router-link to="/menu/settings/" class="dashboard__link">
            <img src="../../assets/images/settings_active.svg" alt="" class="dashboard__image">
            <span class="dashboard__text">Настройки</span>
        </router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.dashboard {
    display: flex;

    &__link {
        flex: 1;
        padding: 24px;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        border: 1px solid #E2E9F1;

        &:first-child {
            margin-right: 24px;
        }

        &:hover {
            .dashboard__image {
                transform: scale(1.1);
            }

            &:last-child {
                .dashboard__image {
                    animation: rotate 1s ease forwards;
                }
            }
        }
    }

    &__image {
        width: 40px;
        margin-bottom: 48px;
        transition: transform .3s ease;
    }

    &__text {
        color: var(--main-color);
        font-size: 18px;
        font-style: normal;
        font-weight: 800;
        line-height: 20px;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(180deg) scale(1.2);
    }
    100% {
        transform: rotate(180deg);
    }
}
</style>