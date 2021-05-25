const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    vue: ['vue', 'vue-country-intl']
  },
  mode: 'production',
  output: {
    filename: '[name].dll.js', // 输出的文件名
    path: path.resolve(__dirname, 'dist', 'dll'),
    library: '[name]_dll' // 在manifestz中的名字
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.resolve(__dirname, 'dist', 'dll', 'manifest.json')
    })
  ]
}
