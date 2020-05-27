import Vue from "vue";
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import storeOptions from "./store/index";

// Vuex
Vue.use(Vuex);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const store = new Vuex.Store(storeOptions);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
