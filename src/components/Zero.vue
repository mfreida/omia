<template>
  <div class="todo_list_holder row">
    <todo-holder v-for="(todo, index) in todos" v-bind:todo="todo" v-bind:key="index" v-on:go-to-details-page="goToDetailsPage" >
    </todo-holder>
  </div>
</template>

<script>
import TodoHolder from './TodoHolder.vue'

export default {
  name: 'TodoListHolder',

  props: ['todos'],

  data () {
    return {
    }
  }, // end of data function

  methods: {

    // to to a page where we see all details about this todo
    goToDetailsPage (todo) {
      this.$router.push({ path: '/todo/' + todo.id })
    }// end of goToDetailsPage function

  }, // end of methods object

  components: {
    TodoHolder
  }

}
</script>

<style>

</style>
