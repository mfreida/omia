<template>
  <div id="app">

    <!-- include our nav -->
    <h3> WELCOME TO OMIA MANAGERS PORTAL </h3>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {

  },

  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
