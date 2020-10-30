<template>
    <div class="m-userpic" :style="wrapperStyle" @click="$emit('click')">
        <div class="m-userpic_image" :style="picStyle">{{ (title || '')[0] }}</div>
        <m-popover v-if="$slots.popover" class="m-userpic_popover" placement="bottom">
            <m-icon slot="reference" class="m-userpic_caret" name="dropdown-arrow"/>
            <slot name="popover"></slot>
        </m-popover>
    </div>
</template>

<script>
    import MIcon from '../icon';
    import MPopover from '../popover';
    import { VPopover } from 'v-tooltip';

    export default {
        props: {
            title: {
                type: String,
                default: '',
            },
            avatar: {
                type: String,
                default: '',
            },
        },
        components: {
            MIcon,
            MPopover,
            VPopover,
        },
        computed: {
            picStyle() {
                return {
                    backgroundImage: this.avatar ? `url('${this.avatar}')` : false,
                };
            },
            wrapperStyle() {
                return {
                    cursor: this.$listeners.click ? 'pointer' : 'initial',
                };
            },
        },
    };
</script>