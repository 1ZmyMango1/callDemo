import Vue from 'vue'
import Router from 'vue-router'

// 系统相关
import app from '@/router/app.js'


Vue.use(Router)
// 后续可添加模块,app模块放最后因为404跳转放路由最后
const constantRouterMap = app

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
