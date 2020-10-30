<template>
    <span class="m-indicator" :class="{ [`-${size}`]: Boolean(size), [`-${state}`]: true }"></span>
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