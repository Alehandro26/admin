<template>
    <aside class="sidebar">
        <router-link to="/menu/dashboard/" class="sidebar__item">Дешборд</router-link>
        <router-link to="/menu/statistics/" class="sidebar__item">Статистика</router-link>
        <router-link to="/menu/settings/" class="sidebar__item">Настройки</router-link>
        <div class="sidebar__item" @click="logout">Выйти из аккаунта</div>
    </aside>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push({name: 'login'});
        }
    }
}
</script>

<style lang="less">
.sidebar {
    display: flex;
    flex-direction: column;

    &__item {
        padding: 14px 14px 14px 72px;
        color: #475366;
        font-size: 12px;
        font-style: normal;
        font-weight: 800;
        line-height: 20px;
        border-radius: 12px;
        background-repeat: no-repeat;
        background-position: 24px 12px;
        cursor: pointer;
        transition: color .3s ease, background .3s ease;

        &:hover {
            background: #fff;
            opacity: 0.9;
            background-repeat: no-repeat;
            background-position: 24px 12px;
        }

        &:not(:last-child) {
            margin-bottom: 3px;
        }

        &:first-child {
            background-image: url(../../assets/images/dashboard.svg);
        }

        &:nth-child(2) {
            background-image: url(../../assets/images/statistics.svg);
        }

        &:nth-child(3) {
            background-image: url(../../assets/images/settings.svg);
        }

        &:last-child {
            background-image: url(../../assets/images/logout.svg);
        }

        &.router-link-exact-active {
            background: #FFF;
            color: var(--main-color);
            opacity: 1;

            &:first-child {
                background-image: url(../../assets/images/dashboard_active.svg);
                background-repeat: no-repeat;
                background-position: 24px 12px;
            }

            &:nth-child(2) {
                background-image: url(../../assets/images/statistics_active.svg);
                background-repeat: no-repeat;
                background-position: 24px 12px;
            }

            &:nth-child(3) {
                background-image: url(../../assets/images/settings_active.svg);
                background-repeat: no-repeat;
                background-position: 24px 12px;
            }

        }
    }
}
</style>