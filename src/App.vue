<template>
  <div id="app" class="container">
    <div class="row">
      <customer-index></customer-index>
    </div>
  </div>
</template>

<script>
  import CustomerIndex from './components/customer/Index.vue';

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
      CustomerIndex
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>