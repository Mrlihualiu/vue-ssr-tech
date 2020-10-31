import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import creatRouter from './router/router.js'
import createStore from './store/store.js'
import App from './app.vue'
import Notifaction from './components/notifaction/index'
// import Tabs from './components/tabs/index'

import './assets/styles/style.styl'
import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.use(Notifaction)
// Vue.use(Tabs)

const router = creatRouter()
const store = createStore()

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)


