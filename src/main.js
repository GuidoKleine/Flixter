import Vue from 'vue';
import store from '@/store';
import App from './App.vue';
import '@babel/polyfill';
import 'mutationobserver-shim';
import './plugins/bootstrap-vue';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
