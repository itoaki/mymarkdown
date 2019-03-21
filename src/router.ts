import Vue from 'vue';
import Router from 'vue-router';
import Top from './views/Top.vue';
import Terms from './views/Terms.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top,
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms,
    },
  ],
});
