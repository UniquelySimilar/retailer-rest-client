<template>
  <div id="customer-index">
    <div>
      <span class="component-heading">Customer List</span>
      <router-link class="btn btn-default" :to="{ name: 'customerCreate' }">Create Customer</router-link>
    </div>
    <hr>
    <table id="customer-table" class="table table-striped">
    </table>
  </div>
</template>

<script>
  // TODO: Do initial data retrieve with Vue component, then let DataTable manage it.
  var customerTable = {};
  var customers = [];

  export default {
    data() {
      return {
      }
    },
    // methods: {
    //   deleteCustomer: function (id, customerName, event) {
    //     //console.log(event);
    //     var rowTarget = $(event.target).parents('tr');
    //     //console.log(rowTarget);
    //     var rowIndex = this.customerTable.row(rowTarget).index();
    //     //console.log('selected row index: ' + rowIndex);
    //     if (confirm('Delete customer ' + customerName + '?')) {
    //       //console.log('delete customer confirmed');
    //       axios.delete('http://laravel-retailer-rest.localhost/api/customers/' + id)
    //         .then(response => {
    //           //console.log('customer deleted');

    //           // Remove associated row from DataTable
    //           this.customerTable.row(rowTarget).remove().draw();

    //           // Find and remove deleted customer from customers array
    //           var deletedCustomerIndex = this.customers.findIndex(function (element) {
    //             return element.id == id;
    //           })
    //           //console.log('deleted customer index: ' + deletedCustomerIndex);
    //           this.customers.splice(deletedCustomerIndex, 1);
    //         })
    //         .catch(error => {
    //           console.log(error);
    //         });
    //     }
    //   }
    // },
    mounted() {
      axios.get('http://laravel-retailer-rest.localhost/api/customers')
        .then(response => {
          customers = response.data;
          console.log(customers);
          customerTable = $('#customer-table').DataTable({
            data: customers,
            columns: [
              { title: "Id", data: "id"},
              { title: "Customer", data: "customerName"},
              { title: "Contact Name", data: "contactFullName"},
              { title: "Phone", data: "phone"}
            ]
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
</script>

<style scoped>
</style>