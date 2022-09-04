import Vue from 'vue'
import App from './App.vue'
// import HMingUI from '../packages/hmingui'
// import '../packages/assets/style/index.scss'
// Vue.use(HMingUI)

// import { Demo } from '../packages/hmingui'
// import '../packages/components/demo/style.scss'
// Vue.use(Demo)

// import HMingUI from 'hming-ui'
// import 'hming-ui/lib/hmingui.css'
// Vue.use(HMingUI)

import { Demo } from 'hming-ui'
import 'hming-ui/lib/packages/demo/style.css'
console.log('DEMO', Demo)
Vue.use(Demo)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
