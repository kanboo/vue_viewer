import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Page from '@/components/Page';
import test from '@/components/test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
});
