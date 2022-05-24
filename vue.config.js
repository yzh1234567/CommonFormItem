const path = require('path');


// // 用于开启gzip压缩
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const productionGzipExtensions = ['js', 'css'];

module.exports={
  configureWebpack:{
      resolve:{
          alias:{
              '@':path.resolve(__dirname,'./src')
          }
      },
    // plugins:[
    //     new CompressionWebpackPlugin({
    //         filename: '[path].gz[query]',   // 提示compression-webpack-plugin@3.0.0的话asset改为filename
    //         algorithm: 'gzip',
    //         test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //         threshold: 10240,
    //         minRatio: 0.8,
    //         deleteOriginalAssets: false,
    //     }),
    // ]
    }
  }