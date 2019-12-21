// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from './http_request/http.js'

Vue.use(ElementUI);
Vue.prototype.$http = http
Vue.config.productionTip = false

/* eslint-disable no-new */
// router.beforeEach((to,from,next) => {
// 	console.log(window.localStorage.sessionId);
// 	if(to.path==='/login'){
// 		next();
// 	}else{
// 		if(window.localStorage.sessionId){
// 			next();
// 		}else{
// 			next({path:"/login"});
// 		}
// 	}
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
