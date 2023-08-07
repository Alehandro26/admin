<template>
    <section class="statistics">
        <header class="statistics__header">
            <h2 class="statistics__title">Статистика</h2>
            <div class="statistics__filter">
                <date-pick v-model="from" type="text" class="statistics__input" :weekdays="lang.weekdays"
                    :months="lang.months"></date-pick>
                &nbsp;-&nbsp;
                <date-pick v-model="to" type="text" class="statistics__input" :weekdays="lang.weekdays"
                    :months="lang.months"></date-pick>
                <button class="statistics__button button" @click="dataStatistics(from, to)">Применить</button>
            </div>
        </header>
        <div v-if="statistics" class="statistics__content">
            <ul v-for="item in list" :key="item.name" class="statistics__list">
                <li class="statistics__item">{{ item.name }}</li>
                <li class="statistics__item">{{ item.value }}</li>
            </ul>
        </div>
    </section>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import { getStatistics } from '@/api';

export default {
    components: {
        DatePick
    },
    data() {
        return {
            from: '',
            to: '',
            lang: {
                months: [
                    'Январь',
                    'Февраль',
                    'Март',
                    'Апрель',
                    'Май',
                    'Июнь',
                    'Июль',
                    'Август',
                    'Сентябрь',
                    'Октябрь',
                    'Ноябрь',
                    'Декабрь'
                ],
                weekdays: [
                    'Вс',
                    'Пн',
                    'Вт',
                    'Ср',
                    'Чт',
                    'Пт',
                    'Сб'
                ],
            },
            statistics: null
        }
    },
    computed: {
        list() {
            return [{
                name: 'Заголовок',
                value: 'Значение'
            },
            {
                name: 'Активные подписчики',
                value: this.statistics?.activeSubscribers || 0
            },
            {
                name: 'Клики на стартовую кнопку',
                value: this.statistics?.startButtonClicks || 0
            },
            {
                name: 'Общее количество подписчиков',
                value: this.statistics?.totalSubscribers || 0
            },
            {
                name: 'Оставшиеся пользователи',
                value: this.statistics?.unsubscribedUsers || 0
            }]
        }
    },
    async created() {
        await this.dataStatistics();
    },
    methods: {
        async dataStatistics(start, end) {
            if (start && end) {
                this.statistics = await getStatistics(start, end);
                return;
            }
            this.statistics = await getStatistics();
        },
    }
}
</script>

<style lang="less">
@import '../../styles/vars.less';

.statistics {
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media @tablet {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    &__title {
        font-size: 28px;
        font-weight: 800;
        line-height: 20px;

        @media @tablet {
            padding-bottom: 20px;
        }
    }

    &__filter {
        display: flex;
        align-items: center;
    }

    &__input {
        padding: 8px 14px;
        width: 128px;
        border-radius: 8px;
        border: 1px solid #D0D5DD;
        color: #101828;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

        @media @tablet {
            padding: 4px 7px;
        }

        @media @mobile {
            width: 68px;
            font-size: 10px;
        }

        &.vdpWithInput>input {
            width: 100%;
            padding: 0;
            font-size: inherit;
        }

        .vdpClearInput {
            display: none;
        }

        .vdpInnerWrap {
            min-width: 260px;
        }

        .vdpPeriodControl>button {
            font-size: 20px;
            padding: 10px 6px;
            color: #475366;
        }

        .vdpHeadCellContent {
            font-size: 12px;
        }

        .vdpArrowNext:after {
            border-left-color: var(--main-color);
        }

        .vdpArrowPrev:after {
            border-right-color: var(--main-color);
        }

        .vdpCellContent {
            font-size: 14px;
        }

        .vdpCell.selectable:hover .vdpCellContent {
            background: #85d48d;
        }

        .vdpCell.selected .vdpCellContent {
            background: var(--main-color);
        }

    }

    &__button {
        padding: 0 14px;
        align-self: stretch;
        margin-left: 24px;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        border-radius: 8px;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

        @media @tablet {
            padding: 0 8px;
        }

        @media @mobile {
            font-size: 12px;
            margin-left: 10px;
        }
    }

    &__content {
        margin-top: 24px;
        border-radius: 6px;
        border: 0.5px solid var(--color-split, rgba(0, 0, 0, 0.06));
        overflow: hidden;
    }

    &__list {
        display: flex;
        align-items: center;
        width: 100%;

        &:first-child {
            .statistics__item {
                background: rgba(71, 83, 102, 0.02);
                color: #475366;
                font-weight: 600;
            }
        }
    }

    &__item {
        padding: 8px;
        flex: 1 1 50%;
        align-self: stretch;
        border: 0.5px solid rgba(0, 0, 0, 0.06);
        color: rgba(0, 0, 0, 0.88);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;

    }
}
</style>