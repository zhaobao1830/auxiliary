// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App'
import Master from './components/Master'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<div><App/><Master/></div>',
  components: { App, Master }
})
