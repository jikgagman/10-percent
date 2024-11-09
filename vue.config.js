const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: './'
})
