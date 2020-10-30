<template>
    <v-popover class="m-popover" popover-class="m-popover-theme" :v-bind="$props">
        <slot name="reference"></slot>
        <template slot="popover">
            <slot></slot>
        </template>
    </v-popover>
</template>

<script>
    import { VPopover } from 'v-tooltip';

    export default {
        components: {
            VPopover,
        },
    };
</script>