<template>
  <div class="menu">
    <CHeader />
    <div class="menu__wrapper">
      <CSidebar class="menu__sidebar" />
      <div class="menu__content">
        <CStatistics v-if="$route.params.slug === 'statistics'" />
        <CSettings v-if="$route.params.slug === 'settings'" />
        <CDashboard v-if="$route.params.slug === 'dashboard'" />
      </div>
    </div>
  </div>
</template>

<script>
import CSidebar from '../components/CSidebar/CSidebar.vue';
import CHeader from '../components/CHeader/CHeader.vue';
import CStatistics from '../components/CStatistics/CStatistics.vue';
import CSettings from '../components/CSettings/CSettings.vue';
import CDashboard from '../components/CDashboard/CDashboard.vue';

export default {
  components: { CHeader, CSidebar, CStatistics, CSettings, CDashboard },
}
</script>

<style lang="less">
.menu {
  padding: 32px 28px 28px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__wrapper {
    padding-top: 40px;
    display: flex;
    flex: 1;
  }

  &__sidebar {
    flex: 0 0 256px;
    margin-right: 26px;
  }

  &__content {
    width: 100%;
    height: 100%;
    padding: 32px;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(96, 108, 128, 0.05);
  }
}
</style>
