<template>
  <div class="todos">

    <p> We Have {{ todos.length }} Todos </p>

    <p> We Have {{ todos.length }} Todos Completed </p>
    <p> We Have {{ todos.length }} Todos Uncompleted </p>

    <!-- display our todos -->
    <div class="row">
      <div class="card col-sm-3" v-for="(todo, index) in todos" v-bind:key="index" @click="goToDetailsPage(todo)" style="border: 2px solid black">
        <div class="card-body">
          <p> {{ todo.title }} </p>
          <p> {{ todo.completed }} </p>
        </div>
      </div>
    </div><br><hr>

  </div>
</template>

<script>
export default {
  name: 'Todos',

  data () {
    return {
      todos: {},
      todos_url: 'https://jsonplaceholder.typicode.com/todos'
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
          this.todos = result.body
        })
    }, // end of getAll

    // go to the page where we see details on a todo
    goToDetailsPage (todo) {
      console.log(todo.id)
      this.$router.push({ path: '/todo/' + todo.id })
    }// end of goToDetailsPage function

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
