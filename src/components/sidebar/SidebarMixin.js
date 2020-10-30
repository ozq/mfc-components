import MIcon from '../icon';
import MSidebarButton from '../../components/sidebar-button';

export default {
    props: {
        width: {
            type: String,
            required: true,
        },
        showHeader: {
            type: Boolean,
            default: true,
        },
    },
    components: {
        MSidebarButton,
        MIcon,
    },
    computed: {
        rootStyles() {
            return {
                width: this.width,
            };
        },
    },
};