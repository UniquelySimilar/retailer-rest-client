import Vue from 'vue'
import App from './App.vue'

window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

window.axios = require('axios');

new Vue({
  el: '#app',
  render: h => h(App)
})
