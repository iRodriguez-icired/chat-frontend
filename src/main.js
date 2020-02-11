import Vue from 'vue';
import Toasted from 'vue-toasted';
import ActionCableVue from 'actioncable-vue';
import {BootstrapVue} from 'bootstrap-vue';
import VueResource from 'vue-resource';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from './store';
import router from './router';
import App from './App.vue';
import i18n from './locales';

Vue.config.productionTip = false;

Vue.use(Toasted);
Vue.use(ActionCableVue, {
  debug: true,
  debugLevel: 'error',
  connectionUrl: 'ws://localhost:3000/chat',
  connectImmediately: false
});
Vue.use(BootstrapVue);
Vue.use(VueResource);

new Vue({
  i18n,
  router,
  store,
  render: h => { return h(App); }
}).$mount('#app');
