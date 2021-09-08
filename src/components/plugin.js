import * as AllComponents from './index';
import VueI18n from 'vue-i18n';

export default {
    install(Vue, { components }) {
        const i18nExists = Vue.options.components.i18n;
        if (i18nExists === false) {
            Vue.use(VueI18n);
        }
        components = components || Object.keys(AllComponents);
        components.forEach(name => {
            Vue.component(name, AllComponents[name]);
        });
    }
};