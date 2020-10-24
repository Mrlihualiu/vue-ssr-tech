import Vue from 'vue'
import App from './app.vue'
import Notifaction from './components/notifaction/index'
// import Tabs from './components/tabs/index'

import './assets/styles/style.styl'
import './assets/styles/global.styl'

Vue.use(Notifaction)
// Vue.use(Tabs)
const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)


