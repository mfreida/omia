<template>
  <div id="about">

     This App helps managers keep track of tasks that their employees do.

     This App Is Managed By {{ maker_name }}

  </div>
</template>

<script>
export default {
  name: 'About',

  data () {
    return {
      maker_name: 'Freida',
      var_name: 'value'
    }
  },

  created () {
    console.log('about was created')
  },

  methods: {

    getName () {
      return this.maker_name
    }

  }

}
</script>

<style>

</style>
