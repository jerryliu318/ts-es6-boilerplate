
const path = require('path');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        basic: ["./src/basic.ts"],
    },
    output: {
        filename: '[name].bundle.js',
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: nodeModulesPath,
            loader: 'babel-loader',
        }],
    },

    mode: 'production',
}