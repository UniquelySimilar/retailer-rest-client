<template>
  <div id="customer-index">
    <div>
      <span class="component-heading">Customer List</span>
      <router-link class="btn btn-default" :to="{ name: 'customerCreate' }">Create Customer</router-link>
    </div>
    <hr>
    <table id="customer-table" class="table table-striped">
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
        <tr v-for="customer in customers" v-bind:key="customer.id">
          <td>{{ customer.customerName }}</td>
          <td>{{ customer.contactFirstName }}</td>
          <td>{{ customer.contactLastName }}</td>
          <td>{{ customer.phone }}</td>
          <td>
            <router-link class="btn btn-default" :to="{ name: 'customerShow', params: { id: customer.id }}">View</router-link>
          </td>
          <td>
            <button class="btn btn-default" v-on:click="deleteCustomer(customer.id, customer.customerName, $event)">Delete</button>
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
        customers: [],
        customerTable: {}
      }
    },
    methods: {
      deleteCustomer: function (id, customerName, event) {
        //console.log(event);
        var rowTarget = $(event.target).parents('tr');
        //console.log(rowTarget);
        var rowIndex = this.customerTable.row(rowTarget).index();
        //console.log('selected row index: ' + rowIndex);
        if (confirm('Delete customer ' + customerName + '?')) {
          //console.log('delete customer confirmed');
          axios.delete('http://laravel-retailer-rest.localhost/api/customers/' + id)
            .then(response => {
              //console.log('customer deleted');

              // Remove associated row from DataTable
              this.customerTable.row(rowTarget).remove().draw();

              // Find and remove deleted customer from customers array
              var deletedCustomerIndex = this.customers.findIndex(function (element) {
                return element.id == id;
              })
              //console.log('deleted customer index: ' + deletedCustomerIndex);
              this.customers.splice(deletedCustomerIndex, 1);
            })
            .catch(error => {
              console.log(error);
            });
        }
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
    },
    updated: function() {
      //console.log('Index vue updated');
      this.customerTable = $('#customer-table').DataTable();
    }
  }
</script>

<style scoped>
</style>