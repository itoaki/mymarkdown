import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './scss/style.scss';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  iconfont: 'fa' || 'mdi',
 });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
