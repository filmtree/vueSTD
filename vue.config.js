const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
})

// global.scss를 설정하면 모든 페이지에서 변수와 믹스인을 사용할 수 있음.
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/global.scss";`
      }
    }
  }
}