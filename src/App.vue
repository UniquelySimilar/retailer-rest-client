<template>
  <div id="app" class="container">
    <div class="row">
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import CustomerIndex from './components/customer/Index.vue';
  import CustomerShow from './components/customer/Show.vue';
  import CustomerCreate from './components/customer/Create.vue';

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
      CustomerIndex,
      CustomerShow,
      CustomerCreate
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .component-heading {
    font-size: 1.5em;
    font-weight: bold;
    vertical-align: middle;
    margin-right: 2em;
  }
</style>