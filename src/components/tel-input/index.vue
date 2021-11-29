<template>
    <vue-tel-input class="m-tel-input"
        :value="value"
        :placeholder="placeholder"
        :dynamic-placeholder="true"
        @blur="onBlur"
        @input="onInput"/>
</template>

<script>
    import { VueTelInput } from 'vue-tel-input';

    export default {
        props: {
            value: {
                type: String,
                default: '',
            },
            placeholder: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                valid: true,
            };
        },
        components: {
            VueTelInput,
        },
        methods: {
            emitValidateEvent(valid) {
                this.$emit('validate', { valid: valid, error: valid ? '' : this.$t('validation.phoneFormat') });
            },
            onInput(formattedNumber, numberObject) {
                this.$emit('input', number);
                const { valid, number } = numberObject;
                if (number && number.input && number.input.length > 0) {
                    if (this.valid === false && valid === true) {
                        this.emitValidateEvent(valid);
                    }
                    this.valid = valid;
                }
            },
            onBlur() {
                this.emitValidateEvent(this.valid);
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import '~vue-tel-input/dist/vue-tel-input.css';
</style>