<template>
    <ul class="m-menu" :class="{ '-sp': shiftPadding }">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        props: {
            shiftPadding: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>