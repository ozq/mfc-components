<template>
    <m-popover class="m-locale-selector" placement="bottom" :open="isOpened" @show="isOpened = true" @hide="isOpened = false">
        <m-popover-list>
            <m-popover-list-item v-for="locale in localeItems" :key="locale.code" @click="handleSelect(locale.code)">
                <a class="m-locale-item"><m-icon :name="`locale_${locale.code}`"/>&nbsp;{{ locale.label }}</a>
            </m-popover-list-item>
        </m-popover-list>
        <span slot="reference" class="m-locale-item m-locale-reference" :class="{ ['-opened']: isOpened }">
            <m-icon :name="`locale_${locale}`"/>&nbsp;<span>{{ localesMap[locale] }}</span>
        </span>
    </m-popover>
</template>

<script>
    import MIcon from '../icon';
    import MPopover from '../popover';
    import MPopoverList from '../popover-list';
    import MPopoverListItem from '../popover-list-item';

    const DEFAULT_LOCALE = 'ru';

    export default {
        props: {
            locale: {
                type: String,
                default: DEFAULT_LOCALE,
            },
            locales: {
                type: Array,
                default: () => ['en', 'ru'],
            },
        },
        components: {
            MIcon,
            MPopover,
            MPopoverList,
            MPopoverListItem,
        },
        data() {
            return {
                isOpened: false,
                localesMap: {
                    en: 'English',
                    ru: 'Русский',
                },
            };
        },
        computed: {
            localeItems() {
                return this.locales.map(code => ({
                    code: code,
                    label: this.localesMap[code],
                }));
            },
        },
        methods: {
            handleSelect(code) {
                this.isOpened = false;
                this.$emit('select', code);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .m-locale-reference {
        &::after {
            background-image: url('~@/assets/images/icons/dropdown-arrow.svg');
        }
    }
</style>