// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';

import fontawesome from '@fortawesome/fontawesome';
import faStar from '@fortawesome/fontawesome-free-regular/faStar';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

import 'element-ui/lib/theme-chalk/index.css';
import '@/sass/all.scss';

import App from './App';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(ElementUI);

fontawesome.library.add(faStar, faSearch, faGithub);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
