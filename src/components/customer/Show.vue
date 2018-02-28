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
                    console.log(this.customer);
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