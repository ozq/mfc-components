<template>
    <m-sidebar>
        <template slot="shrank-header">
            <span>Shrank header</span>
        </template>
        <template slot="shrank">
            <span>Shrank body</span>
        </template>
        <template slot="expanded-header">
            <span>Expanded header</span>
        </template>
        <template slot="expanded">
            <span>Expanded body</span>
        </template>
    </m-sidebar>
</template>

<script>
    import './theme.scss';
    import { MSidebar } from '@/components';

    export default {
        components: {
            MSidebar,
        },
    };
</script>