import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';
import VModal from 'vue-js-modal';
import ChartPlugin from './plugins/ChartPlugin.js';

Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true })
Vue.use(ChartPlugin)

new Vue({
  render: h => h(App),
  /*
  render function 의 간소화
  1
  render: function(createElement) {
    return createElement(App);
  }
  2
  render: function(h) {
    return h(App);
  }
  3
  render: (h) => {
    return h(App);
  }
  4
  render: h => h(App)

  */
  router,
  store,
}).$mount('#app')
