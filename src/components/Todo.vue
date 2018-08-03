<template>
  <div class="todos">

    <!-- display our todos -->
    <div class="todo_holder">
      <div class="card-header">
        <strong> TASK #{{ todo.todo.id }} </strong>
      </div>
      <div class="card-body col-sm-12">
        <p> {{ todo.todo.title }} </p>
        <p v-show="todo.todo.completed" class="badge badge-success"><strong> TASK COMPLETED </strong></p>
        <p v-show="!todo.todo.completed" class="badge badge-danger"><strong> TASK NOT COMPLETED </strong></p>
        <p> By {{ todo.owner.name }} </p>
        <p> Email {{ todo.owner.email }} </p>
        <p> Phone {{ todo.owner.phone }} </p>

        <!-- show a see more button -->
        <button class="btn btn-info" type="button" v-show="!seeing_more" @click="seeMore()"> SEE MORE ABOUT EMPLOYEE </button>

        <div v-show="seeing_more">
          <p> WEBSITE {{ todo.owner.website }} </p>
          <p> STREET {{ todo.owner.address.street }} </p>
          <p> SUITE {{ todo.owner.address.suite }} </p>
          <p> COMPANY BS {{ todo.owner.company.bs }} </p>
        </div>

        <!-- show a see more button -->
        <button class="btn btn-info" type="button" v-show="seeing_more" @click="seeMore()"> SEE LESS </button>

      </div>
    </div><br>

  </div>
</template>

<script>
export default {
  name: 'Todo',

  data () {
    return {
      todo: {},
      seeing_more: false,
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
    }, // end of set_user_details

    // toggle seeing more attribut to its opposite
    seeMore () {
      this.seeing_more = !this.seeing_more
    }

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
