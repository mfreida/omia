<template>
  <div class="todos">

    <!-- display our todos -->
    <div class="row">
      <div class="card col-sm-3">
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
  name: 'Todo',

  data () {
    return {
      todo: {},
      todos_url: 'https://jsonplaceholder.typicode.com/todos/'
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
          this.todo = result.body
        })
    } // end of getDetails

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
