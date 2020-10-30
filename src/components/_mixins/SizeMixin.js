export default {
    props: {
        size: {
            type: String,
            required: false,
            validator: function (value) {
                return ['xs', 'sm', 'md', 'lg'].includes(value);
            },
        },
    },
};