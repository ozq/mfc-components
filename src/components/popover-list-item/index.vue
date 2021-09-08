<template>
    <li class="m-popover-list-item" :class="{ '-active': active }" @click="$event => $emit('click', $event)">
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