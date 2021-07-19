<template>
    <li class="m-menu-item" :class="{ '-active': active }" @click="$emit('click', $event)">
        <span class="m-menu-item_icon" v-if="$slots.icon">
            <slot name="icon"></slot>
        </span>
        <span class="m-menu-item_body">
            <slot></slot>
        </span>
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