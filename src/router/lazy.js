import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/layouts/PageView'
import RouteView from '@/layouts/RouteView'
import MenuView from '@/layouts/MenuView'
// import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/login',
    //   name: '登录页',
    //   component: Login,
    //   invisible: true
    // },
    {
      path: '/',
      name: '首页',
      component: MenuView,
      redirect: '/efficiency/company',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/efficiency',
          name: '组织效能',
          component: RouteView,
          icon: 'dashboard',
          children: [
            {
              path: '/efficiency/company',
              name: '公司效能',
              component: () => import('@/pages/dashboard/WorkPlace'),
              icon: 'none'
            },
            {
              path: '/efficiency/department',
              name: '部门效能',
              component: () => import('@/pages/dashboard/Analysis'),
              icon: 'none'
            }
          ]
        },
        {
          path: '/develop',
          name: '员工发展',
          component: PageView,
          icon: 'form',
          children: [
            {
              path: '/develop/pandect',
              name: '公司总览',
              component: () => import('@/pages/form/BasicForm'),
              icon: 'none'
            },
            {
              path: '/develop/survey',
              name: '部门概况',
              component: () => import('@/pages/form/stepForm/StepForm'),
              icon: 'none'
            },
            {
              path: '/develop/personage',
              name: '个人发展',
              component: () => import('@/pages/form/advancedForm/AdvancedForm'),
              icon: 'none'
            }
          ]
        },
        {
          path: '/statement',
          name: '报表中心',
          component: PageView,
          icon: 'table',
          children: [
            {
              path: '/statement/center',
              name: '报表概况',
              component: () => import('@/pages/list/QueryList'),
              icon: 'none'
            },
          ]
        },
        {
          path: '/payment',
          name: '部门薪酬',
          icon: 'profile',
          component: PageView,
          children: [
            {
              path: '/payment/situation',
              name: '部门薪酬概况',
              icon: 'none',
              component: () => import('@/pages/detail/BasicDetail')
            },
          ]
        },
        {
          path: '/emolument',
          name: '员工薪酬',
          icon: 'check-circle-o',
          component: PageView,
          children: [
            {
              path: '/emolument/status',
              name: '员工薪酬概况',
              icon: 'none',
              component: () => import('@/pages/result/Success')
            },
          ]
        },
      ]
    }
  ]
})
