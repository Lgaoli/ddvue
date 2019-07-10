module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://api.ddjingxuan.cn/api/v2/banner',
          changeOrigin: true,
          pathRewrite:{
            '^/api':''
          }
        }
      }
    }
  }