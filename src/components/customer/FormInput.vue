<template>
    <div class="form-group">
        <label v-bind:for="inputId" class="col-sm-2 control-label">{{ inputLabel }}</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" v-bind:id="inputId" v-model="inputValue" v-on:keyup="emitInputEvent">
            <span class="validation-error" v-if="hasValidationError">{{ '* ' + validationError }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputValue: this.initialInputValue
            }
        },
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
                type: String,
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
            hasValidationError() {
                return this.validationErrors.hasOwnProperty(this.validationPropertyName);
            },
            validationError() {
                return this.validationErrors[this.validationPropertyName][0];
            }
        },
        methods: {
            emitInputEvent() {
                this.$emit('input-changed', this.inputValue);
            }
        }
    }
</script>

<style scoped>
    .validation-error {
        color: red;
    }
</style>