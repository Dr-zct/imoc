const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap:false, // 生产环境打包 不生产map.js文件
  lintOnSave:false,
  publicPath: "./",
  devServer: {
    open:false,
    host:"0.0.0.0",
    port: '8080',
    https:false,
    proxy: {
      '/api': {
        // target: 'http://10.3.73.139:8088',// 余金辉
        target: 'http://121.5.124.169:8088',// 余金辉
        // target: 'http://yujhh.vip3gz.91tunnel.com',// 余金辉
        // target: 'http://10.11.8.49:9002',
        // target: 'http://10.3.73.23:8088', // 徐京
        // target: 'http://localhost:8080', // 徐京
        // target: 'http://457226yy44.qicp.vip/api/cloud/getConfig', // 徐京
        // target: 'http://10.11.8.67:9002', // 线上
        changeOrigin: true,
        pathRewrite: {
          '^/api':'api'
         }
      }
    }
  }
})
