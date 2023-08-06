import Vue from 'vue'
import VueRouter from 'vue-router'
import PageLogin from '../pages/PageLogin.vue'
import PageMenu from '../pages/PageMenu.vue'

Vue.use(VueRouter);

const useMock = true;

const routes = [
  {
    path: '/',
    name: 'login',
    component: PageLogin,
    meta: { requiresAuth: false, requiresGuest: true }
  },
  {
    path: '/menu/:slug/',
    name: 'menu',
    component: PageMenu,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

if (!useMock) {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // Проверяем, требуется ли авторизация для маршрута
      if (!localStorage.getItem('token')) {
        // Если токен отсутствует, перенаправляем на страницу входа
        next('/');
      } else {
        next();
      }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      // Проверяем, требуется ли гостевой доступ для маршрута
      if (localStorage.getItem('token')) {
        // Если токен присутствует, перенаправляем на защищенный маршрут
        next('/menu/dashboard');
      } else {
        next();
      }
    } else {
      next();
    }
  });
}

export default router
