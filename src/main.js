import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll';
import {BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueChatScroll);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
