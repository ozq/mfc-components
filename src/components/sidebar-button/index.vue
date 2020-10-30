<template>
    <div class="m-sidebar-button" :class="{ '-active': active }" :style="styles" @click="$emit('click')">
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: false,
            },
            borderSide: {
                default: 'bottom',
            },
        },
        computed: {
            styles() {
                let styles = {};
                if (this.borderSide) {
                    styles[`border-${this.borderSide}-width`] = '1px';
                }
                return styles;
            },
        },
    };
</script>