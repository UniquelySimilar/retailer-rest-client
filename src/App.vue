<template>
  <div id="app" class="container">
    <div class="row">
      <!--customer-index></customer-index-->
      <customer-show></customer-show>
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