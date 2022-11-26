import $ from "jquery"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery-confirm/css/jquery-confirm.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
window.$ = $
require('jquery-confirm')




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
