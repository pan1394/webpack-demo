const path = require('path');
const webpack = require('webpack');

module.exports = {
  
  entry: {
    main :        './src/javascript/main.js',
    myBarChart :  './src/javascript/myBarChart.js',
    index :       './src/typescript/index.ts',
  } ,

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
         rules: [
             { test: /\.css$/, use: ['style-loader','css-loader'] },
             { test: require.resolve('jquery'),
                use: [{
                   loader: 'expose-loader',
                   options: 'jQuery'
                },{
                   loader: 'expose-loader',
                   options: '$'
                }]
             },
             { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
         ]
  },
   
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  plugins: [
    new webpack.ProvidePlugin({
        "$": "jquery",
        "jQuery": "jquery",
        "window.jQuery": "jquery"
    }) ,
  ],

}