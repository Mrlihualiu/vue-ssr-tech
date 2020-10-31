<template>
  <div id="app">
    <Header></Header>
    <p>{{count}}</p>
    <p>{{fullName}}</p>
    <!-- <Todo></Todo> -->
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- <button @click="notify">click me</button> -->
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'
import Header from './views/todo/header.vue'
import Footer from './views/todo/footer.jsx'
import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer,
    Todo
  },
  mounted() {
    let i = 1
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000)
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullName'])
    // count() {
    //   return this.$store.state.count
    // },
    // fullName() {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
    notify() {
      this.$notify({
        content: 'test $notify1',
        btn: 'close'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  #app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      background-color #999
      opacity 0.2
      z-index -1
</style>
