// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import {
  MessageBox
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import animate from 'animate.css'
import axios from 'axios'
//需要引用vue-resource
import VueResource from 'vue-resource'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
//引入vuex
import store from './store'

Vue.use(VueResource)
Vue.use(animate)
Vue.http.options.headers = {
  'Content-Type': 'application/json;charset=UTF-8'
};
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$alert = MessageBox.alert;

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  axios,
  components: {
    App
  },
  render: h => h(App),
  template: '<App/>'
})
