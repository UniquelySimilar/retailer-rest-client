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
  // Do initial data retrieve with Vue component in order to create DataTable, then DataTable will manage data.
  var customerTable = {};

  export default {
    mounted() {
      var thisComponent = this;

      axios.get('http://laravel-retailer-rest.localhost/api/customers')
      .then(response => {
        var customers = response.data;
        //console.log(customers);

        // Create DataTable
        customerTable = $('#customer-table').DataTable({
          data: customers,
          columns: [
            { title: "Id", data: "id"},
            { title: "Customer", data: "customerName"},
            { title: "Contact Name", data: "contactFullName"},
            {
              title: "Phone",
              data: "phone",
              orderable: false
            },
            {
              title: "",
              data: null,
              orderable: false,
              searchable: false,
              defaultContent: "<button class=\"btn btn-default show-btn\">Show</button>"
            },
            {
              title: "",
              data: null,
              orderable: false,
              searchable: false,
              defaultContent: "<button class=\"btn btn-default edit-btn\">Edit</button>"
            },
            {
              title: "",
              data: null,
              orderable: false,
              searchable: false,
              defaultContent: "<button class=\"btn btn-default delete-btn\">Delete</button>"
            }
          ]
        });
      })
      .catch(error => {
        console.log(error);
      });

      // Create button event handlers after DataTable initialization
      $('#customer-table').on( 'init.dt', function () {
        //console.log('Table initialization complete');

        // Click handler for Show button
        $('#customer-table tbody').on( 'click', 'button.show-btn', function () {
          var currentRow = customerTable.row( $(this).parents('tr') );
          var rowData = currentRow.data();
          //console.log('Show Customer details for ID: ' + rowData.id);

          thisComponent.$router.push({ name: 'customerShow', params: { id: rowData.id }});
        });

        // Click handler for Edit button
        $('#customer-table tbody').on( 'click', 'button.edit-btn', function () {
          var currentRow = customerTable.row( $(this).parents('tr') );
          var rowData = currentRow.data();
          //console.log('Edit Customer for ID: ' + rowData.id);

          thisComponent.$router.push({ name: 'customerEdit', params: { id: rowData.id }});
        });

        // Click handler for Delete button
        $('#customer-table tbody').on( 'click', 'button.delete-btn', function () {
          var currentRow = customerTable.row( $(this).parents('tr') );
          var rowData = currentRow.data();
          //console.log(rowData)

          // Delete customer from database
          if (true == confirm('Delete Customer?')) {
            axios.delete('http://laravel-retailer-rest.localhost/api/customers/' + rowData.id)
            .then(response => {
              // Remove associated row
              currentRow.remove().draw();
            })
            .catch(error => {
              console.log(error);
            });
          }
        });

      }); // end 'init.dt' handler

    } // end mounted()
  }


</script>

<style scoped>
</style>