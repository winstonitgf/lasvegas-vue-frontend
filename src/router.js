import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import guard from './utilities/guard';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', redirect: { name: 'home' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/home/Home.vue'),
      beforeEnter: guard,
      children: [
        {
          path: 'hot-sport',
          name: 'hot-sport',
          component: () => import(/* webpackChunkName: "hot-sport" */ './views/home/HotSport.vue'),
        },
        {
          path: 'running-ball',
          name: 'running-ball',
          component: () => import(/* webpackChunkName: "running-ball" */ './views/home/RunningBall.vue'),
        },
      ],
    },
  ],
});
