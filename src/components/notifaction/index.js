import Notifaction from './notifaction.vue'
import notify from './function'

export default (Vue) => {
  Vue.component(Notifaction.name, Notifaction)
  Vue.prototype.$notify = notify
}