<template>
    <div class="enter" :class="{ enter_error: error }">
        <span class="enter__text">{{ text }}</span>
        <input v-model="textInput" :type="type" class="enter__input">
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        error: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    computed: {
        textInput: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    }

}
</script>

<style lang="less">
.enter {
    position: relative;

    &__text {
        display: block;
        padding-bottom: 6px;
    }

    &__input {
        position: relative;
        padding: 8px 12px;
        width: 100%;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        color: #101828;
        border-radius: 8px;
        border: 1px solid #D0D5DD;
        transition: border .3s ease;

        &::placeholder {
            color: #667085;
        }

        &:focus {
            border: 1px solid #7AA1F8;
        }

        .enter_error & {
            border: 1px solid #FDA29B;

            &::before {
                content: '';
                position: absolute;
                right: 12px;
                bottom: 12px;
                display: block;
                width: 16px;
                height: 16px;
                background-image: url(../../assets/images/alert.svg);
                background-size: 100%;
            }
        }
    }

    &_error {
        &::before {
            content: '';
            position: absolute;
            right: 12px;
            bottom: 12px;
            display: block;
            width: 16px;
            height: 16px;
            background-image: url(../../assets/images/alert.svg);
            background-size: 100%;
        }
    }
}
</style>