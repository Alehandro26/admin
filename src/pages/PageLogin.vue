<template>
  <div class="home">
    <div class="home__wrapper">
      <h2 class="home__title">Авторизация</h2>
      <CEnter v-model="username" class="home__enter" text="Имя пользователя" :error="errorEnter" />
      <CEnter v-model="password" class="home__enter" text="Пароль" :error="errorEnter" type="password" />
      <button class="home__button button" @click="enter">Войти</button>
    </div>
  </div>
</template>

<script>
import CEnter from '../components/CEnter/CEnter.vue'
import { login } from '../api/index'

export default {
  name: 'PageLogin',
  components: {
    CEnter
  },
  data() {
    return {
      username: '',
      password: '',
      errorEnter: false
    }
  },
  mounted() {
    window.addEventListener('keypress', this.enterOnKey)
  },
  beforeDestroy() {
    window.removeEventListener('keypress', this.enterOnKey)
  },
  methods: {
    async enter() {
      const data = await login(this.username, this.password);

      if (!data) {
        this.errorEnter = !data;
      }
    },
    enterOnKey(e) {
      if (e.charCode === 13) {
        this.enter();
      }
    }
  }
}
</script>

<style lang="less">
@import '../styles/vars.less';

.home {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    padding: 36px;
    width: 588px;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    background: #FFF;

    @media @tablet {
      margin: 0 20px;
    }
  }

  &__title {
    margin-bottom: 24px;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
  }

  &__enter {
    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }

  &__button {
    padding: 16px 28px;
    border-radius: 8px;
    border: 1px solid var(--primary-600, #7F56D9);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;

    @media @tablet {
      padding: 12px 21px;
    }
  }
}
</style>
