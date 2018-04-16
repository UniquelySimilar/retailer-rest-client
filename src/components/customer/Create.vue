<template>
    <div id="customer-create">
        <div>
            <span class="component-heading">{{ getPageHeading }}</span>
        </div>
        <hr>
        <form class="form-horizontal">
            <form-input inputId="customer-name" inputLabel="Customer Name" v-bind:initialInputValue="customer.customerName"
                v-bind:validationErrors="validationErrors" validationPropertyName="customerName" v-on:input-changed="customerNameChanged"></form-input>

            <form-input inputId="contact-first-name" inputLabel="Contact First Name" v-bind:initialInputValue="customer.contactFirstName"
                v-bind:validationErrors="validationErrors" validationPropertyName="contactFirstName" v-on:input-changed="contactFirstNameChanged"></form-input>

            <form-input inputId="contact-last-name" inputLabel="Contact Last Name" v-bind:initialInputValue="customer.contactLastName"
                v-bind:validationErrors="validationErrors" validationPropertyName="contactLastName" v-on:input-changed="contactLastNameChanged"></form-input>

            <form-input inputId="phone" inputLabel="Phone" v-bind:initialInputValue="customer.phone"
                v-bind:validationErrors="validationErrors" validationPropertyName="phone" v-on:input-changed="phoneChanged"></form-input>

            <form-input inputId="address-line-1" inputLabel="Address Line 1" v-bind:initialInputValue="customer.addressLine1"
                v-bind:validationErrors="validationErrors" validationPropertyName="addressLine1" v-on:input-changed="addressLine1Changed"></form-input>

            <form-input inputId="address-line-2" inputLabel="Address Line 2" v-bind:initialInputValue="customer.addressLine2"
                v-bind:validationErrors="validationErrors" validationPropertyName="addressLine2" v-on:input-changed="addressLine2Changed"></form-input>

            <form-input inputId="city" inputLabel="City" v-bind:initialInputValue="customer.city"
                v-bind:validationErrors="validationErrors" validationPropertyName="city" v-on:input-changed="cityChanged"></form-input>

            <form-input inputId="state" inputLabel="State" v-bind:initialInputValue="customer.state"
                v-bind:validationErrors="validationErrors" validationPropertyName="state" v-on:input-changed="stateChanged"></form-input>

            <form-input inputId="postal-code" inputLabel="Postal Code" v-bind:initialInputValue="customer.postalCode"
                v-bind:validationErrors="validationErrors" validationPropertyName="postalCode" v-on:input-changed="postalCodeChanged"></form-input>

            <form-input inputId="credit-limit" inputLabel="Credit Limit" v-bind:initialInputValue="customer.creditLimit"
                v-bind:validationErrors="validationErrors" validationPropertyName="creditLimit" v-on:input-changed="creditLimitChanged"></form-input>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default" v-on:click.prevent="submitCustomerForm">{{ getSubmitBtnLabel }}</button>
                    <router-link class="btn btn-default" :to="{ name: 'customerIndex' }">Cancel</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import FormInput from './FormInput.vue';

    export default {
        props: {
            id: {
                type: Number,
                required: false
            }
        },
        data() {
            return {
                customer: {
                    id: undefined,
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
                },
                validationErrors: {}
            }
        },
        computed: {
            getPageHeading() {
                var pageHeading = "New Customer"
                if (this.id) {
                    pageHeading = "Edit Customer"
                }

                return pageHeading;
            },
            getSubmitBtnLabel() {
                var submitBtnLabel = "Save"
                if (this.id) {
                    submitBtnLabel = "Update"
                }

                return submitBtnLabel;
            },
        },
        methods: {
            customerNameChanged(event) {
                this.customer.customerName = event;
            },
            contactFirstNameChanged(event) {
                this.customer.contactFirstName = event;
            },
            contactLastNameChanged(event) {
                this.customer.contactLastName = event;
            },
            phoneChanged(event) {
                this.customer.phone = event;
            },
            addressLine1Changed(event) {
                this.customer.addressLine1 = event;
            },
            addressLine2Changed(event) {
                this.customer.addressLine2 = event;
            },
            cityChanged(event) {
                this.customer.city = event;
            },
            stateChanged(event) {
                this.customer.state = event;
            },
            postalCodeChanged(event) {
                this.customer.postalCode = event;
            },
            creditLimitChanged(event) {
                this.customer.creditLimit = event;
            },
            submitCustomerForm: function (event) {
                var requestData = {
                    id: this.id,
                    customerName: this.customer.customerName,
                    contactFirstName: this.customer.contactFirstName,
                    contactLastName: this.customer.contactLastName,
                    phone: this.customer.phone,
                    addressLine1: this.customer.addressLine1,
                    addressLine2: this.customer.addressLine2,
                    city: this.customer.city,
                    state: this.customer.state,
                    postalCode: this.customer.postalCode,
                    creditLimit: this.customer.creditLimit
                };

                // Create
                var method = 'post';
                var url = 'http://laravel-retailer-rest.localhost/api/customers';

                // Edit
                if (this.id) {
                    method = 'put';
                    url += '/' + this.id;
                }

                axios({
                    method: method,
                    url: url,
                    data: requestData
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
        },
        created() {
            if (this.id) {
                axios.get('http://laravel-retailer-rest.localhost/api/customers/' + this.id)
                .then(response => {
                    this.customer = response.data;
                    //console.log(this.customer);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
    }

</script>

<style scoped>
    .validation-error {
        color: red;
    }
</style>