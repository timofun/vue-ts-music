import Vue from 'vue';
import Router from 'vue-router';
import Discovery from './views/Discovery/Discovery.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/discovery',
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: Discovery,
    },
    {
      path: '/video',
      name: 'video',
      component: () => import(/* webpackChunkName: "video" */ './views/Video/Video.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "mine" */ './views/Mine/Mine.vue'),
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import(/* webpackChunkName: "singer" */ './views/Singer/Singer.vue'),
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: () => import(/* webpackChunkName: "accounts" */ './views/Accounts/Accounts.vue'),
    },
  ],
});
