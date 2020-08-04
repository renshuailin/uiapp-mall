import Vue from 'vue'
import App from './App'

//全局引入封装请求
import request from './utils/request.js'
//真机状态遮罩层
import status from './components/status.vue'


Vue.config.productionTip = false
Vue.prototype.request=request

Vue.component('app-status',status)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
