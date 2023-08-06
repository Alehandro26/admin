<template>
    <section v-if="loaded" class="settings">
        <h2 class="settings__title">Настройки</h2>
        <div class="settings__wrapper">
            <CEnter v-model="promocode" class="settings__input" text="Промокод" />
            <CEnter v-model="link" class="settings__input" text="Ссылка" />
            <button class="settings__button button" @click="sendSettings">Применить</button>
        </div>
    </section>
</template>

<script>
import CEnter from '../CEnter/CEnter.vue';
import { getSettings, sendSettings } from '@/api';

export default {
    components: {
        CEnter
    },
    data() {
        return {
            promocode: '',
            link: '',
            loaded: false,
        }
    },
    mounted() {
        this.getSettings();
    },
    methods: {
        async getSettings() {
            const { promoCode, promoCodeLink } = await getSettings();
            this.promocode = promoCode || '';
            this.link = promoCodeLink || '';
            this.loaded = true;
        },
        async sendSettings() {
            if (this.promocode && this.link) {
                await sendSettings(this.promocode, this.link)
            }
        }
    }
}
</script>

<style lang="less">
.settings {

    &__title {
        margin-bottom: 24px;
        font-size: 28px;
        font-style: normal;
        font-weight: 800;
        line-height: 20px;
    }

    &__wrapper {
        width: 320px;
    }

    &__input {
        &:first-child {
            margin-bottom: 18px;
        }
    }

    &__button {
        padding: 10px 14px;
        margin-top: 24px;
        border-radius: 8px;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    }
}
</style>