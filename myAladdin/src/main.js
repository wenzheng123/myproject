// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
<<<<<<< HEAD
import VueTouch from 'vue-touch'
=======
>>>>>>> b166dddcca04b378e7d8ac5b8cf43b684af08d92

Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})

VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

