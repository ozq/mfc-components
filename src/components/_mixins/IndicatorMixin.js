export default {
    props: {
        state: {
            type: String,
            default: 'info',
            validator: function (value) {
                return ['info', 'warning', 'danger', 'success'].includes(value);
            },
        },
    },
};