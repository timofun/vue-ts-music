/**
 * Created by Administrator on 2018/9/27.
 * function : xxxxx
 */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: '/',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('assets', resolve('src/assets'))
    .set('components', resolve('src/components'))
    .set('common', resolve('src/common'))
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 5566,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://192.168.1.105:3000/',
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: false
      }
    },
    before: app => {}
  },
}
