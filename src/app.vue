<template>
  <div id="app">
    <Header></Header>
    <Todo></Todo>
    <button @click="notify">click me</button>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'

export default {
  components: {
    Header,
    Footer,
    Todo
  },
  mounted() {

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
