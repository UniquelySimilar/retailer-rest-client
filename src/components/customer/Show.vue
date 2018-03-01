<template>
    <div id="customer-show">
        <h2>Customer</h2>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Customer Name:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.customerName }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Contact First Name:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.contactFirstName }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Contact Last Name:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.contactLastName }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Address Line 1:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.addressLine1 }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>City:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.city }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>State:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.state }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Postal Code:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.postalCode }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Phone:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.phone }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 property-label">
                <span>Credit Limit:</span>
            </div>
            <div class="col-md-4">
                <span>{{ customer.creditLimit }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customer: {}
            }
        },
        created() {
            axios.get('http://laravel-retailer-rest.localhost/api/customers/1')
                .then(response => {
                    this.customer = response.data;
                    //console.log(this.customer);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    .property-label {
        font-weight: bold;
    }
</style>