<template>
  <div class="todo_holder">
    <div class="card col-sm-3" v-for="(todo, index) in todos" v-bind:key="index" @click="triggerGoToDetailsPageEvent(todo.todo)" style="border: 2px solid black">
      <div class="card-body">
        <p> {{ todo.todo.title }} </p>
        <p> {{ todo.todo.completed }} </p>
        <p> Added By {{ todo.owner.name }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoHolder',

  props: ['todo'],

  data () {
    return {

    }
  }, // end of data function

  methods: {

    // trigger an event that would allow us to go to the next page..
    // to see all details about this todo
    triggerGoToDetailsPageEvent (todo) {
      this.$emit('go-to-details-page', todo)
    }// end of triggerGoToDetailsPageEvent function

  }// end of methods object

}
</script>

<style>

</style>
