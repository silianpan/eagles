import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import "babel-polyfill";
import $ from 'jquery'
import TreeTable from 'libs/treeTable/jquery.treeTable'
import Ht from 'libs/ht/core/ht'
import HtAutolayout from 'libs/ht/plugin/ht-autolayout.js'
import HtOverview from 'libs/ht/plugin/ht-overview.js'
import 'libs/artDialog/css/ui-dialog.css'
import artDialog from 'libs/artDialog/dialog-plus'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)

import App from './App'
import router from './router'
import axios from './api/http'
import store from './store'
// 引用样式
import 'element-ui/lib/theme-default/index.css'
import 'assets/theme/index.css'
import 'assets/css/base.css'
import 'assets/css/system.css'
import 'assets/css/main.css'
import 'assets/css/color-dark.css'
import 'assets/css/graphyDetail.css'
import 'libs/treeTable/default/jquery.treeTable.css'
import 'assets/css/jquery.gridster.css'
import 'assets/css/jquery.dataTables.min.css'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(TreeTable)
Vue.use(Ht)
Vue.use(HtAutolayout)
Vue.use(HtOverview)

// 生产模式下不提示
Vue.config.productionTip = false;
// 默认http请求是axios
Vue.prototype.$http = axios;
// 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。
Vue.config.devtools = true;
// 取消 Vue 所有的日志与警告。true:取消
Vue.config.silent = false;

// import ElementLocale from 'element-ui/lib/locale'
import i18n from './i18n'
// ElementLocale.i18n(key => i18n.t(key))
// Vue.use(ElementUI, {
//   i18n: key => i18n.vm._t(key)
// })

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
