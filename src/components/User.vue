<template>
  <div class="user_info">
    <div> {{ user.user.name }} </div>
    {{ user.todos }}
    <br><br>
    {{ user.user }}

    <!-- v-for="(todo, index) in user.todos" v-bind -->
    <!-- display our todos -->
    <div class="row">
      <div class="todo_holder col-md-3" v-for="(todo, index) in user.todos" v-bind:key="index">
        <div class="card" style="height:200px; margin-right:5px; margin-left:5px; margin-bottom: 5px">
         <div class="card-header">
          <span style="margin-right:20px"> <strong>Task #{{ todo.todo.id }}</strong> </span>
          <span v-show="todo.todo.completed" class="badge badge-success"> Done </span>
          <span v-show="!todo.todo.completed" class="badge badge-danger"> Pending </span>
         </div>
         <div class="card-body">
          <p class="task-data"> TASK {{ todo.todo.title }} </p>
          <p class="task-data"> COMPLETED {{ todo.todo.completed }} </p>
          <p class="task-data"> EMPLOYEE {{ todo.owner.name }} </p>
         </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'User',

  data () {
    return {
      user_id: '',
      user: {},
      base_url: 'https://jsonplaceholder.typicode.com/'
    }
  }, // end of data function

  created () {
    this.user_id = this.$route.params.id
    console.log('user id received is ' + this.user_id)
    this.setProperties()
  },

  methods: {
    // set the properties of a user
    setProperties () {
      this.$http.get(this.base_url + 'users/' + this.user_id)
        .then((result) => {
          this.setTodos(result.body)
        })
    },

    // get todos of a user
    setTodos (user) {
      this.$http.get(this.base_url + 'todos')
        .then((result) => {
          let tempTodos = result.body
          this.user = { 'user': user, 'todos': tempTodos.filter((tempTodo) => { return tempTodo.userId === user.id }) }
          console.log('got data')
          console.log(user)
        })
    }

  }, // end of methods

  components: {

  }

}
</script>

<style>

</style>
