<template>
    <div class="m-userpic" :style="wrapperStyle" @click="$emit('click')">
        <el-popover :disabled="!$slots.default" class="m-userpic_popover" placement="bottom" trigger="click">
            <div slot="reference">
                <div class="m-userpic_reference">
                    <div class="m-userpic_image" :style="picStyle">{{ (title || '')[0] }}</div>
                    <m-icon v-if="$slots.default" class="m-userpic_caret" name="dropdown-arrow"/>
                </div>
            </div>
            <slot></slot>
        </el-popover>
    </div>
</template>

<script>
    import MIcon from '../icon';
    import {
        Popover,
    } from 'element-ui';

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
            Popover,
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