import Vue from "vue"
import App from "./App.vue"

import router from "./router"

import * as echarts from "echarts"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import axios from "axios"
import qs from "qs"
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.use(qs)
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
