<template>
  <div id="app" class="container">
    <h1>{{ msg }}</h1>
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
        msg: 'Welcome to Your Vue.js App'
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>