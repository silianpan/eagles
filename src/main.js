// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import "babel-polyfill";
import $ from 'jquery'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)

import store from './store'
import i18n from './i18n'
import axios from 'api/http'
import 'mock/index.js';  //使用api请求时请将此行注释，不然将被mock拦截

// 引用样式
import 'element-ui/lib/theme-default/index.css'
import 'assets/theme/index.css'
import 'assets/css/base.css'
import 'assets/css/system.css'
import 'assets/css/main.css'
import 'assets/css/color-dark.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

// 生产模式下不提示
Vue.config.productionTip = false
// 默认http请求是axios
Vue.prototype.$http = axios;
// 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。
Vue.config.devtools = true;
// 取消 Vue 所有的日志与警告。true:取消
Vue.config.silent = false;

// 生产环境错误日志
if (process.env === 'production') {
  Vue.config.errorHandler = function(err, vm) {
    console.log(err, window.location.href);
    errLog.pushLog({
      err,
      url: window.location.href,
      vm
    })
  };
}

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
