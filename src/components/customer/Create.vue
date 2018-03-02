<template>
    <div id="customer-create">
        <div>
            <span class="component-heading">New Customer</span>
        </div>
        <form class="form-horizontal">
            <div class="form-group">
                <label for="customer-name" class="col-sm-2 control-label">Customer Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="customer-name" v-model="customerName">
                </div>
            </div>
            <div class="form-group">
                <label for="contact-first-name" class="col-sm-2 control-label">Contact First Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="contact-first-name" v-model="contactFirstName">
                </div>
            </div>
            <div class="form-group">
                <label for="contact-last-name" class="col-sm-2 control-label">Contact Last Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="contact-last-name" v-model="contactLastName">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default" v-on:click.prevent="submitCustomerForm">Save</button>
                    <router-link class="btn btn-default" :to="{ name: 'customerIndex' }">Cancel</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customerName: '',
                contactFirstName: '',
                contactLastName: '',
                // Default for initial testing
                phone: '303-555-1212',
                addressLine1: '1234 Main St',
                addressLine2: '',
                city: 'Louisville',
                state: 'Colorado',
                postalCode: '80027',
                country: 'USA',
                salesRepEmployeeNumber: '',
                creditLimit: '1000.00'
            }
        },
        methods: {
            submitCustomerForm: function (event) {
                //console.log('customer form submitted');
                //console.log(this.customer);
                var self = this;
                axios.post('http://laravel-retailer-rest.localhost/api/customers', {
                    customerName:           self.customerName,
                    contactFirstName:       self.contactFirstName,
                    contactLastName:        self.contactLastName,
                    phone:                  self.phone,
                    addressLine1:           self.addressLine1,
                    addressLine2:           self.addressLine2,
                    city:                   self.city,
                    state:                  self.state,
                    postalCode:             self.postalCode,
                    country:                self.country,
                    salesRepEmployeeNumber: self.salesRepEmployeeNumber,
                    creditLimit:            self.creditLimit
                })
                    .then(response => {
                        console.log('Response status code: ' + response.status);
                        console.log('Response status text: ' + response.statusText);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }

</script>

<style scoped>
</style>