<template>
    <div class="m-userpic" :style="wrapperStyle" @click="$emit('click')">
        <m-popover class="m-userpic_popover" placement="bottom" :trigger="trigger">
            <template slot="reference">
                <div class="m-userpic_image" :style="picStyle">{{ (title || '')[0] }}</div>
                <m-icon v-if="$slots.popover" class="m-userpic_caret" name="dropdown-arrow"/>
            </template>
            <slot name="popover"></slot>
        </m-popover>
    </div>
</template>

<script>
    import MIcon from '../icon';
    import MPopover from '../popover';

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
            trigger: {
                type: String,
                default: 'click',
            },
        },
        components: {
            MIcon,
            MPopover,
        },
        computed: {
            picStyle() {
                return {
                    backgroundImage: this.avatar ? `url('${this.avatar}')` : false,
                };
            },
            wrapperStyle() {
                return {
                    cursor: this.$listeners.click ? 'pointer' : 'inherit',
                };
            },
        },
    };
</script>