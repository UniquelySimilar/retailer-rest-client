<template>
  <div id="customer-index">
    <h2>Customer List</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Contact First Name</th>
          <th>Contact Last Name</th>
          <th>Phone</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers">
          <td>{{ customer.customerName }}</td>
          <td>{{ customer.contactFirstName }}</td>
          <td>{{ customer.contactLastName }}</td>
          <td>{{ customer.phone }}</td>
          <td><router-link class="btn btn-default" :to="{ name: 'customerShow', params: { id: customer.id }}">Detail</router-link></td>
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