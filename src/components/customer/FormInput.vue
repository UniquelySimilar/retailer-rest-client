<template>
    <div class="form-group">
        <label v-bind:for="inputId" class="col-sm-2 control-label">{{ inputLabel }}</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" v-bind:id="inputId" v-model="inputValue">
            <span class="validation-error" v-if="hasValidationError">{{ '* ' + validationError }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            inputId: {
                type: String,
                required: true
            },
            inputLabel: {
                type: String,
                required: true
            },
            initialInputValue: {
                required: true
            },
            validationErrors: {
                type: Object,
                required: true
            },
            validationPropertyName: {
                type: String,
                required: true
            }
        },
        computed: {
            inputValue: {
                get() {
                    return this.initialInputValue;
                },
                set(newValue) {
                    this.$emit('input-changed', newValue);
                }
            },
            hasValidationError() {
                return this.validationErrors.hasOwnProperty(this.validationPropertyName);
            },
            validationError() {
                return this.validationErrors[this.validationPropertyName][0];
            }
        }
    }
</script>

<style scoped>
    .validation-error {
        color: red;
    }
</style>