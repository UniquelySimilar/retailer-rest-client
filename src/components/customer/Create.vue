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
                    <span style="color: red;" v-if="validationErrors.hasOwnProperty('customerName')">{{ '* ' + validationErrors.customerName[0] }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="contact-first-name" class="col-sm-2 control-label">Contact First Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="contact-first-name" v-model="contactFirstName">
                    <span style="color: red;" v-if="validationErrors.hasOwnProperty('contactFirstName')">{{ '* ' + validationErrors.contactFirstName[0] }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="contact-last-name" class="col-sm-2 control-label">Contact Last Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="contact-last-name" v-model="contactLastName">
                    <span style="color: red;" v-if="validationErrors.hasOwnProperty('contactLastName')">{{ '* ' + validationErrors.contactLastName[0] }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="phone" class="col-sm-2 control-label">Phone</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="phone" v-model="phone">
                    <span style="color: red;" v-if="validationErrors.hasOwnProperty('phone')">{{ '* ' + validationErrors.phone[0] }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="addressLine1" class="col-sm-2 control-label">Address Line 1</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="addressLine1" v-model="addressLine1">
                    <span style="color: red;" v-if="validationErrors.hasOwnProperty('addressLine1')">{{ '* ' + validationErrors.addressLine1[0] }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="addressLine2" class="col-sm-2 control-label">Address Line 2</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="addressLine2" v-model="addressLine2">
                    <span style="color: red;" v-if="validationErrors.hasOwnProperty('addressLine2')">{{ '* ' + validationErrors.addressLine2[0] }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="city" class="col-sm-2 control-label">City</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="city" v-model="city">
                    <span style="color: red;" v-if="validationErrors.hasOwnProperty('city')">{{ '* ' + validationErrors.city[0] }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="state" class="col-sm-2 control-label">State</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="state" v-model="state">
                    <span style="color: red;" v-if="validationErrors.hasOwnProperty('state')">{{ '* ' + validationErrors.state[0] }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="postalCode" class="col-sm-2 control-label">Postal Code</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="postalCode" v-model="postalCode">
                    <span style="color: red;" v-if="validationErrors.hasOwnProperty('postalCode')">{{ '* ' + validationErrors.postalCode[0] }}</span>
                </div>
            </div>
            <div class="form-group">
                <label for="creditLimit" class="col-sm-2 control-label">Credit Limit</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="creditLimit" v-model="creditLimit">
                    <span style="color: red;" v-if="validationErrors.hasOwnProperty('creditLimit')">{{ '* ' + validationErrors.creditLimit[0] }}</span>
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
                creditLimit: '1000.00',
                validationErrors: {}
            }
        },
        methods: {
            submitCustomerForm: function (event) {
                //console.log('customer form submitted');
                //console.log(this.customer);
                var self = this;
                axios.post('http://laravel-retailer-rest.localhost/api/customers', {
                    customerName: self.customerName,
                    contactFirstName: self.contactFirstName,
                    contactLastName: self.contactLastName,
                    phone: self.phone,
                    addressLine1: self.addressLine1,
                    addressLine2: self.addressLine2,
                    city: self.city,
                    state: self.state,
                    postalCode: self.postalCode,
                    country: self.country,
                    salesRepEmployeeNumber: self.salesRepEmployeeNumber,
                    creditLimit: self.creditLimit
                })
                    .then(response => {
                        console.log('Response status code: ' + response.status);
                        console.log('Response status text: ' + response.statusText);
                        // TODO: Redirect to index view
                    })
                    .catch(error => {
                        // TODO: Handle validation errors
                        //console.log(error);
                        var response = error.response;
                        if (response.status == '400') {
                            self.validationErrors = response.data.validationErrors;
                            // if (self.validationErrors.hasOwnProperty('customerName')) {
                            //     console.log('validation errors contains customerName');
                            // }
                        }
                    });
            }
        }
    }

</script>

<style scoped>
</style>