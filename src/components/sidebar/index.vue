<template>
    <aside class="m-sidebar-wrp" ref="wrapper">
        <sidebar-expanded v-if="expanded"
            class="m-sidebar-wrp_expanded"
            :width="expandedWidth"
            ref="expanded"
            @toggle="shrink">
            <template slot="expanded-header">
                <slot name="expanded-header"></slot>
            </template>
            <slot name="expanded-body"></slot>
        </sidebar-expanded>
        <sidebar-shrank v-else
            class="m-sidebar-wrp_shrank"
            ref="shrank"
            :width="shrankWidth"
            @toggle="expand">
            <template slot="shrank-header">
                <slot name="shrank-header"></slot>
            </template>
            <slot name="shrank-body"></slot>
        </sidebar-shrank>
    </aside>
</template>

<script>
    import Vue from 'vue';

    import SidebarShrank from './_shrank';
    import SidebarExpanded from './_expanded';

    export default {
        props: {
            expandedWidth: {
                type: String,
                default: '',
            },
            shrankWidth: {
                type: String,
                default: '',
            },
            expandedDefault: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                expanded: this.expandedDefault,
            };
        },
        components: {
            SidebarShrank,
            SidebarExpanded,
        },
        methods: {
            expand() {
                this.expanded = true;
            },
            shrink() {
                this.expanded = false;
            },
        },
        watch: {
            expanded: {
                immediate: false,
                handler(value) {
                    const $this = this;
                    Vue.nextTick(function () {
                        $this.$emit('toggle', {
                            expanded: Boolean(value),
                            width: $this.$refs.wrapper.offsetWidth,
                        });
                    });
                }
            },
        },
    };
</script>