module.exports = {
  chainWebpack: config => {
    config.module
      .rule('audio')
      .test(/\.(mp3|m4a|wav|flac)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      });
  },
  css: {
    loaderOptions: {
      sass: {
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}