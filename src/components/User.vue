<template>
  <div class="user_info">

    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <p> Showing tasks for  <strong> {{ user.user.name }} </strong></p>
        <p> Email {{ user.user.email }} </p>
        <p> Phone {{ user.user.phone }} </p>
      </div>
      <div class="col-md-1"></div>
    </div>

    <!-- show completed first -->
    <p class=""><strong> COMPLETED TASKS </strong></p>
    <!-- display our todos -->
    <div class="row" id="complete">
      <div class="card col-md-3" v-for="(todo, index) in userCompleted" :key="index" v-show="todo.completed" style="height:200px; margin-right:0px; margin-left:0px; margin-bottom: 5px">

         <div class="card-header">
          <span style="margin-right:20px"> <strong>Task #{{ todo.id }}</strong> </span>
          <span v-show="todo.completed" class="badge badge-success"> Done </span>
          <span v-show="!todo.completed" class="badge badge-danger"> Pending </span>
         </div>
         <div class="card-body">
           <p > TASK {{ todo.title }} </p>
           <p > COMPLETED {{ todo.completed }} </p>
         </div>
      </div>
    </div>

    <!-- show incompleted next -->
    <p class=""><strong> INCOMPLETED TASKS  </strong></p>
    <!-- display our todos -->
    <div class="row" id="incomplete">
      <div class="card col-md-3" v-for="(todo, index) in userInCompleted" :key="index" v-show="!todo.completed" style="height:200px; margin-right:0px; margin-left:0px; margin-bottom: 5px">

         <div class="card-header">
          <span style="margin-right:20px"> <strong>Task #{{ todo.id }}</strong> </span>
          <span v-show="todo.completed" class="badge badge-success"> Done </span>
          <span v-show="!todo.completed" class="badge badge-danger"> Pending </span>
         </div>
         <div class="card-body">
           <p > TASK {{ todo.title }} </p>
           <p > COMPLETED {{ todo.completed }} </p>
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
      userTodos: {},
      userCompleted: {},
      userInCompleted: {},
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
          this.userTodos = tempTodos.filter((tempTodo) => { return tempTodo.userId === user.id })
          this.user = { 'user': user, 'todos': this.userTodos }
          console.log('got data')
          console.log(this.userTodos)

          this.userCompleted = this.user.todos.filter((todo) => { return todo.completed })
          this.userInCompleted = this.user.todos.filter((todo) => { return !todo.completed })
        })
    }

  }, // end of methods

  components: {

  }

}
</script>

<style>
#complete{
  margin-bottom: 20px;
  margin-top: 10px;
}
#incomplete{
  margin-bottom: 20px;
}
</style>
