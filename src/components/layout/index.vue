<template>
    <div class="m-layout">
        <slot name="sidebar"></slot>
        <div class="m-layout_content">
            <m-header class="m-layout_header">
                <slot name="header"></slot>
            </m-header>
            <div class="m-layout_body">
                <slot name="body"></slot>
            </div>
            <div v-if="$slots.footer" class="m-layout_footer">
                <slot name="footer"></slot>
            </div>
        </div>
        <slot name="shadow"></slot>
    </div>
</template>

<script>
    import MHeader from '../header';
    import MSidebar from '../sidebar';

    export default {
        components: {
            MHeader,
            MSidebar,
        },
    };
</script>