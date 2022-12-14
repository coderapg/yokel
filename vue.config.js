module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        https: '@/https',
        views: '@/views'
      }
    }
  }
}
