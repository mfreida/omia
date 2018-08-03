<template>
  <div class="todo_holder col-md-3">
    <div class="card" @click="triggerGoToDetailsPageEvent(todo.todo)" style="height:200px; margin-right:5px; margin-left:5px; margin-bottom: 5px">
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
.task-data {
  margin-left: 10px;
}
</style>
