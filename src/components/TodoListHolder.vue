<template>
  <div class="todo_list_holder">

    <omia-nav v-on:get-user-tasks="getUserTasks"></omia-nav><br>

    <div class="row">
      <todo-holder v-for="(todo, index) in todos" v-bind:todo="todo" v-bind:key="index" v-on:go-to-details-page="goToDetailsPage" >
      </todo-holder>
    </div>
  </div>
</template>

<script>
import TodoHolder from './TodoHolder.vue'
import OmiaNav from './OmiaNav.vue'

export default {
  name: 'TodoListHolder',

  props: ['todos'],

  data () {
    return {
    }
  }, // end of data function

  created () {
    // console.log('got props in todolist holder'+ this.todos)
    // this.computed_todos = this.todos
  },

  methods: {

    // to to a page where we see all details about this todo
    goToDetailsPage (todo) {
      this.$router.push({ path: '/todo/' + todo.id })
    }, // end of goToDetailsPage function

    // return a list of todos that are needed after search
    // push to user/tasks
    getUserTasks (searchUserName) {
      console.log('search_user_name emitted in todolist_holder.vue')
      console.log('get tasks for ' + searchUserName)
      this.todos.filter((tempTodo) => { return tempTodo.owner.name.toLowerCase() === searchUserName.trim().toLowerCase() })
    }

  }, // end of methods object

  computed: {

  },

  components: {
    TodoHolder, OmiaNav
  }

}
</script>

<style>

</style>
