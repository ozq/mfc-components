<template>
    <div class="m-sidebar-expanded" :style="rootStyles">
        <div class="m-sidebar-expanded_header">
            <slot name="expanded-header"></slot>
            <m-sidebar-button class="m-sidebar-expanded_toggler" :border-side="false" @click.native="$emit('toggle')">
                <m-icon name="arrow-right" class="m-sidebar-expanded_icon"/>
            </m-sidebar-button>
        </div>
        <div class="m-sidebar-expanded_body">
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