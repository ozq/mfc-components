<template>
    <vue-tel-input class="m-tel-input"
        v-model="formattedNumber"
        :placeholder="placeholder"
        :dynamic-placeholder="true"
        @onBlur="onBlur"
        @onInput="onInput"/>
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
                formattedNumber: this.value,
            };
        },
        components: {
            VueTelInput,
        },
        methods: {
            emitValidateEvent(valid) {
                this.$emit('validate', { valid: valid, error: valid ? '' : this.$t('validation.phoneFormat') });
            },
            onInput({ number, isValid }) {
                this.$emit('input', number.e164 || number.input);
                if (number.input && number.input.length > 0) {
                    if (this.valid === false && isValid === true) {
                        this.emitValidateEvent(isValid);
                    }
                    this.valid = isValid;
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