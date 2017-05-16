import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from 'store'

import Login from 'views/login/index.vue'
import Home from 'views/layout/home.vue'

// components
import TableDemo from 'views/table/index.vue'
import Introduction from 'views/introduction'
import Topo from 'views/topo'
import TreeTable from 'views/treeTable'

let routes = [
  {
    path: '/home',
    component: Home,
    meta: {
      requireAuth: false,
    },
    children: [
      {
        name: "Introduction",
        path: '/',
        component: Introduction
      },
      {
        name: "TableDemo",
        path: '/table',
        component: TableDemo
      },
      {
        path:'/topo/topoMgm',
        name:"Topo",
        meta: {
          displayName:'网络拓扑',
          requireAuth: false,
        },
        component: Topo
      },
      {
        path:'/treetable',
        name:"TreeTable",
        meta: {
          displayName:'树表',
          requireAuth: false,
        },
        component: TreeTable
      }
    ]
  },

  {
    name: 'Login',
    path: '/login',
    // component: resolve => void(require(['./views/login.vue'], resolve))
    // component: function(resolve) {require(['./views/login.vue'], resolve)}
    component: Login
  },
  {
    path: '*',
    redirect: '/login'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/eagles',
  routes
});

//todo 最主要的目的是 验证token ，若果木有token 跳转到login 登陆页面
//我们这可以 增加一个加载的浮层 ，在每次跳转路由时 加载浮层，
//由跳转结束关闭浮层路
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.login.token) { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
