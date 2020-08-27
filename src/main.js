import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';

import App from './App.vue';
import router from './router';
import store from './store';

import '@fortawesome/fontawesome-free/css/all.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vue2TouchEvents);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
