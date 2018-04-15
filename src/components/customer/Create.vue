<template>
    <div id="customer-create">
        <div>
            <span class="component-heading">New Customer</span>
        </div>
        <hr>
        <form class="form-horizontal">
            <form-input inputId="customer-name" inputLabel="Customer Name" v-bind:initialInputValue="customerName"
                v-bind:validationErrors="validationErrors" validationPropertyName="customerName" v-on:input-changed="customerNameChanged"></form-input>

            <form-input inputId="contact-first-name" inputLabel="Contact First Name" v-bind:initialInputValue="contactFirstName"
                v-bind:validationErrors="validationErrors" validationPropertyName="contactFirstName" v-on:input-changed="contactFirstNameChanged"></form-input>

            <form-input inputId="contact-last-name" inputLabel="Contact Last Name" v-bind:initialInputValue="contactLastName"
                v-bind:validationErrors="validationErrors" validationPropertyName="contactLastName" v-on:input-changed="contactLastNameChanged"></form-input>

            <form-input inputId="phone" inputLabel="Phone" v-bind:initialInputValue="phone"
                v-bind:validationErrors="validationErrors" validationPropertyName="phone" v-on:input-changed="phoneChanged"></form-input>

            <form-input inputId="address-line-1" inputLabel="Address Line 1" v-bind:initialInputValue="addressLine1"
                v-bind:validationErrors="validationErrors" validationPropertyName="addressLine1" v-on:input-changed="addressLine1Changed"></form-input>

            <form-input inputId="address-line-2" inputLabel="Address Line 2" v-bind:initialInputValue="addressLine2"
                v-bind:validationErrors="validationErrors" validationPropertyName="addressLine2" v-on:input-changed="addressLine2Changed"></form-input>

            <form-input inputId="city" inputLabel="City" v-bind:initialInputValue="city"
                v-bind:validationErrors="validationErrors" validationPropertyName="city" v-on:input-changed="cityChanged"></form-input>

            <form-input inputId="state" inputLabel="State" v-bind:initialInputValue="state"
                v-bind:validationErrors="validationErrors" validationPropertyName="state" v-on:input-changed="stateChanged"></form-input>

            <form-input inputId="postal-code" inputLabel="Postal Code" v-bind:initialInputValue="postalCode"
                v-bind:validationErrors="validationErrors" validationPropertyName="postalCode" v-on:input-changed="postalCodeChanged"></form-input>

            <form-input inputId="credit-limit" inputLabel="Credit Limit" v-bind:initialInputValue="creditLimit"
                v-bind:validationErrors="validationErrors" validationPropertyName="creditLimit" v-on:input-changed="creditLimitChanged"></form-input>

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
    import FormInput from './FormInput.vue';

    export default {
        data() {
            return {
                customerName: '',
                contactFirstName: '',
                contactLastName: '',
                phone: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: '',
                creditLimit: '',
                validationErrors: {}
            }
        },
        methods: {
            customerNameChanged(event) {
                this.customerName = event;
            },
            contactFirstNameChanged(event) {
                this.contactFirstName = event;
            },
            contactLastNameChanged(event) {
                this.contactLastName = event;
            },
            phoneChanged(event) {
                this.phone = event;
            },
            addressLine1Changed(event) {
                this.addressLine1 = event;
            },
            addressLine2Changed(event) {
                this.addressLine2 = event;
            },
            cityChanged(event) {
                this.city = event;
            },
            stateChanged(event) {
                this.state = event;
            },
            postalCodeChanged(event) {
                this.postalCode = event;
            },
            creditLimitChanged(event) {
                this.creditLimit = event;
            },
            submitCustomerForm: function (event) {
                axios.post('http://laravel-retailer-rest.localhost/api/customers', {
                    customerName: this.customerName,
                    contactFirstName: this.contactFirstName,
                    contactLastName: this.contactLastName,
                    phone: this.phone,
                    addressLine1: this.addressLine1,
                    addressLine2: this.addressLine2,
                    city: this.city,
                    state: this.state,
                    postalCode: this.postalCode,
                    country: this.country,
                    salesRepEmployeeNumber: this.salesRepEmployeeNumber,
                    creditLimit: this.creditLimit
                })
                    .then(response => {
                        //console.log('Response status code: ' + response.status);
                        //console.log('Response status text: ' + response.statusText);
                        // Redirect to index view
                        this.$router.push({name: 'customerIndex'});
                    })
                    .catch(error => {
                        //console.log(error);
                        var response = error.response;
                        if (response.status == '400') {
                            this.validationErrors = response.data.validationErrors;
                        }
                    });
            }
        },
        components: {
            FormInput
        }
    }

</script>

<style scoped>
    .validation-error {
        color: red;
    }
</style>