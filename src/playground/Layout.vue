<template>
    <m-layout>
        <demo-sidebar slot="sidebar"/>
        <div slot="header">Header</div>
        <div slot="body">Body</div>
        <div slot="footer">Footer</div>
    </m-layout>
</template>

<script>
    import './theme.scss';
    import { MLayout } from '@/components';
    import DemoSidebar from './Sidebar';

    export default {
        components: {
            MLayout,
            DemoSidebar,
        },
    };
</script>