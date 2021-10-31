import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import Demo from '../components/lib/demo'

// import '../components/css/card.scss'
// import Card from '../components/lib/card'

// // Vue.component('name', Demo)

// Vue.use(Demo) // Demo.install -> Vue.component()
// Vue.use(Card)

import 'cc-ui-test/dist/css/index.css'
import CCUI from 'cc-ui-test'
Vue.use(CCUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
