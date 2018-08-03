<template>
  <div class="todos">

    <ul class="list-inline">
      <li class="list-inline-item" style="margin-right:20px">
        We Have {{ todos.length }} Todos
      </li>
      <li class="list-inline-item" style="margin-right:20px">
         We Have {{ todos.filter((todo) => { return todo.todo.completed }).length }} Todos Completed
      </li>
      <li class="list-inline-item" style="margin-right:20px">
         We Have {{ todos.filter((todo) => { return !todo.todo.completed }).length }} Todos Uncompleted
      </li>
    </ul>

    <!-- display our todos -->
    <todo-list-holder :todos="todos"> </todo-list-holder>

  </div>
</template>

<script>
import TodoListHolder from './TodoListHolder.vue'

export default {
  name: 'Todos',

  data () {
    return {
      todos: {},
      todos_url: 'https://jsonplaceholder.typicode.com/todos',
      base_url: 'https://jsonplaceholder.typicode.com/'
    }
  },

  created () {
    this.getAll()
  },

  methods: {

    // get our todos
    getAll () {
      this.$http.get(this.todos_url)
        .then((result) => {
          console.log('got data')
          console.log(result)
          let tempTodos = result.body
          this.set_users(tempTodos)
        })
    }, // end of getAll

    // go to the page where we see details on a todo
    goToDetailsPage (todo) {
      console.log(todo.id)
      this.$router.push({ path: '/todo/' + todo.id })
    }, // end of goToDetailsPage function

    // make a todo to be an object of objects
    // { 'todo': theTodo, 'owner': theUserThatAddedIt }
    set_users (tempTodos) {
      this.$http.get(this.base_url + 'users')
        .then((result) => {
          let tempUsers = result.body
          console.log('users')
          // console.log(tempUsers)
          this.todos = tempTodos.map((tempTodo) => { return { 'todo': tempTodo, 'owner': tempUsers.filter((tempUser) => { return tempUser.id === tempTodo.userId })[0] } })
          console.log(this.todos)
        })
    } // end of set_users

  }, // end of methods

  components: {
    TodoListHolder
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
