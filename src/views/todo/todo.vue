<template>
  <section class="real-app">
    <div class="tabs-container">
      <!-- <tabs>
        <tab label="all" index="1" />
        <tab index="2"><span slot="label">active</span></tab>
        <tab label="completed" index="3" />
      </tabs> -->
    </div>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么"
      @keyup.enter="addTodo"
    >
    <item
      v-for="todo of filteredTodos"
      :todo="todo"
      :key="todo.id"
      @deleteTodo="deleteTodo"
    ></item>
    <helper
      :filter="filter"
      :todos="todos"
      @toggle="toggleTabs"
      @clear="clearCompletedTodos"
    ></helper>
  </section>
</template>

<script>
import Item from './item.vue'
import Helper from './tabs.vue'
let id = 0
export default {
  data() {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    Item,
    Helper
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => todo.completed === completed)
    }
  },
  methods: {
    addTodo(e) {
      if (!e.target.value) return
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = null
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(item => item.id === id), 1)
    },
    toggleTabs(state) {
      this.filter = state
    },
    clearCompletedTodos() {
      this.todos = this.todos.filter(todo => !todo.completed)
      this.filter = this.filter === 'completed' ? 'all' : this.filter
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666

.add-input
  position relative
  margin 0
  width 100%
  font-size 24px
  font-family inherit
  font-weight inherit
  line-height 1.4em
  border none
  outline none
  color inherit
  box-sizing border-box
  font-smoothing antialiased
  padding 16px 16px 16px 36px
  border none
  box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>

