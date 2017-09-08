// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import Vuefire from 'vuefire';

import App from './App';
import router from './router';
import firebase from './service/firebase';

Vue.config.productionTip = false;
Vue.use(Vuefire);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    cat: firebase.database.ref('cat').orderByChild('created_at'),
  },
  router,
  template: '<App/>',
  components: { App },
});
