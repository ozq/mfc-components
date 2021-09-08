<template>
    <v-popover class="m-popover" popover-class="m-popover-theme" v-bind="$props" v-on="$listeners">
        <slot name="reference"></slot>
        <template slot="popover">
            <slot></slot>
        </template>
    </v-popover>
</template>

<script>
    import { VPopover } from 'v-tooltip';

    export default {
        props: {
            trigger: {
                type: String,
                // Popover must has click trigger by default, it's not tooltip!
                default: 'click',
            },
            placement: {
                type: String,
                default: 'bottom',
            },
            open: {
                type: Boolean,
                default: false,
            },
            offset: {
                type: String,
                default: '8',
            },
            autoHide: {
                type: Boolean,
                default: true,
            },
        },
        components: {
            VPopover,
        },
    };
</script>