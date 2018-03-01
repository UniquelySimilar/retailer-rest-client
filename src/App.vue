<template>
  <div id="app" class="container">
    <p>
      <!-- use router-link component for navigation. -->
      <router-link to="/">Go to Index</router-link>
    </p>
    <div class="row">
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import CustomerIndex from './components/customer/Index.vue';
  import CustomerShow from './components/customer/Show.vue';

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
      CustomerIndex,
      CustomerShow
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