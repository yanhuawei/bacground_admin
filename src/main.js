import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局引入axios
import axios from "axios";
Vue.prototype.$axios = axios;

// 全局引入ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import http from "./http/http.js";
Vue.prototype.$http = http;
//引入封装的http方法 并挂载为全局的方法

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
