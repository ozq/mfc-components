<template>
    <div class="m-dots-loader" :class="{ [`-${theme}`]: Boolean(theme) }">
        <div class="m-dots-loader_child m-dots-loader_dot-1"></div>
        <div class="m-dots-loader_child m-dots-loader_dot-2"></div>
        <div class="m-dots-loader_child m-dots-loader_dot-3"></div>
    </div>
</template>

<script>
    export default {
        props: {
            theme: {
                type: String,
                default: '',
                validator: function (value) {
                    return value === '' || ['primary', 'secondary'].includes(value);
                },
            },
        },
    };
</script>