import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/dashboard/Analysis'
// import NotFound from '@/pages/exception/404'
// import NotPermit from '@/pages/exception/403'
// import ServerError from '@/pages/exception/500'
import PageView from '@/layouts/PageView'
import RouteView from '@/layouts/RouteView'
import MenuView from '@/layouts/MenuView'
import BasicForm from '@/pages/form/BasicForm'
import StepForm from '@/pages/form/stepForm/StepForm'
import AdvancedForm from '@/pages/form/advancedForm/AdvancedForm'
import Success from '@/pages/result/Success'
// import Error from '@/pages/result/Error'
import QueryList from '@/pages/list/QueryList'
// import StandardList from '@/pages/list/StandardList'
// import CardList from '@/pages/list/CardList'
// import SearchLayout from '@/pages/list/search/SearchLayout'
// import ArticleList from '@/pages/list/search/ArticleList'
// import ApplicationList from '@/pages/list/search/ApplicationList'
// import ProjectList from '@/pages/list/search/ProjectList'
import WorkPlace from '@/pages/dashboard/WorkPlace'
// import Login from '@/pages/login/Login'
import BasicDetail from '@/pages/detail/BasicDetail'
// import AdvancedDetail from '@/pages/detail/AdvancedDetail'
// import TaskCard from '@/pages/components/TaskCard'
// import ColorBox from '@/pages/components/Palette'

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
      redirect: '/dashboard/workplace',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/dashboard',
          name: '组织效能',
          component: RouteView,
          icon: 'dashboard',
          children: [
            {
              path: '/dashboard/workplace',
              name: '公司效能',
              component: WorkPlace,
              icon: 'none'
            },
            {
              path: '/dashboard/analysis',
              name: '部门效能',
              component: Dashboard,
              icon: 'none'
            }
          ]
        },
        {
          path: '/form',
          name: '员工发展',
          component: PageView,
          icon: 'form',
          children: [
            {
              path: '/form/basic',
              name: '公司总览',
              component: BasicForm,
              icon: 'none'
            },
            {
              path: '/form/step',
              name: '部门概况',
              component: StepForm,
              icon: 'none'
            },
            {
              path: '/form/advanced',
              name: '个人发展',
              component: AdvancedForm,
              icon: 'none'
            }
          ]
        },
        {
          path: '/list',
          name: '报表中心',
          component: PageView,
          icon: 'table', 
          children: [
            {
              path: '/list/query',
              name: '报表中心',
              component: QueryList,
              icon: 'none'
            },
          ]
        },
        {
          path: '/detail',
          name: '部门薪酬',
          icon: 'profile',
          component: PageView,
          children: [
            {
              path: '/detail/basic',
              name: '薪酬概况',
              icon: 'none',
              component: BasicDetail
            },
          ]
        },
        {
          path: '/result',
          name: '员工薪酬',
          icon: 'check-circle-o',
          component: PageView,
          children: [
            {
              path: '/result/success',
              name: '薪酬概况',
              icon: 'none',
              component: Success
            },
          ]
        },
      ]
    }
  ]
})
