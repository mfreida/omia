<template>
  <div class="todos">

    <!-- display our todos -->
    <div class="row">
      <div class="card col-sm-3">
        <div class="card-body">
          <p> {{ todo.todo.title }} </p>
          <p> {{ todo.todo.completed }} </p>
          <p> By {{ todo.owner.name }} </p>
        </div>
      </div>
    </div><br><hr>

  </div>
</template>

<script>
export default {
  name: 'Todo',

  data () {
    return {
      todo: {},
      todos_url: 'https://jsonplaceholder.typicode.com/todos/',
      base_url: 'https://jsonplaceholder.typicode.com/'
    }
  },

  created () {
    this.getDetails()
  },

  methods: {

    // get our todos
    getDetails () {
      this.$http.get(this.todos_url + this.$route.params.id)
        .then((result) => {
          console.log('got data')
          console.log(result)
          let todo = result.body

          this.set_user_details(todo)
        })
    }, // end of getDetails

    // set the user that added this todo
    set_user_details (todo) {
      this.$http.get(this.base_url + 'users/' + todo.userId)
        .then((result) => {
          // let todoOwner = result.body.filter((user) => { return user.id === todo.userId })
          this.todo = { 'todo': todo, 'owner': result.body }
        })
    }// end of set_user_details

  }// end of methods

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
