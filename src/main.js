// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
require('es6-promise').polyfill()
import Vue from 'vue'
import 'fetch-detector'
import 'fetch-ie8'
import App from './App'
import router from './router/lazy'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import Viser from 'viser-vue'
import axios from 'axios'
import '@/mock'
import store from './store'
import echarts from 'echarts'
// import PouchDB from 'pouchdb'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$chart = echarts
Vue.use(Viser)
Vue.use(Antd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // mounted () {
  //   var db = new PouchDB('admindb')
  //   db.get('currUser').then(doc => {
  //     this.$store.commit('account/setuser', doc.user)
  //   })
  // }
})
