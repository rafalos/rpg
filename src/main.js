import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VTooltip from 'v-tooltip'
import 'buefy/dist/buefy.css'
import VueLodash from 'vue-lodash'
const options = { name: '_' }
Vue.use(VueLodash, options) // options is optional
Vue.use(VTooltip)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
