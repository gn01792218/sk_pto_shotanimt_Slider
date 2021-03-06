// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import io from 'socket.io-client'
import store from './store/store'

Vue.config.productionTip = false
Vue.prototype.$socket = io('http://localhost:5000');

new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
