import Vuex from 'vuex'
import state from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'

const isDev = process.env.NOD_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state,
    mutations,
    getters,
    // modules: {
    //   a: {
    //     namespaced: true, // true-mutations命名空间不与全局冲突 做了区分 调用 ...mapMutations(['a/updateText'])
    //     state: { // a模块state调取：this.$store.state.a.text || ...mapSate({ textA: state => state.a.text })
    //       text: 1
    //     },
    //     mutations: {
    //       updateText(state, text) { // 模块内部的state直接指向内部的state
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       textPlus(state, getters, rootState) { // rootState为全局state
    //         return state.text + rootState.b.text
    //       }
    //     },
    //     actions: {
    //       add ({ state, commit, rootState }) {
    //         commit('updateCount', 2324, { root: true }) // 模块申明了namespaced actions调用commit的方法名字时会自动添加'a/'
    //       }
    //     }
    //   },
    //   b: {
    //     state: {
    //       text: 2
    //     }
    //   }
    // }
  })
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        actions: newActions,
        getters: newGetters,
      })
    })
  }
  return store
}

