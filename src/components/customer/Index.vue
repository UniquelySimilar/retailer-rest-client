<template>
  <div id="customer-index">
    <div>
      <span class="component-heading">Customer List</span>
      <router-link class="btn btn-default" :to="{ name: 'customerCreate' }">Create Customer</router-link>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Contact First Name</th>
          <th>Contact Last Name</th>
          <th>Phone</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers">
          <td>{{ customer.customerName }}</td>
          <td>{{ customer.contactFirstName }}</td>
          <td>{{ customer.contactLastName }}</td>
          <td>{{ customer.phone }}</td>
          <td>
            <router-link class="btn btn-default" :to="{ name: 'customerShow', params: { id: customer.id }}">View</router-link>
          </td>
          <td>
            <button class="btn btn-default" v-on:click="deleteCustomer(customer.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        customers: []
      }
    },
    methods: {
      deleteCustomer: function(id) {
        alert('delete customer where ID = ' + id);

      }
    },
    created() {
      axios.get('http://laravel-retailer-rest.localhost/api/customers')
        .then(response => {
          this.customers = response.data;
          //console.log(this.customers);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
</script>

<style scoped>

</style>