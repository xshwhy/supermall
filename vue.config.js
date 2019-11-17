module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // devServer: {
  //   // 设置默认端口
  //   port: 8080,
  //   // 默认打开浏览器
  //   open: true,
  //   // 设置代理
  //   proxy: {
  //     '/api': {
  //       // 目标 API 地址
  //       target: 'http://123.207.32.32:8000',//真实的api地址
  //       // 如果要代理 websockets
  //       // ws: true,
  //       // 将主机标头的原点更改为目标URL
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
}
