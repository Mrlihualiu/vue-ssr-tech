import Vue from 'vue'
import Component from './func-notifaction'

const notifactionConstructor = Vue.extend(Component)

const instances = []
let seed = 1

const removeInstance = (instance) => {
  if (!instance) return
  
  const len = instances.length
  const index = instances.findIndex(inst => instance.id === inst.id)
  instances.splice(index, 1)

  if (len <= 1) return
  const removeHeight = instance.vm.height
  for (let i=index; i<len-1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset) - removeHeight - 16
  }
}

const notify = (options) => {

  const {
    autoClose,
    ...rest
  } = options

  const instance = new notifactionConstructor({
    propsData: { ...rest },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })

  const id = `notifaction_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })
  instance.vm.$on('close', () => {
    instance.vm.visible = false
  })

  return instances.vm
}

export default notify