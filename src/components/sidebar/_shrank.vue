<template>
    <div class="m-sidebar-shrank" :style="rootStyles">
        <m-sidebar-button @click.native="$emit('toggle')" class="m-sidebar-shrank_toggler">
            <m-icon name="arrow-right"/>
        </m-sidebar-button>
        <div class="m-sidebar-shrank_header" v-if="$slots['shrank-header']">
            <slot name="shrank-header"></slot>
        </div>
        <div class="m-sidebar-shrank_body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import SidebarMixin from './SidebarMixin';

    export default {
        mixins: [
            SidebarMixin,
        ],
    };
</script>