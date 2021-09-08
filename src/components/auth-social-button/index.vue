<template>
    <button class="m-auth-social-button" :class="{ [`-${code}`]: true }" @click="handleClick">
        <img class="m-auth-social-button_icon" :src="require(`@/assets/images/icons/auth_${code}.svg`)" width="24" height="24">
        <span>{{ $t('prefix') }} <span style="text-transform: capitalize;">{{ name }}</span></span>
    </button>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
        },
        computed: {
            code() {
                return this.name.toLowerCase();
            },
        },
        methods: {
            handleClick($event) {
                this.$emit('click', $event);
            },
        },
        i18n: {
            messages: {
                en: { prefix: 'Continue with' },
                ru: { prefix: 'Войти через' },
            },
        },
    };
</script>