<template>
  <div>

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

      <!-- Brand -->
      <router-link class="navbar-brand" to="/"> Omia </router-link>

      <!-- Links -->
      <ul class="navbar-nav">

        <li class="nav-item">
          <router-link class="nav-link" to="/todos"> Todos </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/about"> About </router-link>
        </li>

        <!-- Dropdown -->
        <li class="nav-item dropdown">
          <form class="form-inline" action="">
            <input class="form-control mr-sm-2" type="text" v-model="search_user_name" placeholder="search with user name">
            <button class="btn btn-success" type="button" @click="getUserTasks()"> Search </button>
          </form>

        </li>
      </ul>

    </nav>
  </div>
</template>

<script>
export default {
  name: 'OmiaNav',

  data () {
    return {
      search_user_name: ''
    }
  },

  methods: {

    // get tasks for a user
    getUserTasks () {
      this.$emit('get-user-tasks', this.search_user_name)
    }

  }

}
</script>

<style>
</style>
