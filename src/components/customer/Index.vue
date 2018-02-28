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
          <th>Address Line 1</th>
          <th>City</th>
          <th>State</th>
          <th>Postal Code</th>
          <th>Credit Limit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers">
          <td>{{ customer.customerName }}</td>
          <td>{{ customer.contactFirstName }}</td>
          <td>{{ customer.contactLastName }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.addressLine1 }}</td>
          <td>{{ customer.city }}</td>
          <td>{{ customer.state }}</td>
          <td>{{ customer.postalCode }}</td>
          <td>{{ customer.creditLimit }}</td>
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