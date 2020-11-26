<template>
    <li class="m-popover-list-item" :class="{ '-active': active }" @click="$emit('click')">
        <div class="m-popover-list-item_body">
            <slot></slot>
        </div>
    </li>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>