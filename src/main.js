import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

window.axios = require('axios');

import App from './App.vue'

const customerIndex = App.components.CustomerIndex;
const customerShow = App.components.CustomerShow;
//console.log(customerIndex);

const routes = [
  { path: '/', component: customerIndex },
  { path: '/show', component: customerShow }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
