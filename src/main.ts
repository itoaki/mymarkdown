import Vue from 'vue';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './scss/style.scss';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyAOxGaFAVkWmG98s9dEwv1J42D0n_h71oU',
  authDomain: 'itoaki-markdown.firebaseapp.com',
  databaseURL: 'https://itoaki-markdown.firebaseio.com',
  projectId: 'itoaki-markdown',
  storageBucket: 'itoaki-markdown.appspot.com',
  messagingSenderId: '1110639874',
  appId: '1:1110639874:web:b9ad1e75c6ec7ecc012e1b',
  measurementId: 'G-7V3BPVZQXS',
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
