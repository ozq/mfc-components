<template>
    <component class="m-icon" :is="require(`@/assets/images/icons/${name}.svg?inline`)"/>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: '',
            },
        },
    };
</script>