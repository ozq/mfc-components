<template>
    <span class="m-indicator-tag" :class="{ [`-${size}`]: Boolean(size), [`-${state}`]: true }"><slot></slot></span>
</template>

<script>
    import SizeMixin from '@/components/_mixins/SizeMixin';
    import IndicatorMixin from '@/components/_mixins/IndicatorMixin';

    export default {
        mixins: [
            SizeMixin,
            IndicatorMixin,
        ],
    };
</script>