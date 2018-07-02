const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    //entry: ['./Scripts/es6/main.js'],
    output: {
        path: path.resolve(__dirname, './Scripts/build'),
        filename: 'bundle.js'
    },
    // IMPORTANT NOTE: If you are using Webpack 2 or above, replace "loaders" with "rules"
    module: {
        //rules: [{
        //    use: 'babel-loader',
        //    test: /\.js$/,
        //    exclude: /node_modules/
        //}]
        rules: [
                   {
                       test: /\.js?$/,
                       options: {
                           presets: [
                               'react', 'stage-2', 'es2015',
                               ['env', { targets: { browsers: ['last 2 versions'] } }]
                           ]
                       },
                       loader: 'babel-loader',
                       exclude: /node_modules/
                   },
                   {
                       test: /(\.css)$/,
                       use: [
                          { loader: "style-loader" },
                          { loader: "css-loader" }
                       ]
                   },
                 //{
                 //    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [
                 //     {
                 //         loader: 'file-loader',
                 //         options: {}
                 //     }
                 //    ]
                 //},
                 {
                     test:/\.(eot|svg|ttf|woff|woff2)$/, use: [
                      {
                          loader: 'file-loader',
                          options: {}
                      }
                     ]
                 },
//                 { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },


        ],
       
    }
}