const path = require('path');

module.exports = {
    lintOnSave: false,
    css: {
        extract: false,
    },
    chainWebpack: (config) => {
        config.module.rules.delete('eslint');
        config.resolve.alias.set('@', path.resolve(__dirname, './src'));

        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .oneOf('inline')
                .resourceQuery(/inline/)
                .use('babel-loader')
                    .loader('babel-loader')
                    .end()
                .use('vue-svg-loader')
                    .loader('vue-svg-loader')
                    .end()
                .end()
            .oneOf('normal')
                .use('file-loader')
                    .loader('svg-url-loader')
                    .end()
                .end();
    },
};