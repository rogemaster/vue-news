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
  router,
  store,
}).$mount('#app')
