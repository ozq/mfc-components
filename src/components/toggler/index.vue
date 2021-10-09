<template>
    <div class="m-toggler" :class="{ '-disabled': disabled, [`-${type}`]: Boolean(type) }" @click.stop="() => {}">
        <input type="checkbox" :id="`${id}`" v-model="checked" :disabled="disabled">
        <label :for="`${id}`"></label>
        <span class="m-toggler_label" v-if="label">{{ label }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                required: true,
            },
            label: {
                type: String,
                default: '',
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            type: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                id: null,
                checked: Boolean(this.value),
            };
        },
        watch: {
            checked(value) {
                this.$emit('input', value);
            },
            value: {
                immediate: false,
                handler() {
                    this.checked = this.value;
                },
            },
        },
        mounted() {
            this.id = Math.random().toString(16).slice(2);
        },
    };
</script>