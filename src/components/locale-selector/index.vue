<template>
    <el-dropdown class="m-locale-selector" placement="bottom" @command="handleSelect">
        <span class="m-locale-item m-locale-reference">
            <m-icon :name="`locale_${locale}`"/>&nbsp;<span>{{ localesMap[locale] }}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="locale in localeItems"
                :key="locale.code"
                :command="locale.code"
                class="m-locale-item">
               <m-icon :name="`locale_${locale.code}`"/>&nbsp;{{ locale.label }}
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    import MIcon from '../icon';
    import {
        Dropdown,
        DropdownMenu,
        DropdownItem,
    } from 'element-ui';

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
            Dropdown,
            DropdownItem,
            DropdownMenu,
        },
        data() {
            return {
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