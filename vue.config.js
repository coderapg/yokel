module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: 'src/assets',
        common: 'src/common',
        components: 'src/components',
        https: 'src/https',
        views: 'src/views'
      }
    }
  }
}
