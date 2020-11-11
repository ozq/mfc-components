<template>
    <div class="m-toggler" :class="{ '-disabled': disabled }" @click.stop="() => {}">
        <input type="checkbox" :id="`${id}`" v-model="checked" :disabled="disabled">
        <label :for="`${id}`"></label>
        <span class="m-toggler_label" v-if="label">{{ label }}</span>
    </div>
</template>

<script>
    import IdMixin from '@/components/_mixins/IdMixin';

    export default {
        mixins: [
            IdMixin,
        ],
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
        },
        data() {
            return {
                checked: Boolean(this.value),
            };
        },
        watch: {
            checked(value) {
                this.$emit('input', value);
            },
            value: {
                handler() {
                    this.checked = this.value;
                },
            },
        },
    };
</script>