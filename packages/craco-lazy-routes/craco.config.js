const { CracoAliasPlugin } = require('react-app-alias')

const options = {}

module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpe?g|png)$/i,
                type: 'asset',
            },
        ],
    },
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: options,
        },
    ]
}
