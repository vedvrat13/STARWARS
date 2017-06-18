const path = require('path');

module.exports = {
    entry: {
        app: ['./index.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname + '/src'),
            'node_modules'
        ],
        extensions: ['.js', '.css']
    },
    devtool: 'cheap-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.scss$/,
            exclude: /flexboxgrid/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules',
            include: /flexboxgrid/
        }]
    }
};
